'use strict';

// open-menu
const navbar = document.querySelector("[data-navbar]") ;
const navOpenBtn = document.querySelector("[data-menu-open-btn]") ;
const navCloseBtn = document.querySelector("[data-menu-close-btn]") ;
const overlay = document.querySelector("[data-overlay]") ;

const navElemArr = [navOpenBtn , navCloseBtn , overlay  ] ;
for ( let i = 0 ; i < navElemArr.length ; i++ )
    navElemArr[i].addEventListener("click" , function() {
        navbar.classList.toggle("active") ;
        overlay.classList.toggle("active") ;
})

// header sticky

const header = document.querySelector("[data-header]");

window.addEventListener("scroll" , function(){
    window.scrollY >= 30 ? header.classList.add("active") : header.classList.remove("active") ;
})

// go to top
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 800 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});