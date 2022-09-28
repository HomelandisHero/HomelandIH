/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {

    //-----------CALC---------------

    const result = document.querySelector('.calc_results span'),
          inputs = document.querySelectorAll('.calc_choose_item');
    let sex, chestGirth, waistSize, height;

    inputs.forEach(elem => {
        elem.onmouseover = function() {
            elem.style.border = '1px solid #1717176a';
        };

        elem.onmouseout = function() {
            elem.style.border = '';
        };
    });
    
    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }
    
    function initLocalSt(selector, activeClass){
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass);
            if(elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            }
        }); 
        
    }
    initLocalSt('#gender div', 'calc_choose-item_active');

    function calcTotal() {
        if(!sex || !chestGirth || !waistSize || !height) {
            result.textContent = '?';
            return;
        }

        if (sex === 'female') {
            result.textContent = chestGirth + waistSize + height;
            
            if (result.textContent <= 290) { result.textContent = '?'; }
            if (result.textContent <= 314) { result.textContent = 'XS'; }
            if (result.textContent <= 324) { result.textContent = 'S'; }
            if (result.textContent <= 336) { result.textContent = 'M'; }
            if (result.textContent <= 351) { result.textContent = 'L'; }
            if (result.textContent <= 366) { result.textContent = 'XL'; } 
            if (result.textContent > 366) { result.textContent = 'XXL'; } 

        } else {
            result.textContent = chestGirth + waistSize + height;

            if (result.textContent <= 300) { result.textContent = '?'; }
            if (result.textContent <= 324) { result.textContent = 'S'; }
            if (result.textContent <= 348) { result.textContent = 'M'; }
            if (result.textContent <= 370) { result.textContent = 'L'; }
            if (result.textContent <= 392) { result.textContent = 'XL'; }
            if (result.textContent <= 418) { result.textContent = 'XXL'; } 
            if (result.textContent > 418) { result.textContent = '3XL'; } 
        }
        
        
    }
    calcTotal();

    function getStaticElements(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => {
                if(e.target.getAttribute('id')) {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
        
                e.target.classList.add(activeClass);
        
                calcTotal();
            });
        });

    }
    getStaticElements('#gender div', 'calc_choose-item_active');

    function getDinamicInfo(selector) {
        const input = document.querySelector(selector);
        
        input.addEventListener('input', () => {
            
            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
                // input.classList.add('red_border');
                result.textContent = '?';
            } else {
                input.style.border = '1px solid #17171727';
                
            }

            // if(input.value <= 38) {
            //     input.style.border = '1px solid red';
            // } else {
            //     input.style.border = '1px solid #17171727';
            // }

            switch(input.getAttribute('id')) {
                case 'chestGirth':
                    chestGirth = +input.value;
                    break;
                case 'waistSize':
                    waistSize = +input.value;
                    break;
                case 'height':
                    height = +input.value;
                    break;
            }
            calcTotal();
        });
    }
    getDinamicInfo('#chestGirth');
    getDinamicInfo('#waistSize');
    getDinamicInfo('#height');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function forms() {

    //_------------------- FORMS-------------------

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/anim/spinner.svg',
        success: 'Welcome',
        failure: 'Ooops... Try again'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch (url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            }, 
            body: data
        });
        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form);
            // request.send(formData);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));            
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        modalWindow.classList.add('hide');
        modalWindowSgn.classList.add('hide');
        openModal();
        
        const thanksModal = document.createElement('div');
            thanksModal.classList.add('modalWindow');
            thanksModal.innerHTML = `
                <div class="modalContent">
                    <div data-close class="modalClose">x</div>
                    <div class="modalTitle">${message}</div>
                </div>
            `;

            document.querySelector('.modal').append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                modalWindow.classList.add('show');
                modalWindow.classList.remove('hide');
                closeModal();
            }, 2000);

    }

    fetch('http://localhost:3000/goods')
        .then(data => data.json())
        .then (res => console.log(res));

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function modal() {

    //---------------Modal window -----------------------------
    
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalTriggerSgn = document.querySelectorAll('[data-modalSng]'),      
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelectorAll('[data-close]'),
          modalWindow = document.querySelector('.modalWindow'),
          modalWindowSgn = document.querySelector('.modalWindowSgn');


    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() { 
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () =>{
            modal.classList.add('show');
            modal.classList.remove('hide');
            modalWindowSgn.classList.add('hide');
            modalWindow.classList.add('show');
            modalWindow.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    
    });
    modalCloseBtn.forEach(btn => {
        btn.addEventListener('click', () =>{
            modal.classList.add('hide');
            modal.classList.remove('show');
            modalWindow.classList.add('show');
            modalWindow.classList.remove('hide');
            modalWindowSgn.classList.add('show');
            modalWindowSgn.classList.remove('hide');
            document.body.style.overflow = '';
        });
    });
    
    modalTriggerSgn.forEach(btn => {
        btn.addEventListener('click', () =>{
            modal.classList.add('show');
            modal.classList.remove('hide');
            modalWindow.classList.add('hide');
            modalWindowSgn.classList.add('show');
            modalWindowSgn.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hide');
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {

    //--------------- SLIDER ---------------

    const eachSlide = document.querySelectorAll('.slides_gallery'),
          slider = document.querySelector('.gallery_box'),
          prev = document.querySelector('.prev_arrow'),
          next = document.querySelector('.next_arrow'),
          slidesWrapper =document.querySelector('.slides_wrapper'),
          allSlides = document.querySelector('.all_slides'),
          width = window.getComputedStyle(slidesWrapper).width; 
    let slideIndex = 1;
    let offset = 0;

    allSlides.style.width = 100 * eachSlide.length + '%';
    allSlides.style.display = 'flex';
    allSlides.style.transition = '1s all';

    slidesWrapper.style.overflow = 'hidden';

    eachSlide.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];
    
    indicators.classList.add('dots_indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 20px;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < eachSlide.length; i++ ) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            width: 25px;
            height: 3px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: rgb(0, 0, 0);
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .2;
            transition: opacity .6s ease;
        `;    
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if(offset == deleteNotDigits(width) * (eachSlide.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        if (slideIndex == eachSlide.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        dots.forEach(dot => dot.style.opacity = '.2');
        dots[slideIndex - 1].style.opacity = 1;

        allSlides.style.transform = `translateX(-${offset}px)`;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotDigits(width) * (eachSlide.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        if ( slideIndex == 1) {
            slideIndex = eachSlide.length;
        } else {
            slideIndex--;
        }

        dots.forEach(dot => dot.style.opacity = '.2');
        dots[slideIndex - 1].style.opacity = 1;
        
        allSlides.style.transform = `translateX(-${offset}px)`;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;

            offset = deleteNotDigits(width) * (slideTo - 1);
            allSlides.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.style.opacity = '.2');
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/toggle.js":
/*!******************************!*\
  !*** ./js/modules/toggle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toggle() {

    //---------- FUNCTION TOGGLE -----------

    const btnToggle = document.getElementById('btn_toggle'),
    dropdownContent = document.querySelector('#myDropdown');
    
    function toggle(el, classname) {
        if(el.classList.contains(classname)){
            el.classList.remove(classname);
        } else {
            el.classList.add(classname);
        }
    }

    btnToggle.addEventListener('click', () =>{
        toggle(dropdownContent, 'hide');
    });


    //-------Open Search/Close

    const btnSearch = document.querySelector('.btn_search'),
          inputSearch = document.querySelector('.inpSearch');

    btnSearch.addEventListener('click', () =>{
        toggle(inputSearch, 'hide');
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggle);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/toggle */ "./js/modules/toggle.js");








document.addEventListener('DOMContentLoaded', () => {
        
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_toggle__WEBPACK_IMPORTED_MODULE_4__["default"])(); 
    

    
    //------------------SHOP------------
    // class shopCard {
    //     constructor (src, alt, title, descr, price, parentSelector, ...classes){
    //         this.src = src;
    //         this.alt = alt;
    //         this.title = title;
    //         this.descr = descr;
    //         this.price = price;
    //         this.parent = document.querySelector(parentSelector);
    //         this.classes = classes;
    //         this.transfer = 0.87;
    //         this.changeToGBR();
    //     }

    //     changeToGBR() {
    //         this.price = (this.price * this.transfer).toFixed(0);
    //     }

    //     render() {
    //         const element = document.createElement('div');
    //         if (this.classes.length === 0) {
    //             this.element = 'shop_item';
    //             element.classList.add(this.element);
    //         } else {
    //             this.classes.forEach(className => element.classList.add(className));
    //         }

    //         element.innerHTML = `
    //                 <div class="img-shop"><img src = ${this.src} alt = ${this.alt}></div>
    //                 <div class="fav-shop">
    //                     <button type="submit" class="btn-fav-shop">
    //                         <span class="icon-fav-shop"></span>
    //                     </button>
    //                 </div>
    //                 <h3 class = "shop_title">${this.title}</h3>
    //                 <div class = "shop_descr">${this.descr}</div>
    //                 <div class="shop_price"><span>${this.price}</span> £</div>
    //             </div>
    //         `;
    //         this.parent.append(element);
    //     }
    // }

    // const getResource = async (url) => {
    //     const res = await fetch (url);

    //     if (!res.ok) {
    //         throw new Error (`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // };

    // getResource('http://localhost:3000/goods')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new shopCard(img, altimg, title, descr, price, '.shop .container').render();
    //         });
    //     });


    
});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map