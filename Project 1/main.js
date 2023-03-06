/* ================================ HIDDEN SHOW Y HIDDEN =========================== */
const navMenu = document.getElementById('nav_menu'), 
      navToggle = document.getElementById('nav_toggle'),
      navClose = document.getElementById('nav_close');


/* SHOW MENU */
// validate if constant exists 
if(navToggle){
    navToggle.addEventListener('click', ()=> {
        navMenu.classList.add('show_menu');
    })
}

// HIDDEN MENU
if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show_menu');
    })
}

// Remove Mobile Menu

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show_menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))