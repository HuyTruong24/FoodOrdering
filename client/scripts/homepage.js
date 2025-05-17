import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import { getNumItems} from './cart.js'
//import {restaurants} from './data.js'
import { loadAllRestaurants } from './api.js';
import { updateRest } from './restaurant.js';
async function loadPage(){
  try {
    const url = new URL(window.location.href);
    const search = url.searchParams.get("search");

    const restaurants = await loadAllRestaurants()
    let filteredRestaurants = restaurants;
    if(search){
      filteredRestaurants = restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(search.toLowerCase());
      });
      document.querySelector('.title-for-slides').innerHTML = `Results found for "${search}"`
    }else{
      document.querySelector('.title-for-slides').innerHTML = "Restaurants & Stores" 
    }

    if(filteredRestaurants.length === 0){
      document.querySelector('#tranding').innerHTML = `
      <div class="holder">
        <div class="no-restaurant-found">No result found for "${search}"</div>
        <button class="undo-button">Home</button>
      </div>
      `

    }else{
      //load restaurants
      let slideHTML =''
        filteredRestaurants.forEach((restaurant) => {
          slideHTML += `
            <div class="swiper-slide tranding-slide" data-id="${restaurant.id}">
              <div class="tranding-slide-img">
                <img src="${restaurant.storeImg}" alt="Tranding">
              </div>
              <div class="tranding-slide-content">
                <div class="tranding-slide-content-bottom">
                  <h2 class="food-name">
                  ${restaurant.name}
                  </h2>
                  <h3 class="food-rating">
                    <span>${restaurant.ratings}</span>
                    <ion-icon class="rating-star" name="star"></ion-icon>
                  </h3>
                </div>
              </div>
            </div>
          `;
        });
      document.querySelector('.swiper-wrapper').innerHTML = slideHTML;
      //Incoporate swiper for restuarant option display  
      const slider = new Swiper('.tranding-slider', {
          
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          loop: true,
          slidesPerView: 'auto',
          initialSlide: 0, // Start with the first slide
          spaceBetween: 100, 
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
        // Tranding Product Slider-end
    }

    document.querySelector('.link-to-checkout-page').textContent = `Food Bag(${getNumItems()})`;

    //go to menu when select a certain restaurant
    document.querySelectorAll('.swiper-slide').forEach((restaurant)=>{
      restaurant.addEventListener('click',async ()=>{
        const {id} = restaurant.dataset
        await updateRest(Number(id));
        setTimeout(()=>{
          window.location.href = 'menu.html'
        }, 500)
      })
    })

    const input = document.querySelector(".search-bar")
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter")
        window.location.href = `homepage.html?search=${input.value}`;
    });
    document.querySelector('.search-button').addEventListener('click',()=>{
        input.value.length === 0? window.location.href = `homepage.html`:
        window.location.href = `homepage.html?search=${input.value}`;
    })

    const undoButton = document.querySelector('.undo-button')
    if(undoButton){
      undoButton.addEventListener('click',()=>{
        window.location.href = `homepage.html`
      })
    }
  } catch (error) {
    console.error("Unexpected error")
  }
  
}
document.addEventListener('DOMContentLoaded', loadPage);