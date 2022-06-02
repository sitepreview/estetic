// JQuery
$(document).ready(function(){
 /* $('.first-slider').slick({
  	//autoplay: true,
    autoplaySpeed: 4000
  });*/

  /*$('.new__slider').slick({
  	//autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });*/

  $('.week__slider').slick({
  	//autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.popular-category__slider').slick({
    //autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  

    $(function() {
      $('.product__like').click(function() {
      $(this).toggleClass('active');
      });
    });

    $(function() {
      $('.product-card__like').click(function() {
      $(this).toggleClass('active');
      });
    });  


    $(function() {
      $('.popular__button').click(function() {
      $('.popular__row_hidden').toggleClass('active');
      $(this).toggleClass('active');
      });
    });

    function checkWidth() {
      var windowWidth = $('body').innerWidth(),
          elem = $(".popular__row_multi"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                        // страницу для поиска нужного элемента
      if(windowWidth < 1130){
        elem.addClass('popular__row_hidden');
      }
      else{
        elem.removeClass('popular__row_hidden');
      }
    }

    checkWidth(); // проверит при загрузке страницы

    $(window).resize(function(){
      checkWidth(); // проверит при изменении размера окна клиента
    });



    $(".polzunok-5").slider({
    min: 0,
    max: 10000,
    values: [0, 10000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
        $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
    }    
    });
  $(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
  $(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
  $(".polzunok-container-5 input").change(function() {
      var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
      opt_left = $(".polzunok-5").slider("option", "min"),
      where_right = $(".polzunok-5").slider("values", 1),
      input_right = $(".polzunok-input-5-right").val().replace(/[^0-0]/g, ''),    
      opt_right = $(".polzunok-5").slider("option", "max"),
      where_left = $(".polzunok-5").slider("values", 0); 
      if (input_left > where_right) { 
          input_left = where_right;
      }
      if (input_left < opt_left) {
          input_left = opt_left; 
      }
      if (input_left == "") {
      input_left = 0;    
      }        
      if (input_right < where_left) { 
          input_right = where_left; 
      }
      if (input_right > opt_right) {
          input_right = opt_right; 
      }
      if (input_right == "") {
      input_right = 0;    
      }    
      $(".polzunok-input-5-left").val(input_left); 
      $(".polzunok-input-5-right").val(input_right); 
      if (input_left != where_left) {
          $(".polzunok-5").slider("values", 0, input_left);
      }
      if (input_right != where_right) {
          $(".polzunok-5").slider("values", 1, input_right);
      }
  });  
});


// native JS
document.addEventListener('DOMContentLoaded', function(){
  let swiperCheck = document.querySelector(".swiper");
  if (swiperCheck != null) {
    const firstSlider = new Swiper('.first-slider', {
      // Optional parameters
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.first-slider-next',
        prevEl: '.first-slider-prev',
      },
    });

    const newSlider = new Swiper('#new__slider', {
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 21,

      // Navigation arrows
      navigation: {
        nextEl: '.new-slider-next',
        prevEl: '.new-slider-prev',
      },
    });

    const recommendSlider = new Swiper('#recommend__slider', {
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 18,

      // Navigation arrows
      navigation: {
        nextEl: '.recommend-slider-next',
        prevEl: '.recommend-slider-prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 9,
        },

        770: {
          slidesPerView: 3,
          spaceBetween: 18,
        },

        1100: {
          slidesPerView: 4,
        },
      },
    });
  }

  
  let catTabs = document.querySelector(".catalog-tabs");
  if (catTabs != null) {
    const catTabsBtn   = document.querySelectorAll(".catalog-tabs__btn");
    const catTabsItems = document.querySelectorAll(".catalog-tabs__item");

    catTabsBtn.forEach(onCatTabClick);

    function onCatTabClick(item) {
      item.addEventListener("click", function() {
          let currentBtn = item;
          let tabId = currentBtn.getAttribute("data-catTab");
          let currentTab = document.querySelector(tabId);

          if( ! currentBtn.classList.contains('active') ) {
              catTabsBtn.forEach(function(item) {
                  item.classList.remove('active');
              });
      
              catTabsItems.forEach(function(item) {
                  item.classList.remove('active');
              });
      
              currentBtn.classList.add('active');
              currentTab.classList.add('active');
          }
      });
    }

    document.querySelector('.catalog-tabs__btn').click();


    document.querySelectorAll('.catalog-tabs__accordion_trigger').forEach((el) => {
      el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
          document.querySelectorAll('.catalog-tabs__accordion_content').forEach((el) => el.style.maxHeight = null)
        } else {
          document.querySelectorAll('.catalog-tabs__accordion_content').forEach((el) => el.style.maxHeight = null)
          content.style.maxHeight = content.scrollHeight + 'px'
        }
      })
    })


    const headerCatButton = document.querySelector('.header__catalog');
    const headerCatOverlay = document.querySelector('.catalog-tabs__overlay');
    const bodyOverflow = document.getElementById('body');

    headerCatButton.addEventListener('click', () => {
      headerCatButton.classList.toggle('active');
      catTabs.classList.toggle('active');
      headerCatOverlay.classList.toggle('active');
      bodyOverflow.classList.toggle('active');
    })



    const mobSearchBtn = document.querySelector('.header-mob__search_btn');
    const mobSearch = document.querySelector('.header-mob__search');

    mobSearchBtn.addEventListener("click", function() {
      mobSearch.classList.toggle('active');
    })


    document.querySelectorAll('.mob-accordion__trigger').forEach((item) =>
      item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('mob-accordion__item-active')) {
          parent.classList.remove('mob-accordion__item-active');
        }
        else {
          document
            .querySelectorAll('.mob-accordion__item')
            .forEach((child) => child.classList.remove('mob-accordion__item-active'))

            parent.classList.add('mob-accordion__item-active');
        }
      }))
  }


  let catalogPageCheck = document.querySelector(".catalog__switch");
  if (catalogPageCheck != null) {
    const catalogSwitcherOne = document.querySelector(".catalog__switch-1");
      const catalogSwitcherTwo = document.querySelector(".catalog__switch-2");

      const product = document.querySelectorAll(".product");

      catalogSwitcherTwo.addEventListener("click", function() {
        catalogSwitcherOne.classList.remove('active');
        catalogSwitcherTwo.classList.add('active');

        product.forEach(function(item) {
          item.classList.add('active');
        });
      });

      catalogSwitcherOne.addEventListener("click", function() {
        catalogSwitcherTwo.classList.remove('active');
        catalogSwitcherOne.classList.add('active');

        product.forEach(function(item) {
          item.classList.remove('active');
        });
      });
    

    document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
      item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion-item--active')) {
          parent.classList.remove('accordion-item--active');
        }
        else {
          document
            .querySelectorAll('.accordion-item')
            .forEach((child) => child.classList.remove('accordion-item--active'))

            parent.classList.add('accordion-item--active');
        }
      }))


    const catalogFilterBtnMob = document.querySelector(".catalog__filters_button_mob");
    const catalogFilterMob = document.querySelector(".catalog__filters");
    const catalogFilterBtnMobClose = document.querySelector(".catalog__filters_top_mob_img");

    catalogFilterBtnMob.addEventListener('click', () => {
      catalogFilterMob.classList.add('active');
    })

    catalogFilterBtnMobClose.addEventListener('click', () => {
      catalogFilterMob.classList.remove('active');
    })


    const counter = function () { 
      const btns = document.querySelectorAll('.counter__btn'); //а это каталог

      btns.forEach(btn => {
        btn.addEventListener('click', function () {
          const direction = this.dataset.direction;
          const inp = this.parentElement.querySelector('.counter__value');
          const currentValue = +inp.value;
          let newValue;

          if (direction === 'plus') {
            newValue = currentValue + 1;
          } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
          }

          if (newValue > 99) {
            newValue = 99;
          }

          if (newValue < 1) {
            newValue = 1;
          }

          inp.value = newValue;
          if(updateCart) updateCart(newValue,btn);
        })
      })

    }

    counter();


    const baskets = document.querySelectorAll('.product__basket');
      baskets.forEach(basket => {
        basket.addEventListener('click', function () {
          let change = basket.parentElement;
          change.classList.add('replace');
        })
      })
  }


  let accountPageCheck = document.querySelector(".account__button_trigger");
  if (accountPageCheck != null) {
    document.querySelectorAll('.account__button_trigger').forEach((item) =>
      item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('account__button--active')) {
          parent.classList.remove('account__button--active');
        }
        else {
          document
            .querySelectorAll('.account__button')
            .forEach((child) => child.classList.remove('account__button--active'))

            parent.classList.add('account__button--active');
        }
    }))
  }


  let productCardCheck = document.querySelector(".product-card__tabs");
  if (productCardCheck != null) { //это карточка товара
    const prodCardTabsBtn   = document.querySelectorAll(".product-card__tabs_btn");
    const prodCardTabsItems = document.querySelectorAll(".product-card__tabs_item");

      prodCardTabsBtn.forEach(onProdCardTabClick);

      function onProdCardTabClick(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-prodCardTab");
            let currentTab = document.querySelector(tabId);

            if( ! currentBtn.classList.contains('active') ) {
                prodCardTabsBtn.forEach(function(item) {
                    item.classList.remove('active');
                });
        
                prodCardTabsItems.forEach(function(item) {
                    item.classList.remove('active');
                });
        
                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        });
      }

      document.querySelector('.product-card__tabs_btn').click();


      document.querySelectorAll('.product-card__accordion_trigger').forEach((item) =>
      item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('product-card__accordion_item--active')) {
          parent.classList.remove('product-card__accordion_item--active');
        }
        else {
          document
            .querySelectorAll('.product-card__accordion_item')
            .forEach((child) => child.classList.remove('product-card__accordion_item--active'))

            parent.classList.add('product-card__accordion_item--active');
        }
      }))


      const counter = function () {
        const btns = document.querySelectorAll('.counter__btn');

        btns.forEach(btn => {
          btn.addEventListener('click', function () {
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.value;
            let newValue;

            if (direction === 'plus') {
              newValue = currentValue + 1;
            } else {
              newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
            }

            if (newValue > 99) {
              newValue = 99;
            }

            if (newValue < 1) {
              newValue = 1;
            }

            inp.value = newValue;
            if(updateCart) updateCart(newValue);
          })
        })

      }

      counter();


       const basketBtn = document.getElementById('basket-btn');
        basketBtn.addEventListener('click', function () {
          let change = basketBtn.parentElement;
          change.classList.add('replace');
        })
  }


  let deliveryCheck = document.querySelector(".delivery__tabs");
  if (deliveryCheck != null) {
    const deliveryTabsBtn   = document.querySelectorAll(".delivery__tabs_btn");
    const deliveryTabsItems = document.querySelectorAll(".delivery__tabs_item");

      deliveryTabsBtn.forEach(onDeliveryTabClick);

      function onDeliveryTabClick(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-deliveryTab");
            let currentTab = document.querySelector(tabId);

            if( ! currentBtn.classList.contains('active') ) {
                deliveryTabsBtn.forEach(function(item) {
                    item.classList.remove('active');
                });
        
                deliveryTabsItems.forEach(function(item) {
                    item.classList.remove('active');
                });
        
                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        });
      }

      document.querySelector('.delivery__tabs_btn').click();


    const deliveryPaymentTabsBtn   = document.querySelectorAll(".delivery-payment__tabs_btn");
    const deliveryPaymentTabsItems = document.querySelectorAll(".delivery-payment__tabs_item");

      deliveryPaymentTabsBtn.forEach(onDeliveryPaymentTabClick);

      function onDeliveryPaymentTabClick(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-deliveryPaymentTab");
            let currentTab = document.querySelector(tabId);

            if( ! currentBtn.classList.contains('active') ) {
                deliveryPaymentTabsBtn.forEach(function(item) {
                    item.classList.remove('active');
                });
        
                deliveryPaymentTabsItems.forEach(function(item) {
                    item.classList.remove('active');
                });
        
                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        });
      }

      document.querySelector('.delivery-payment__tabs_btn').click();


      document.querySelector('.delivery__tabs-mob_nav').addEventListener('change', function() {
        document.querySelectorAll('.delivery__tabs-mob_item').forEach((n, i) => {
          n.classList.toggle('active', i === this.selectedIndex);
        });
      });

      document.querySelector('.delivery-payment__tabs-mob_nav').addEventListener('change', function() {
        document.querySelectorAll('.delivery-payment__tabs-mob_item').forEach((n, i) => {
          n.classList.toggle('active', i === this.selectedIndex);
        });
      });
  }


  let cartCheck = document.querySelector(".shopping-cart");
  if (cartCheck != null) { //это код для корзины
    const quickOrderBtn = document.getElementById("quick-order-btn");
    console.log(quickOrderBtn);
    quickOrderBtn.addEventListener("click", function() {
      const quickOrderCont = document.querySelector(".shopping-application__container");
      quickOrderCont.classList.add('quick-order__container')
    })


    const counter = function () {
      const btns = document.querySelectorAll('.counter__btn');

      btns.forEach(btn => {
        btn.addEventListener('click', function () {
          const direction = this.dataset.direction;
          const inp = this.parentElement.querySelector('.counter__value');
          const currentValue = +inp.value;
          let newValue;

          if (direction === 'plus') {
            newValue = currentValue + 1;
          } else {
            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
          }

          if (newValue > 99) {
            newValue = 99;
          }

          if (newValue < 1) {
            newValue = 1;
          }

          inp.value = newValue;
          if(updateCart) updateCart(newValue,btn);
        })
      })

    }

    counter();
  }
});