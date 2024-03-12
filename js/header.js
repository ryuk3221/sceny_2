//Выдвижной header
let lastScroll = 0;
const header = document.querySelector('.header-top');

const scrollPosition = () => window.pageYOffset; 
const containHide = () => header.classList.contains('header-top--hide');

window.addEventListener('scroll', () => {
  
  let top = scrollPosition();
  if (top > lastScroll && !containHide() && window.pageYOffset > 43 && isOpen == false) {
    //scroll down
    header.classList.add('header-top--hide');
  }
  else if (top < lastScroll && containHide()) {
    header.classList.remove('header-top--hide');
    //scroll up
  }
  lastScroll = scrollPosition();
});

//Sticky header
window.addEventListener('scroll', (event) => {
  catalogWindow.classList.remove('dropdown-catalog--active');
  if (window.pageYOffset > 43) {
    document.querySelector('.header-bot').classList.add('header-bot--sticky');
    window.innerWidth > 991 ? document.body.style.paddingTop = '101px' : '';
    // document.body.style.paddingTop = '101px';
    document.querySelector('.header-bot__dropdown-catalog').style.top = '50px';
    document.querySelector('.search-results').style.top = '50px';
  }
  else{
    document.querySelector('.header-bot').classList.remove('header-bot--sticky');
    window.innerWidth > 991 ? document.body.style.paddingTop = '50px' : '';
    // document.body.style.paddingTop = '50px';
    document.querySelector('.header-bot__dropdown-catalog').style.top = '101px';
    document.querySelector('.search-results').style.top = '100px';
  }
});

//Выпадающее окно с каталогом
//Получаю окно с каталог
const catalogWindow = document.querySelector('.dropdown-catalog');
//Получаю кнопку при наведении на которую открывает каталог
const catalogLink = document.querySelector('.header-bot__nav-link--catalog');
catalogLink.onmouseover = (event) => {
  catalogWindow.classList.add('dropdown-catalog--active');
};

document.body.onmouseover = (event) => {
  if (event.target.closest('.dropdown-catalog__content') || event.target.closest('.header-bot__nav-link--catalog')) { }
  else { 
    catalogWindow.classList.remove('dropdown-catalog--active');
  }
};


//Выдвижное адапнтивное меню
//Получаю кнопку бургер
const burger = document.querySelector('.header-top__burger');
//Получаю окно с выдвижном меню
const menuWindow = document.querySelector('.drawer-menu');
//Получаю контент
const menuContent = document.querySelector('.drawer-menu__content');

let isOpen = false;

const iconCloser = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 14.1426L16.1421 0.000442743L17.5563 1.41466L3.41421 15.5568L2 14.1426Z" fill="#5269E0"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1421 15.5566L1.99995 1.41451L3.41417 0.000292778L17.5563 14.1424L16.1421 15.5566Z" fill="#5269E0"/>
</svg>`;

const burgerIcon = '<img src="images/icons/burger.svg" alt="">';

window.addEventListener('click', (event) => {
  if (event.target.closest('.header-top__burger')) {
    if (!isOpen) {
      menuWindow.classList.add('drawer-menu--open');
      menuContent.style.transform = 'translateY(0)';
      burger.innerHTML = iconCloser;
      burger.style.transform = 'rotate(180deg)';
      isOpen = true;
    }
    else {
      menuWindow.classList.remove('drawer-menu--open');
      menuContent.style.transform = 'translateY(-100%)';
      burger.innerHTML = burgerIcon;
      burger.style.transform = 'rotate(0deg)';
      isOpen = false;
    }
  }
  else if (event.target.classList.contains('drawer-menu')) {
    menuWindow.classList.remove('drawer-menu--open');
    menuContent.style.transform = 'translateY(-100%)';
    burger.innerHTML = burgerIcon;
    burger.style.transform = 'rotate(0deg)';
    isOpen = false;
  }
});

//Поиск
const searchInput = document.querySelector('#search-input');
const searchResultsPopup = document.querySelector('.search-results');

searchInput.onkeyup = (event) => {
  if (searchInput.value) {
    document.querySelector('.search-results').style.display = "block";
  }
  else {
    document.querySelector('.search-results').style.display = "none";
  }
};

searchResultsPopup.onclick = (event) => {
  if (event.target.classList.contains('container') || event.target.classList.contains('search-results')) {
    searchResultsPopup.style.display = "none";
  }
};

//Поиск мобильный

const searchInputMobil = document.querySelector('#search-input-mobil');

searchInputMobil.onkeyup = (event) => {
  if (searchInputMobil.value) {
    document.querySelector('.drawer-menu__content-box').style.display = "none";
    document.querySelector('.drawer-menu__search-box').style.display = "block";
  }
  else {
    document.querySelector('.drawer-menu__content-box').style.display = "block";
    document.querySelector('.drawer-menu__search-box').style.display = "none";
  }
};
