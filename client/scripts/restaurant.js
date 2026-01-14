import { getRestaurant } from "./api.js";

//import { restaurants } from './data.js';
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
export async function updateRest(id){
   try {
        restaurant = await getRestaurant(id);
        console.log(`Succeed to get restaurant with id ${id}`)
   } catch (error) {
        restaurant = null
        console.error(`Failed to get restaurant with id ${id}`)
   } finally{
        saveToStorage()
   }
}