import { getResource } from "../services/services";
import changeState from "./changeState";
import searchElements from "./searchElements";
import toggle from "./toggle";

function shopCards() {

    class shopCard {
        constructor (src, alt, title, descr, price, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.transfer = 0.88;
            this.changeToGBR();
        }
    
        changeToGBR() {
            this.price = (this.price * this.transfer).toFixed(0);
        }
    
        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = "shop_item";
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }
    
            element.innerHTML = `
                    <div class="img-shop"><img src = ${this.src} alt = ${this.alt}></div>
                    <div class="fav-shop">
                        <button type="submit" class="btn-fav-shop">
                            <span class="icon-fav-shop"></span>
                            <span class="icon-fav-shop_black hide"></span>
                        </button>
                    </div>
                    <div id="full_descr">
                        <div id="title_descr" class = "shop_descr"><p>${this.title}</p></div>
                        <div id="item_descr" class = "shop_descr"><p>${this.descr}</p></div>
                    </div>
                    <div class="shop_price"><span>${this.price}</span> £</div>
                </div>
            `;
            try {
                this.parent.append(element);
            } catch (e) {
                
            }
            changeState('.icon-fav-shop', '.icon-fav-shop_black', 'hide');
            searchElements('.input_search', '.shop_item', '.fail_block');
        }
    }
    try {
        getResource('http://localhost:3000/goods')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {
                new shopCard(img, altimg, title, descr, price, '.shop .container').render();
            });
        });
       
        
    } catch (e) {
               
    }
    toggle('#inp_search', 'hide', '.search_button');

    fetch('http://localhost:3000/goods')
    .then(data => data.json())
    .then (res => console.log(res));

    
    
    
}


// function sizeItems() {
//     const cards = document.querySelectorAll('.shop_item'),
//           width = window.getComputedStyle(cards).width;

//     cards.forEach((e) => {
//         if (e.style.width <= '250px') {
//             e.style.width = width;
//         } else {
//             e.style.width = width;
//         }
//     });
// }
// sizeItems();

export default shopCards;