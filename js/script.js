'use strict';

import calc from './modules/calc';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import toggle from './modules/toggle';
import shopCards from './modules/shop';
import scrollTo from './modules/scrollTo';

document.addEventListener('DOMContentLoaded', () => {
        
    
    shopCards();
    toggle('#dropdownGen', 'hide', 'toggle_btn_gender');
    toggle('#dropdownSize', 'hide', 'toggle_btn_size');
    toggle('#dropdownPrice', 'hide', 'toggle_btn_price');
    scrollTo('.btnToGallery', '#diviGallery');
    scrollTo('.btnToCalc', '#diviCalc');
    forms('form');
    modal('[data-modal]', '.modal', '.modalWindow');
    slider({
        container: '.gallery_box',
        slide: '.slides_gallery',
        prevArrow: '.prev_arrow',
        nextArrow: '.next_arrow',
        wrapper: '.slides_wrapper',
        allSlides: '.all_slides' 
    });
    toggle('#myDropdown', 'hide', 'btn_toggle'); 
    toggle('#inpSearch_toggle', 'hide', 'btn_search'); 
    toggle('#myDropdown_acc', 'hide', 'btn_toggle_acc'); 
    
    calc();
    
    
    
    
    

    
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

