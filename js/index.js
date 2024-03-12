$(function () {

  const ceoBlockAccordionInit = () => {
    //ceo-block аккордион
    const ceoBlockBtn = document.querySelector('.ceo-text__btn');
    //Получаю блок высота которого изменяется 
    const ceoBlock = document.querySelector('.ceo-text__inner');
    ceoBlockBtn.onclick = (event) => {
      ceoBlock.classList.toggle('ceo-text__inner--active');
      if (ceoBlock.classList.contains('ceo-text__inner--active')) {
        ceoBlock.style.height = ceoBlock.scrollHeight + 'px';
        ceoBlockBtn.innerHTML = 'Скрыть';
      }
      else {
        window.innerWidth >= 768 ? ceoBlock.style.height = '103px' : ceoBlock.style.height = '200px';
        ceoBlockBtn.innerHTML = 'Показать еще';
      }
    };
  };

  //Главная страница
  if (document.querySelector('.home-page')) {
    $('.img-slider').slick({
      arrows: false,
      fade: true,
      asNavFor: '.content-slider'
    });
    $('.content-slider').slick({
      asNavFor: '.img-slider',
      focusOnSelect: true,
      autoplay: true,
      nextArrow: `
      <button type="button" class="slick-next">
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
          <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM30.5303 6.53033C30.8232 6.23744 30.8232 5.76257 30.5303 5.46967L25.7574 0.696701C25.4645 0.403808 24.9896 0.403808 24.6967 0.696701C24.4038 0.989594 24.4038 1.46447 24.6967 1.75736L28.9393 6L24.6967 10.2426C24.4038 10.5355 24.4038 11.0104 24.6967 11.3033C24.9896 11.5962 25.4645 11.5962 25.7574 11.3033L30.5303 6.53033ZM1 6.75L30 6.75L30 5.25L1 5.25L1 6.75Z" fill="#B9BEC0"/>
        </svg>
      </button>
      `,
      prevArrow: `
      <button type="button" class="slick-prev">
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="12" viewBox="0 0 31 12" fill="none">
          <path d="M30 6.75C30.4142 6.75 30.75 6.41421 30.75 6C30.75 5.58579 30.4142 5.25 30 5.25L30 6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23743 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46446 6.59619 0.989591 6.3033 0.696697C6.01041 0.403804 5.53553 0.403804 5.24264 0.696697L0.469669 5.46967ZM30 5.25L1 5.25L1 6.75L30 6.75L30 5.25Z" fill="#B9BEC0"/>
        </svg>
      </button>
      `,
      dots: true
    });
    const newsSlider = new Swiper('.last-news__inner', {
      spaceBetween: 10,
      freeMode: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next__last-news',
        prevEl: '.swiper-button-prev__last-news',
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        }
      }
    });
    const themesSlider = new Swiper('.themes__inner', {
      spaceBetween: 10,
      freeMode: true,
      slidesPerView: 'auto',
      breakpoints: {
        768: {
          spaceBetween: 20,
        }
      }
    });

    window.addEventListener("click", (event) => {
      if (event.target.classList.contains('home-info__btn')) {
        const id = event.target.id;
        document.querySelector(`[data-popup="${id}"]`).style.opacity = '1';
        document.querySelector(`[data-popup="${id}"]`).style.visibility = 'visible';
      }
      else if (event.target.classList.contains('popup')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
      else if (event.target.closest('.popup-closer')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
    });

    ceoBlockAccordionInit();

  }

  //Страница arenda
  else if (document.querySelector('.arenda')) {

    const newsSlider = new Swiper('.last-news__inner', {
      spaceBetween: 10,
      freeMode: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next__last-news',
        prevEl: '.swiper-button-prev__last-news',
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        }
      }
    });

    ceoBlockAccordionInit();


  }

  //Страница product-details (страница конкретного товара)
  else if (document.querySelector('.product-details')) {

    $('.slider-big').slick({
      arrows: false,
      asNavFor: '.slider-small',
      arrows: false
    });

    $('.slider-small').slick({
      asNavFor: '.slider-big',
      focusOnSelect: true,
      arrows: false,
      swipeToSlide: true,
      touchThreshold: 30,
      centerMode: true,
      variableWidth: true
    });

    const newsSlider = new Swiper('.last-news__inner', {
      spaceBetween: 10,
      freeMode: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next__last-news',
        prevEl: '.swiper-button-prev__last-news',
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        }
      }
    });

    if (window.innerWidth <= 991) {
      const dopSlider = new Swiper('.dop__inner', {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: 'auto',
        breakpoints: {
          768: {
            spaceBetween: 20,
          }
        }
      });
      $('.dop__tabs').slick({
        swipeToSlide: true,
        touchThreshold: 30,
        variableWidth: true,
        arrows: false,
        infinite: false
      });
    }

    window.addEventListener("click", (event) => {
      if (event.target.classList.contains('product__btn')) {
        const id = event.target.id;
        document.querySelector(`[data-popup="${id}"]`).style.opacity = '1';
        document.querySelector(`[data-popup="${id}"]`).style.visibility = 'visible';
      }
      else if (event.target.classList.contains('popup')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
      else if (event.target.closest('.popup-closer')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
    });


    document.querySelector('.product').onclick = (event) => {
      document.querySelectorAll('.grid-item__details').forEach(el => {
        el.classList.remove('grid-item__details--open');
      });
      const { target } = event;
      if (target.classList.contains('grid-item__btn-details') || target.classList.contains('product-recommend__btn--edit')) {
        const parent = event.target.closest('.product__grid-item');
        if (parent.querySelector('ul')) {
          parent.querySelector('.grid-item__details').classList.toggle('grid-item__details--open');
        }
      }
      else if (target.classList.contains('product__content-title') || target.classList.contains('grid-item__price')) {
        const parent = event.target.closest('.product__grid-item');
        if (parent.querySelector('ul')) {
          parent.querySelector('.grid-item__details').classList.toggle('grid-item__details--open');
        }
      }
      else if (target.classList.contains('grid-item__text')) {
        const parent = event.target.closest('.product__grid-item');
        if (parent.querySelector('ul')) {
          parent.querySelector('.grid-item__details').classList.toggle('grid-item__details--open');
        }
      }
      else if (target.closest('.product-recommend__item') && !event.target.closest('.product-recommend__btn') && !target.closest('.grid-item__details-closer')) {
        const parent = event.target.closest('.product__grid-item');
        if (parent.querySelector('ul')) {
          parent.querySelector('.grid-item__details').classList.toggle('grid-item__details--open');
        }
      }
    };


    ceoBlockAccordionInit();


    const items = document.querySelectorAll('.product-recommend__item');
    let  itemsParent;
    if (document.querySelector('.product-recommend')) {
      itemsParent = document.querySelector('.product-recommend');
    }

    if (window.innerWidth > 991) {
      if (items.length == 3 && document.querySelector('.product-recommend')) {
        itemsParent.style.maxWidth = '461px';
      } 
      else if (items.length == 2 && document.querySelector('.product-recommend')) {
        itemsParent.style.maxWidth = '310px';
      }
      else if (items.length == 1 && document.querySelector('.product-recommend')) {
        itemsParent.style.maxWidth = '158px';
      }
    }
  }

  //Страница портфолио (список проектов)
  else if (document.querySelector('.portfolio-page')) {
    ceoBlockAccordionInit();
  }

  //Страница проекта
  else if (document.querySelector('.project-page')) {
    $('.slider-big').slick({
      arrows: false,
      asNavFor: '.slider-small',
      arrows: false
    });

    $('.slider-small').slick({
      asNavFor: '.slider-big',
      focusOnSelect: true,
      arrows: false,
      swipeToSlide: true,
      touchThreshold: 30,
      centerMode: true,
      variableWidth: true
    });
    ceoBlockAccordionInit();
  }

  //СТраница коризны
  else if (document.querySelector('.cart-page')) {
    const newsSlider = new Swiper('.last-news__inner', {
      spaceBetween: 10,
      freeMode: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next__last-news',
        prevEl: '.swiper-button-prev__last-news',
      },
      breakpoints: {
        768: {
          spaceBetween: 20,
        }
      }
    });

    //Скрипты для каунтера на странице "Собрать мероприятие"
    window.addEventListener("click", (event) => {
      //Кликнули на "-"
      if (event.target.closest('.decrement')) {
        const parent = event.target.closest(".cart__item-counter");
        let count = parent.querySelector(".count");
        if (count.innerHTML > 0) {
          count.innerHTML -= 1;
        }
      }
      else if (event.target.closest(".increment")) {
        const parent = event.target.closest(".cart__item-counter");
        let count = parent.querySelector(".count");
        count.innerHTML = Number(count.innerHTML) + 1;

      }
      else if (event.target.closest(".cart__item-remover")) {
        event.target.closest('.cart__item').remove();
      }
    });

    window.addEventListener("click", (event) => {
      if (event.target.classList.contains('cart__info-btn')) {
        const id = event.target.id;
        document.querySelector(`[data-popup="${id}"]`).style.opacity = '1';
        document.querySelector(`[data-popup="${id}"]`).style.visibility = 'visible';
      }
      else if (event.target.classList.contains('popup')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
      else if (event.target.closest('.popup-closer')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
    });
  }

  //Страница каталога
  else if (document.querySelector('.catalog-page')) {
    //dropdown sort
    const dropdownSortHead = document.querySelector('.catalog__sort-head');

    const handleShowSortList = (event) => {
      const parent = event.target.closest('.catalog__sort-box');
      const dropdownList = parent.querySelector('ul');
      dropdownSortHead.classList.toggle('catalog__sort-head--active');
      if (dropdownSortHead.classList.contains('catalog__sort-head--active')) {
        dropdownList.style.height = dropdownList.scrollHeight + "px";
        dropdownList.style.marginTop = "15px";
      }
      else {
        dropdownList.style.height = "0px";
        dropdownList.style.marginTop = "0px";
      }
    };

    dropdownSortHead.onclick = handleShowSortList;

    const container = window.innerWidth > 991 ? ".catalog__calculator-matrix" : ".catalog__calculator-matrix-mobil";
    const widthHTML = window.innerWidth > 991 ? ".calculator-params__width" : ".calculator-params__width-mobil";
    const heightHTML = window.innerWidth > 991 ? ".calculator-params__length" : ".calculator-params__length-mobil";
    const squareHTML = window.innerWidth > 991 ? ".calculator-params__square" : ".calculator-params__square-mobil";

    const dropHeads = document.querySelectorAll('.catalog__sidebar-head');

    dropHeads.forEach(head => {
      head.onclick = (event) => {
        dropHeads.forEach(el => {
          if (el != event.target.closest('.catalog__sidebar-head')) {
            el.closest('li').classList.remove('active');
            const ul = el.closest('li').querySelector('ul');
            ul.style.height = '0px';
          }
        });
        let parent = event.target.closest('li');
        parent.classList.toggle('active');
        if (parent.classList.contains('active')) {
          parent.querySelector('ul').style.height = parent.querySelector('ul').scrollHeight + 'px';
        }
        else {
          parent.querySelector('ul').style.height = '0';
        }
      };
    });

    //Открытие и закрытие калькуляторы сцен

    const calculatorDropDown = document.querySelector('.catalog__calculator-inner');

    if (document.querySelector('.catalog__calculator-head')) {
      document.querySelector('.catalog__calculator-head').onclick = (event) => {
        const parent = event.target.closest('.catalog__calculator');
        calculatorDropDown.classList.toggle('catalog__calculator-inner--active');
        if (calculatorDropDown.classList.contains('catalog__calculator-inner--active')) {
          calculatorDropDown.style.height = calculatorDropDown.scrollHeight + "px";
        }
        else {
          calculatorDropDown.style.height = "0";
        }
      };
    }



    const themesSlider = new Swiper('.themes__inner', {
      spaceBetween: 10,
      freeMode: true,
      slidesPerView: 'auto',
      breakpoints: {
        768: {
          spaceBetween: 20,
        }
      }
    });

    window.addEventListener("click", (event) => {
      if (event.target.classList.contains('catalog-btn-form-show') || event.target.classList.contains('catalog__mobil-btn1')) {
        const id = event.target.id;
        document.querySelector(`[data-popup="${id}"]`).style.opacity = '1';
        document.querySelector(`[data-popup="${id}"]`).style.visibility = 'visible';
      }
      else if (event.target.classList.contains('popup')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
      else if (event.target.closest('.popup-closer')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
    });

    ceoBlockAccordionInit();

    const matrixContainer = document.querySelector(container);

    const renderMatrix = (height, width) => {
      for (let y = 1; y <= height; y++) {
        const matrixRow = document.createElement('div');
        matrixRow.className = 'matrix-row';
        for (let x = 1; x <= width; x++) {
          const square = `
            <span class="square" data-x="${x}" data-y="${y}"></span>
          `;
          matrixRow.insertAdjacentHTML('beforeend', square);
        }
        matrixContainer.appendChild(matrixRow);
      }
      document.querySelectorAll('.square').forEach(el => {
        el.style.backgroundColor = 'rgb(237, 237, 237)'
        el.onmouseover = function (event) {
          let squareX = this.dataset.x;
          let squareY = this.dataset.y;
          squareX = Number(squareX);
          squareY = Number(squareY);
          document.querySelectorAll('.square').forEach(square => {
            if (Number(square.dataset.x) <= squareX && Number(square.dataset.y) <= squareY) {
              if (square.style.backgroundColor === 'rgb(237, 237, 237)') {
                square.style.backgroundColor = '#B8BEEE';
              }
            } else if (square.style.backgroundColor === 'rgb(64, 76, 189)') {

            } else {
              square.style.backgroundColor = '#EDEDED';
            }
          });
          document.querySelector(widthHTML).innerHTML = squareX;
          document.querySelector(heightHTML).innerHTML = squareY;
        };
        el.onclick = function (event) {
          let squareX = this.dataset.x;
          let squareY = this.dataset.y;
          squareX = Number(squareX);
          squareY = Number(squareY);
          document.querySelectorAll('.square').forEach(square => {
            if (Number(square.dataset.x) <= squareX && Number(square.dataset.y) <= squareY) {
              square.style.backgroundColor = 'rgb(64, 76, 189)';
            } else {
              square.style.backgroundColor = '#EDEDED';
            }
          });
          document.querySelector(squareHTML).innerHTML = squareX * squareY;
        }
      });
    }

    renderMatrix(18, 18);

    window.addEventListener("click", (event) => {
      if (event.target.classList.contains('cart__info-btn')) {
        const id = event.target.id;
        document.querySelector(`[data-popup="${id}"]`).style.opacity = '1';
        document.querySelector(`[data-popup="${id}"]`).style.visibility = 'visible';
      }
      else if (event.target.classList.contains('popup')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
      else if (event.target.closest('.popup-closer')) {
        document.querySelectorAll('.popup').forEach(popup => {
          popup.style.opacity = '0';
          popup.style.visibility = 'hidden';
        });
      }
    });

    const filterBtns = document.querySelectorAll('.goods-filter__link');

    filterBtns.forEach(el => {
      el.onclick = (event) => {
        if (el.id) {
          const id = el.id;
          document.querySelectorAll(`[data-filterdrop]`).forEach(item => {
            if (id !== item.dataset.filterdrop) {
              item.classList.remove('goods-filter__drop--open');
            }
          });
          document.querySelector(`[data-filterdrop="${id}"]`).classList.toggle('goods-filter__drop--open');
        }
      };
    });

    document.querySelector('.catalog').onclick = (event) => {
      if (!event.target.closest('.goods-filter__link')) {
        document.querySelectorAll(`[data-filterdrop]`).forEach(el => {
          el.classList.remove('goods-filter__drop--open');
        });
      }
    }
  }

  //Страница собрать мероприятие
  else if (document.querySelector('.create-event-page')) {
    const themesSlider = new Swiper('.create-event__items', {
      spaceBetween: 10,
      freeMode: true,
      slidesPerView: 'auto',
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      breakpoints: {
        991: {
          spaceBetween: 15,
        }
      }
    });

    window.addEventListener("click", (event) => {
      if (event.target.closest('.card-item')) {
        event.target.closest('.card-item').classList.toggle('card-item--selected');
        console.log('click');
      }
    });

    //dropdown sort
    const dropdownSortHead = document.querySelector('.catalog__sort-head');

    const handleShowSortList = (event) => {
      const parent = event.target.closest('.catalog__sort-box');
      const dropdownList = parent.querySelector('ul');
      dropdownSortHead.classList.toggle('catalog__sort-head--active');
      if (dropdownSortHead.classList.contains('catalog__sort-head--active')) {
        dropdownList.style.height = dropdownList.scrollHeight + "px";
        dropdownList.style.marginTop = "15px";
      }
      else {
        dropdownList.style.height = "0px";
        dropdownList.style.marginTop = "0px";
      }
    };

    dropdownSortHead.onclick = handleShowSortList;



    const matrixContainer = document.querySelector('.catalog__calculator-matrix');

    const renderMatrix = (height, width) => {
      for (let y = 1; y <= height; y++) {
        const matrixRow = document.createElement('div');
        matrixRow.className = 'matrix-row';
        for (let x = 1; x <= width; x++) {
          const square = `
            <span class="square" data-x="${x}" data-y="${y}"></span>
          `;
          matrixRow.insertAdjacentHTML('beforeend', square);
        }
        matrixContainer.appendChild(matrixRow);
      }
      document.querySelectorAll('.square').forEach(el => {
        el.style.backgroundColor = 'rgb(237, 237, 237)'
        el.onmouseover = function (event) {
          let squareX = this.dataset.x;
          let squareY = this.dataset.y;
          squareX = Number(squareX);
          squareY = Number(squareY);
          document.querySelectorAll('.square').forEach(square => {
            if (Number(square.dataset.x) <= squareX && Number(square.dataset.y) <= squareY) {
              if (square.style.backgroundColor === 'rgb(237, 237, 237)') {
                square.style.backgroundColor = '#B8BEEE';
              }
            } else if (square.style.backgroundColor === 'rgb(64, 76, 189)') {

            } else {
              square.style.backgroundColor = '#EDEDED';
            }
          });
          document.querySelector('.calculator-params__width').innerHTML = squareX;
          document.querySelector('.calculator-params__length').innerHTML = squareY;
        };
        el.onclick = function (event) {
          let squareX = this.dataset.x;
          let squareY = this.dataset.y;
          squareX = Number(squareX);
          squareY = Number(squareY);
          document.querySelectorAll('.square').forEach(square => {
            if (Number(square.dataset.x) <= squareX && Number(square.dataset.y) <= squareY) {
              square.style.backgroundColor = 'rgb(64, 76, 189)';
            } else {
              square.style.backgroundColor = '#EDEDED';
            }
          });
          document.querySelector('.calculator-params__square').innerHTML = squareX * squareY;
        }
      });
    }

    renderMatrix(18, 18);

    //Открытие и закрытие калькуляторы сцен

    const calculatorDropDown = document.querySelector('.catalog__calculator-inner');

    document.querySelector('.catalog__calculator-head').onclick = (event) => {
      const parent = event.target.closest('.catalog__calculator');
      calculatorDropDown.classList.toggle('catalog__calculator-inner--active');
      if (calculatorDropDown.classList.contains('catalog__calculator-inner--active')) {
        calculatorDropDown.style.height = calculatorDropDown.scrollHeight + "px";
      }
      else {
        calculatorDropDown.style.height = "0";
      }
    };

    //Скрипты для каунтера на странице "Собрать мероприятие"
    window.addEventListener("click", (event) => {
      //Кликнули на "-"
      if (event.target.closest('.decrement')) {
        const parent = event.target.closest(".event-cart__counter");
        let count = parent.querySelector(".count");
        if (count.innerHTML > 0) {
          count.innerHTML -= 1;
        }
      }
      else if (event.target.closest(".increment")) {
        const parent = event.target.closest(".event-cart__counter");
        let count = parent.querySelector(".count");
        count.innerHTML = Number(count.innerHTML) + 1;

      }
      else if (event.target.closest(".event-cart__item-remover")) {
        event.target.closest('.event-cart__item').remove();
      }
    });

    if (window.innerWidth <= 991) {
      const eventCartItemsSlider = new Swiper('.event-cart__inner', {
        spaceBetween: 10,
        freeMode: true,
        slidesPerView: 'auto',
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    }

  }

  if (document.querySelector('.slider-big')) {
    $('.slider-big').slick({
      arrows: false,
      asNavFor: '.slider-small',
      arrows: false
    });

    $('.slider-small').slick({
      asNavFor: '.slider-big',
      focusOnSelect: true,
      arrows: false,
      swipeToSlide: true,
      touchThreshold: 30,
      centerMode: true,
      variableWidth: true
    });

  }
});

