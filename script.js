const  navMenu = document.querySelector('.nav_menu'),
       navBars = document.querySelector('.bars'),
       navClose = document.querySelector('.nav_close')

if(navBars){
    navBars.addEventListener('click',()=> {
        navMenu.classList.add('show_menu')
    })
}


if(navClose){
    navClose.addEventListener('click',()=> {
        navMenu.classList.remove('show_menu')
    })
}


