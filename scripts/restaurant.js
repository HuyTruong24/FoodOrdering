import { restaurants } from './data.js';
export let restaurant;
loadRestFromStorage()
export function loadRestFromStorage() {
    restaurant = JSON.parse(localStorage.getItem("tempRestaurant"));
    if (!restaurant) {
        restaurant = {};
    }
}
export function getRest(){
    return JSON.parse(localStorage.getItem("tempRestaurant"));
}
function saveToStorage() {
    localStorage.setItem("tempRestaurant", JSON.stringify(restaurant));
}
export function updateRest(id){
    let matchingRestaurant = null
    restaurants.forEach((diner)=>{
        if(diner.id === id)
            matchingRestaurant = diner
    })
    restaurant = matchingRestaurant;
    saveToStorage()
}