import { allFoods , popularItems , cartItems} from "./data/foods.js";
import { generateCard , cartCard } from "./Utils/GenerateCard.js";

const cartContainer = document.querySelector('#cart_food_container');


const homeKitchenMenuDiv = document.querySelector("#home_kitchen_menu");

const popularItemsSwiper = document.querySelector("#popular_items_swiper_wrapper");
const swiperNextBtn = document.querySelector('.popular_items_next_btn');
const swiperPrevBtn = document.querySelector('.popular_items_prev_btn');

const serviceVideo = document.querySelector("#service_video");
const playServiceVideoBtn = document.querySelector("#service_video_play_btn");

const openCartBtn = document.querySelector('#header_cart_container');
const closeCartBtn = document.querySelector('#close_cart_modal');
const cartModal = document.querySelector('#cart_modal')

const openRequestDishModal = document.querySelector('#request_dish_btn');
const closeRequestDishModal = document.querySelector('#close_request_dish_modal');
const requestDishModal = document.querySelector('#request_dish_modal')

const mobileNavMenuBtn = document.querySelector('.mobile_menu_btn');
const mobileNavMenu = document.querySelector('.mobile_nav_container');

// Insert foods in home kitchen menu section
let homeKitchenMenuHtml = "";
allFoods.forEach((food) => {
  homeKitchenMenuHtml += generateCard(food);
});

homeKitchenMenuDiv.innerHTML = homeKitchenMenuHtml;

// Insert food in cart modal
let cartFoodsHtml = "";
cartItems.forEach((food) => {
  cartFoodsHtml += cartCard(food)
})

cartContainer.innerHTML = cartFoodsHtml;
// Insert foods in popular items section
let popularItemsHtml = "";
popularItems.forEach((food) => {
  popularItemsHtml += generateCard(food,"swiper-slide");
})

popularItemsSwiper.innerHTML = popularItemsHtml;


// Poplular Items slider confirguration
const swiper = new Swiper(".popular_items_swiper", {
  loop: true,
  spaceBetween:40,
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled:true,
  },
  simulateTouch: true,
  navigation: {
    nextEl: ".popular_items_next_btn",
    prevEl: ".popular_items_prev_btn",
  },
  breakpoints: {
    640: { slidesPerView: 1 , loop: false },
    768: { slidesPerView: 1 , loop: true },
    1024: { slidesPerView: 3 , loop: true },
  },
});



// Service Video Controllers
serviceVideo.addEventListener('click',() => {
  playServiceVideoBtn.style.display = "flex";
  serviceVideo.pause();
});

serviceVideo.addEventListener('ended', () => {
  playServiceVideoBtn.style.display = 'flex';
});

serviceVideo.addEventListener('play', () => {
  playServiceVideoBtn.style.display = 'none';
});

playServiceVideoBtn.addEventListener('click',() => {
  serviceVideo.play();
})

// cart modal listeners
openCartBtn.addEventListener('click',() => {
   cartModal.style.display = "flex";
   document.body.style.overflow = 'hidden';
})
closeCartBtn.addEventListener('click',() => {
   cartModal.style.display = "none";
   document.body.style.overflow = 'auto';
})


// Request dish modal listeners
openRequestDishModal.addEventListener('click',() => {
   requestDishModal.style.display = "flex";
   document.body.style.overflow = 'hidden';
})
closeRequestDishModal.addEventListener('click',() => {
   requestDishModal.style.display = "none";
   document.body.style.overflow = 'auto';
})



// Add mobile nav toogle
mobileNavMenuBtn.addEventListener('click',() => {
  mobileNavMenu.classList.toggle('active');
  mobileNavMenuBtn.classList.toggle('active');
})