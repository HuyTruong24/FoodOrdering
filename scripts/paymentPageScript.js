document.addEventListener('DOMContentLoaded', function() {
    const placeOrderButton = document.querySelector('button[onclick="confirmOrder()"]');
    const cardNumberInput = document.getElementById('cardNumber');
    const cvvInput = document.getElementById('cvv');

    // Initially disable the Place Order button
    placeOrderButton.disabled = true;

    // Validate card number input to only allow numbers and enable/disable the Place Order button
    cardNumberInput.addEventListener('input', function(event) {
        const value = event.target.value;
        event.target.value = value.replace(/\D/g, ''); // Remove non-digit characters

        // Enable the Place Order button if the card number is not empty
        placeOrderButton.disabled = value.length === 0;
    });

    // Validate CVV input to only allow numbers
    cvvInput.addEventListener('input', function(event) {
        const value = event.target.value;
        event.target.value = value.replace(/\D/g, ''); // Remove non-digit characters
    });

    document.getElementById('sameAsBilling').addEventListener('change', function() {
        const billingAddress = document.getElementById('billingAddress');
        billingAddress.style.display = this.checked ? 'none' : 'block';
    });

    document.getElementById('sameAsDelivery').addEventListener('change', function() {
        const deliveryAddress = document.getElementById('deliveryAddress');
        deliveryAddress.style.display = this.checked ? 'none' : 'block';
    });

    function confirmOrder() {
        const cardNumber = document.getElementById('cardNumber').value;
        const cardNumberError = document.getElementById('cardNumberError');

        // Check if the card number is null or empty
        if (cardNumber === null) {
            cardNumberError.innerText = "Card number is required.";
            cardNumberError.style.display = 'block';
            return;
        } else {
            cardNumberError.style.display = 'none';
        }

        const summary = `
            Card Type: ${document.getElementById('cardType').value}
            Name: ${document.getElementById('name').value}
            Address: ${document.getElementById('address').value}
            Billing Address: ${document.getElementById('sameAsBilling').checked ? 'Same as Address' : document.getElementById('billingAddress').value}
            Delivery Address: ${document.getElementById('sameAsDelivery').checked ? 'Same as Address' : document.getElementById('deliveryAddress').value}
        `;
        document.getElementById('orderSummary').innerText = summary;
        document.getElementById('confirmationModal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('confirmationModal').style.display = 'none';
    }

    function submitOrder() {
        closeModal();
        sessionStorage.clear()
        localStorage.clear()
        window.location.href= 'cat.html'
    }

    // Function to go back to the checkout page
    function goBackToCheckout() {
        window.history.back();
    }

    // Attach event listeners to the buttons
    document.querySelector('button[onclick="confirmOrder()"]').addEventListener('click', confirmOrder);
    document.querySelector('button[onclick="closeModal()"]').addEventListener('click', closeModal);
    document.querySelector('button[onclick="submitOrder()"]').addEventListener('click', submitOrder);
    document.querySelector('button[onclick="goBackToCheckout()"]').addEventListener('click', goBackToCheckout);
});