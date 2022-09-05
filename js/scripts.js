'use strict'

//_______________________________________________________________________________________________

// FUNÇÃO DE INICIALIZAÇÃO DA PSEUDO TELA DE PRELOADER

const $loader = document.querySelector('.preloader');

setTimeout ( function () {
    $loader.style.visibility = 'hidden';
    $loader.style.opacity = '0';
    $loader.style.zIndex = "-10"
    
},5000);


//_______________________________________________________________________________________________

// FUNÇÃO DO MENU 

const $hbMenu = document.querySelector('.header__hbmenu');
const $navMenu = document.querySelector('.header__navmenu');
const $iconClose = document.querySelector('.header__iconclose');


const $iconArrowCompany = document.querySelector('.header__iconarrowcompany');


$hbMenu.addEventListener('click', () => {
    $navMenu.classList.add('show');
});

$iconClose.addEventListener('click', () => {
    $navMenu.classList.remove('show');

});




//_______________________________________________________________________________________________

// FUNÇÕES UTILIZADAS NAS LISTAS DO MENU 

const $features = document.querySelector('.header__features');

$features.addEventListener('click', () => {
    const $iconArrowFeatures = document.querySelector('.header__iconarrowfeatures');
    const $subListFeatures = document.querySelector('.header__sublistfeatures');
    $subListFeatures.classList.toggle('show');
    $iconArrowFeatures.classList.toggle('show');
});

const $company = document.querySelector('.header__company');

$company.addEventListener('click', () => {
    const $iconArrowCompany = document.querySelector('.header__iconarrowcompany');
    const $subListCompany = document.querySelector('.header__sublistcompany');
    $subListCompany.classList.toggle('show');
    $iconArrowCompany.classList.toggle('show');
});


const $theme = document.querySelector('.header__theme');

$theme.addEventListener('click', () => {
    const $iconArrowTheme = document.querySelector('.header__iconarrowtheme');
    const $subListTheme = document.querySelector('.header__sublisttheme');
    $subListTheme.classList.toggle('show');
    $iconArrowTheme.classList.toggle('show');

});




//_______________________________________________________________________________________________

// FUNÇÃO DO MENU 


const $itemListTheme = document.querySelectorAll('.header__itemlisttheme');
const $body = document.querySelector('body');

$itemListTheme.forEach(element => {
    element.addEventListener('click', (e) => {
        // if (+element.getAttribute('data-id')  === day) {
        //     element.classList.add('clicked');
        // }
        $body.className = element.getAttribute('data-id')
        // console.log(element.getAttribute('data-id'))
    })
});




const $rings = document.querySelector('.frame__rings');

for (let i = 1; i <= 20; i++) {
    const ring = document.createElement('div');
    $rings.appendChild(ring);
}