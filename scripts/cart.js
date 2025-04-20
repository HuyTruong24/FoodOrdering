export let cart;
loadFromStorage();
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem("foodDeliveryBag"));
  if (!cart) {
    cart = [];
  }
}
function saveToStorage() {
  localStorage.setItem("foodDeliveryBag", JSON.stringify(cart));
}
export function addToCart(foodID, amount) {
  let matchingItem = null;
  cart.forEach((item) => {
    if (foodID === item.foodID) {
      matchingItem = item;
    }
  });
  if (matchingItem !== null) {
    matchingItem.quantity = amount;
  } else {
    cart.push({
      foodID: foodID,
      quantity: amount,
    });
  }
  saveToStorage();
}
export function removeFromCart(foodID) {
  const newCart = [];
  cart.forEach((item) => {
    if (foodID !== item.foodID) {
      newCart.push(item);
    }
  });
  cart = newCart;
  saveToStorage();
}
export function clearCart(){
  cart = []
  saveToStorage();
}
export function calculateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  return cartQuantity;
}

export function updateQuantity(foodID, newQuantity) {
  cart.forEach((item) => {
    if (foodID === item.foodID) {
      item.quantity = newQuantity;
    }
  });
  saveToStorage();
}
export function updateDeliveryOption(foodID, deliveryOptionId) {
  let matchingItem = null;
  cart.forEach((item) => {
    if (foodID === item.foodID) {
      matchingItem = item;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}
export function getNumItems(){
  return cart? cart.length : '';
}
