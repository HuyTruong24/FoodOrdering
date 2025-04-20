import {cart, loadFromStorage,removeFromCart, updateQuantity, calculateCartQuantity} from "./cart.js" 
import { restaurants, getFood } from "./data.js";
import { formatCurrency } from "./formatCurrency.js";
import { restaurant, getRest, loadRestFromStorage} from './restaurant.js';

function calculateTotal(){
    let total = 0
    cart.forEach((item)=>{
        const foodDetail = getFood(item.foodID);
        total += (item.quantity * foodDetail.price)
    })
    return total
}
function loadCheckoutPage(){
    loadFromStorage()
    document.querySelector('.review-title').textContent = cart.length > 0?
        'Review Your Order' : 'Your food bag is empty'
    //render items in cart to review
    let html=''
    cart.forEach((item) => {
        const foodDetail = getFood(item.foodID);
        html += `<div class="food-item-container">
                    <div class="food-thumbnail-container">
                        <img class="food-thumbnail" src="${foodDetail.foodImage}">
                        <button class="delete-button js-delete-button" data-food-id="${foodDetail.foodID}">x</button>
                    </div>
                    <div class="food-name">${foodDetail.foodName}</div>
                    <div class="food-price">$ ${formatCurrency(foodDetail.price)}</div>
                    <div class="quantity-container">
                        <button class="quantity-adjustment quantity-decrement" data-food-id="${foodDetail.foodID}">-</button>
                        <div class="final-quantity js-quantity-${foodDetail.foodID}">${item.quantity}</div>
                        <button class="quantity-adjustment quantity-increment" data-food-id="${foodDetail.foodID}">+</button>
                        <div class="quantity-error-message js-error-message-${foodDetail.foodID}">Quantity must be at least 1</div>
                    </div>
                </div>`
    });
    document.querySelector('.review-order-display').innerHTML = html


    //render order summary section
    const totalBeforeTax = calculateTotal()
    const shippingFee = totalBeforeTax===0? 0 : 1000
    const gstTax = totalBeforeTax+shippingFee===0? 0 : (totalBeforeTax+shippingFee) * 0.05
    const hstTax = totalBeforeTax+shippingFee===0? 0 : (totalBeforeTax+shippingFee) * 0.07
    const orderSummaryHTML = `
            <div class="payment-summary-row">
                <div class="payment-summary-field">Total before tax:</div>
                <div class="payment-summary-price">$${formatCurrency(totalBeforeTax)}</div>
            </div>
            <div class="payment-summary-row">
                <div class="payment-summary-field">Shipping:</div>
                <div class="payment-summary-price">$${formatCurrency(shippingFee)}</div>
            </div>
            <div class="payment-summary-row">
                <div class="payment-summary-field">GST (5%):</div>
                <div class="payment-summary-price">$${formatCurrency(gstTax)}</div>
            </div>
            
            <div class="payment-summary-row">
                <div class="payment-summary-field">PST (7%):</div>
                <div class="payment-summary-price">$${formatCurrency(hstTax)}</div>
            </div>
            
            <div class="payment-summary-row order-total">
                <div class="payment-summary-field">Total:</div>
                <div class="payment-summary-price">$${formatCurrency(totalBeforeTax+shippingFee+gstTax+hstTax)}</div>
            </div>
    `
    document.querySelector('.order-summary-display').innerHTML = orderSummaryHTML


    //handle delete button
    document.querySelectorAll('.js-delete-button').forEach((button)=>{
        button.addEventListener('click',()=>{
            const {foodId} = button.dataset;
            removeFromCart(Number(foodId))
            loadCheckoutPage();
        })
    })

    //handle increment button
    document.querySelectorAll('.quantity-increment').forEach((button)=>{
        button.addEventListener('click',()=>{
            const {foodId}=button.dataset
            const currentQuantity = Number(document.querySelector(`.js-quantity-${foodId}`).textContent)
            updateQuantity(Number(foodId), currentQuantity+1)
            loadCheckoutPage();
        })
    })

    //handle decrement button
    document.querySelectorAll('.quantity-decrement').forEach((button)=>{
        let errorMessageTimoutID
        button.addEventListener('click',()=>{
            const {foodId}=button.dataset
            const currentQuantity = Number(document.querySelector(`.js-quantity-${foodId}`).textContent)
            const newQuantity = currentQuantity-1
            if(newQuantity > 0){
                updateQuantity(Number(foodId), newQuantity)
                loadCheckoutPage();
            }else{
                const errorMessage = document.querySelector(
                    `.js-error-message-${foodId}`
                );
                errorMessage.classList.add("display-quantity-error-message");
                setTimeout(() => {
                    // Check if a previous timeoutId exists. If it does,
                    // we will stop it.
                    if (errorMessageTimoutID) {
                        clearTimeout(errorMessageTimoutID);
                    }
                    //remove this class in three secs
                    const timeoutId = setTimeout(() => {
                        errorMessage.classList.remove("display-quantity-error-message");
                    }, 3000);
                    // Save the timeoutId so we can stop it later.
                    errorMessageTimoutID = timeoutId;
                });
            }
                
        })
    })
    //disable back button if there is no specific restaurant
    const backButton = document.querySelector('.button-back')
    backButton.disabled = restaurant !== null && Object.keys(restaurant).length !== 0? false : true
    
    backButton.addEventListener('click',()=>{
        window.location.href = 'menu.html'
    })

    //disable next button
    const nextButton = document.querySelector('.button-next')
    if(cart){
        nextButton.disabled = cart.length > 0 ? false : true
    }
    nextButton.addEventListener('click',()=>{
        window.location.href = 'paymentPage.html'
    })
}
loadCheckoutPage()

