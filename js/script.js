document.addEventListener('DOMContentLoaded', function(){
  const blockBody = document.getElementById('body');
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

      pagination: {
        el: '.first-slider__dots',
        clickable: true,
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

      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 19,
        },

        875: {
          slidesPerView: 3,
          spaceBetween: 21,
        },

        1131: {
          slidesPerView: 4,
        },
      },
    });

    const hitsSlider = new Swiper('#hits__slider', {
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 21,

      // Navigation arrows
      navigation: {
        nextEl: '.hits-slider-next',
        prevEl: '.hits-slider-prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 19,
        },

        875: {
          slidesPerView: 3,
          spaceBetween: 21,
        },

        1131: {
          slidesPerView: 4,
        },
      },
    });

    const weekSlider = new Swiper('#week__slider', {
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 18,

      // Navigation arrows
      navigation: {
        nextEl: '.week-slider-next',
        prevEl: '.week-slider-prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },

        600: {
          slidesPerView: 2,
        },

        875: {
          slidesPerView: 3,
        },

        1131: {
          slidesPerView: 4,
        },
      },
    });

    const cartSlider = new Swiper('#cart-empty__slider', {
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 18,

      // Navigation arrows
      navigation: {
        nextEl: '.cart-slider-next',
        prevEl: '.cart-slider-prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },

        600: {
          slidesPerView: 2,
        },

        875: {
          slidesPerView: 3,
        },

        1131: {
          slidesPerView: 4,
        },
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
        0: {
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

    const popularSlider = new Swiper('#popular-category__slider', {
      // Optional parameters
      loop: true,
      slidesPerView: 4,
      spaceBetween: 21,

      // Navigation arrows
      navigation: {
        nextEl: '.popular-slider-next',
        prevEl: '.popular-slider-prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        1100: {
          slidesPerView: 3,
          spaceBetween: 21,
        },
      },
    });

    const licensesSlider = new Swiper('#licenses-slider', {
      // Optional parameters
      loop: true,
      slidesPerView: 3,
      spaceBetween: 24,

      // Navigation arrows
      navigation: {
        nextEl: '.licenses-slider-next',
        prevEl: '.licenses-slider-prev',
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          centeredSlides: true,
        },

        770: {
          slidesPerView: 2,
          centeredSlides: false,
        },

        1100: {
          slidesPerView: 3,
        },
      },
    });

    const prodCardSlider = new Swiper('#product-card__slider', {
      // Optional parameters
      loop: false,
      slidesPerView: 1,
      watchOverflow: true,

      // Navigation dots
      pagination: {
        el: '.product-card__dots',
        clickable: true,
      },
    });
  }


  let animItemsCheck = document.querySelector(".anim-items");
  if (animItemsCheck != null) {
    const animItems = document.querySelectorAll(".anim-items");

    console.log(animItems);

    if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);
      function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animItemPoint = window.innerHeight - animItemHeight / animStart;
          if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }

          console.log(animItemOffset);

          if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
          } else {
            animItem.classList.remove('active');
          }
        }
      }

      function offset(el) {
        const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }

      setTimeout(() => {
        animOnScroll();
      }, 300);
    }
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

    headerCatButton.addEventListener('click', () => {
      headerCatButton.classList.toggle('active');
      catTabs.classList.toggle('active');
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



    const mobBurgerBtn = document.querySelector('.header-mob__burger');
    const mobBurger = document.querySelector('.burger-menu');
    const mobBurgerOverlay = document.querySelector('.overlay-burger');

    const mobBurgerCloseBtn = document.querySelector('.header-mob__burger_close');
    const mobBurgerBackBtn = document.querySelector('.header-mob__burger_back');

    const mobHideItems = document.querySelectorAll('.mob-accordion__item');
    const mobOnlyHide = document.querySelectorAll('.mob-only-hide');

    mobBurgerBtn.addEventListener("click", function() {
      mobBurger.classList.toggle('active');
      mobBurgerOverlay.classList.toggle('active');
      blockBody.classList.toggle('active');
      mobBurgerBtn.classList.toggle('active');
      mobBurgerCloseBtn.classList.toggle('active');
      mobSearchBtn.classList.toggle('inactive');
    })

    document.querySelectorAll('.mob-accordion__sub_trigger').forEach((item) =>
      item.addEventListener('click', () => {
        item.classList.add('active');
        const preParent = item.parentNode.parentNode.parentNode;

        mobHideItems.forEach((hide) => hide.classList.add('hide'));
        preParent.classList.add('only');
        mobBurgerBtn.classList.add('only');
        mobBurgerBackBtn.classList.add('active');

        mobOnlyHide.forEach((hide) => hide.classList.add('active'));

        mobBurgerBackBtn.addEventListener("click", function() {
          item.classList.remove('active');
          preParent.classList.remove('only');
          mobBurgerBtn.classList.remove('only');
          mobBurgerBackBtn.classList.remove('active');
          mobOnlyHide.forEach((hide) => hide.classList.remove('active'));
          mobHideItems.forEach((hide) => hide.classList.remove('hide'));
        })

        mobBurgerCloseBtn.addEventListener("click", function() {
          item.classList.remove('active');
          preParent.classList.remove('only');
          mobBurgerBtn.classList.remove('only');
          mobBurgerBackBtn.classList.remove('active');
        })
      }))

    mobBurgerCloseBtn.addEventListener("click", function() {
      mobBurger.classList.remove('active');
      mobBurgerOverlay.classList.remove('active');
      blockBody.classList.remove('active');
      mobBurgerBtn.classList.remove('active');
      mobBurgerCloseBtn.classList.remove('active');
      mobSearchBtn.classList.remove('inactive');
      mobOnlyHide.forEach((hide) => hide.classList.remove('active'));
      mobHideItems.forEach((hide) => hide.classList.remove('hide'));
    })
  }


  let mainPageCheck = document.querySelector(".popular__services");
  if (mainPageCheck != null) {
    const popularBtn = document.querySelector(".popular__button");
    const popularHidden = document.querySelectorAll(".popular__row_hidden");
    const popularMulti = document.querySelector(".popular__row_multi");

    popularBtn.addEventListener("click", function() {
      popularBtn.classList.toggle('active');
      popularHidden.forEach(function(item) {
        item.classList.toggle('active');
      });
    })

    if (window.innerWidth <= 1130) {
      popularMulti.classList.add('popular__row_hidden');
    }
    else {
      popularMulti.classList.remove('popular__row_hidden');
    }
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


      const popupRegistr = document.querySelector('.popup-registration');
      const popupOverlay = document.querySelector('.popup-overlay');
      const closePopupBtn = document.querySelector('.popup-registration__close');
      document.querySelectorAll('.product__like').forEach((item) =>
        item.addEventListener('click', () => {
          popupRegistr.classList.add('active');
          popupOverlay.classList.add('active');
          blockBody.classList.add('active');
      }))

      function closePopup(){
        popupRegistr.classList.remove('active');
        popupOverlay.classList.remove('active');
        blockBody.classList.remove('active');
      }

      popupOverlay.addEventListener('click',closePopup);
      closePopupBtn.addEventListener('click',closePopup);



      const rangeSlider = document.getElementById('catalog__range_slider');

      noUiSlider.create(rangeSlider, {
          start: [0, 10000],
          connect: true,
          step: 1,
          format: {
            from: function(value) {
                    return parseInt(value);
                },
            to: function(value) {
                    return parseInt(value);
                }
          },
          range: {
              'min': 0,
              'max': 10000
          }
      });

      const rangeInput1 = document.getElementById('catalog__range_input-1');
      const rangeInput2 = document.getElementById('catalog__range_input-2');
      const rangeInputs = [rangeInput1, rangeInput2];

      rangeSlider.noUiSlider.on('update', function(values, handle){
        rangeInputs[handle].value = Math.round(values[handle]);
      });

      const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;
        console.log(arr);
        rangeSlider.noUiSlider.set(arr);
      };

      rangeInputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
          console.log(index);
          setRangeSlider(index, e.currentTarget.value);
        });
      });
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


        const prodCardLike = document.querySelector('.product-card__like');
        prodCardLike.addEventListener("click", function() {
          prodCardLike.classList.toggle('active');
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


  const agreeCheck = document.querySelector('.agreement');
  if (agreeCheck != null) {
    document.querySelectorAll('.agreement__trigger').forEach((el) => {
      el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
          document.querySelectorAll('.agreement__content').forEach((el) => el.style.maxHeight = null)
          document.querySelectorAll('.agreement__trigger').forEach((el) => el.classList.remove('active'))
        } else {
          document.querySelectorAll('.agreement__content').forEach((el) => el.style.maxHeight = null)
          document.querySelectorAll('.agreement__trigger').forEach((el) => el.classList.remove('active'))
          content.style.maxHeight = content.scrollHeight + 'px'
          el.classList.add('active');
        }
      })
    })
  }


  const inviteCheck = document.querySelector('.invite');
  if (inviteCheck != null) {
    document.querySelectorAll('.invite__trigger').forEach((el) => {
      el.addEventListener('click', () => {

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
          document.querySelectorAll('.invite__content').forEach((el) => el.style.maxHeight = null)
          document.querySelectorAll('.invite__content').forEach((el) => el.classList.remove('active'))
          document.querySelectorAll('.invite__trigger').forEach((el) => el.classList.remove('active'))
        } else {
          document.querySelectorAll('.invite__content').forEach((el) => el.style.maxHeight = null)
          document.querySelectorAll('.invite__content').forEach((el) => el.classList.remove('active'))
          document.querySelectorAll('.invite__trigger').forEach((el) => el.classList.remove('active'))
          content.style.maxHeight = content.scrollHeight + 'px'
          el.classList.add('active');
          content.classList.add('active');
        }
      })
    })
  }


  const helpCheck = document.querySelector('.consult');
  if (helpCheck != null) {
    document.querySelectorAll('.consult__trigger').forEach((el) => {
      el.addEventListener('click', () => {

        const parent = el.parentNode;

        let content = el.nextElementSibling;

        if (content.style.maxHeight) {
          document.querySelectorAll('.consult__content').forEach((el) => el.style.maxHeight = null)
          document.querySelectorAll('.consult__content').forEach((el) => el.classList.remove('active'))
          document.querySelectorAll('.consult__item').forEach((el) => el.classList.remove('active'))
          document.querySelectorAll('.consult__trigger').forEach((el) => el.classList.remove('active'))
        } else {
          document.querySelectorAll('.consult__content').forEach((el) => el.style.maxHeight = null)
          document.querySelectorAll('.consult__content').forEach((el) => el.classList.remove('active'))
          document.querySelectorAll('.consult__item').forEach((el) => el.classList.remove('active'))
          document.querySelectorAll('.consult__trigger').forEach((el) => el.classList.remove('active'))
          content.style.maxHeight = content.scrollHeight + 150 + 'px'
          parent.classList.add('active');
          el.classList.add('active');
          content.classList.add('active');
        }
      })
    })
  }
});