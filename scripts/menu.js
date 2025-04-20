import {addToCart, updateQuantity, getNumItems} from './cart.js'
import { restaurants } from './data.js';
import { restaurant, getRest, loadRestFromStorage} from './restaurant.js';
import {formatCurrency} from './formatCurrency.js'
loadRestFromStorage()
let foodItems = restaurant.menu || []

function filterFoodItem(input){
    let filteredFood = restaurant.menu.filter((foodItem) => {
        let matchingKeyword = false;
        foodItem.keywords.forEach((keyword) => {
            if (keyword.toLowerCase().includes(input.toLowerCase())) {
                matchingKeyword = true;
            }
        });
        return (
            matchingKeyword ||
            foodItem.foodName.toLowerCase().includes(input.toLowerCase())
        );
    });

    foodItems = filteredFood
}
function loadMenuPage(){
    const restaurantInfoHtml = `
        <div class="restuarant-thumbnail">
            <img class="restaurant-image" src="${restaurant.image}">
        </div>
        <div class="detail-restuarant-info">
            <h2 class="restaurant-name">${restaurant.name}</h2>
        </div>
    `
    document.querySelector('.link-to-checkout-page').textContent = `Food Bag(${getNumItems()})`;
    document.querySelector('.js-restaurant-info').innerHTML = restaurantInfoHtml

    //render menu page
    let html = '<button class="categories js-categories" name="">All</button>';
    restaurant.categories.forEach((category) => {
        html += `<button class="categories js-categories" name="${category}">${category}</button>`
    });
    document.querySelector('.js-menu').innerHTML = html;

    const buttons = document.querySelectorAll(".js-categories")
    let activeButtonIndex = sessionStorage.getItem('activeButtonIndex');
    if (activeButtonIndex === "null") {
        activeButtonIndex = null;
    }
    if (activeButtonIndex !== null) {
        buttons[activeButtonIndex].classList.add('categories-selected');
    } 
    //handle click on menu category
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.classList.remove('categories-selected'));
            console.log('remove')
            const category = button.name
            
            sessionStorage.setItem('activeButtonIndex', index);
            setTimeout(()=>{
                window.location.href = `menu.html?search=${category}`;
            },300)
        })
    })

    const url = new URL(window.location.href);
    const search = url.searchParams.get("search");
    if(search){
        filterFoodItem(search)
    }
    //render food grid and num result
    let htmlGid = ''
    let numResult = foodItems.length
    foodItems.forEach((foodItem)=>{
        htmlGid += `
            <div class="food-container">
                <div class="food-image-container">
                    <img class="food-image" src= ${foodItem.foodImage}>
                </div>
                <div class="food-name">${foodItem.foodName}</div>
                <div class="food-price">$${formatCurrency(foodItem.price)}</div>
                <div class="food-nav-container">
                    <input class="quantity-input js-quantity-input-${foodItem.foodID}"  type="number" value="1" min="1" max="100">
                    
                    <button class="add-button js-add-button" data-food-id = "${foodItem.foodID}">Add</button>
                </div>
            </div>
        `
    })
    document.querySelector('.js-num-results').textContent = `${numResult} results`
    const parent = document.querySelector('.food-display')
    if(numResult === 0){
        parent.innerHTML += `<div class="no-result-found">No result found for "${search}"</div>`
    }else{
        parent.innerHTML += '<div class="food-grid js-food-grid"></div>'
        document.querySelector('.js-food-grid').innerHTML = htmlGid
    }
    

    document.querySelectorAll(".js-add-button").forEach((button) => {
        let addedMessageTimeoutId;
        button.addEventListener("click", () => {
            const {foodId} = button.dataset
            try {
                const input = document.querySelector(`.js-quantity-input-${foodId}`)
                const number = Number(input.value)
                if(number > 0 && Number.isInteger(number)){
                    //add foodID to cart
                    addToCart(Number(foodId),number)
                    //updateQuantity(Number(foodId),number)
                    document.querySelector('.link-to-checkout-page').textContent = `Food Bag(${getNumItems()})`
                    
                    setTimeout(() => {
                        button.textContent = 'Added'
                        button.disabled = true
                        
                        // Check if a previous timeoutId exists. If it does,
                        // we will stop it.
                        if (addedMessageTimeoutId) {
                            clearTimeout(addedMessageTimeoutId);
                        }
                        //remove this class in two secs
                        const timeoutId = setTimeout(() => {
                            button.textContent = 'Add'
                            button.disabled = false
                            
                        }, 2500);
                        // Save the timeoutId so we can stop it later.
                        addedMessageTimeoutId = timeoutId;
                    });
                }else{
                    input.value = 1
                }
            } catch (error) {
                console.log('Not a number')
            }

        })
    })

    const input = document.querySelector(".search-bar")
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter"){
            sessionStorage.setItem('activeButtonIndex',null)
            setTimeout(()=>{
                input.value.length === 0? window.location.href = `menu.html`:
                window.location.href = `menu.html?search=${input.value}`;
            }, 300)
        }
            
    });
    document.querySelector('.search-button').addEventListener('click',()=>{
        sessionStorage.setItem('activeButtonIndex',null)
        setTimeout(()=>{
            input.value.length === 0? window.location.href = `menu.html`:
            window.location.href = `menu.html?search=${input.value}`;
        }, 300)
    })

    document.querySelector('.link-to-homepage').addEventListener('click',()=>{
        sessionStorage.setItem('activeButtonIndex',null)
    })
    document.querySelector('.link-to-checkout-page').addEventListener('click',()=>{
        sessionStorage.setItem('activeButtonIndex',null)
    })
}
loadMenuPage()


