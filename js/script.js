'use strict';
//---------------Modal window -------------

document.addEventListener('DOMContentLoaded', () => {

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalTriggerSgn = document.querySelectorAll('[data-modalSng]'),      
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelectorAll('[data-close]'),
          modalWindow = document.querySelector('.modalWindow'),
          modalWindowSgn = document.querySelector('.modalWindowSgn');


    
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

    class shopCard {
        constructor (src, alt, title, descr, price, parentSelector, ...classes){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.classes = classes;
            this.transfer = 0.86;
            this.changeToGBR();
        }

        changeToGBR() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'shop_item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => element.classList.add(className));
            }

            element.innerHTML = `
                    <img src = ${this.src} alt = ${this.alt}>
                    <h3 class = "shop_title">${this.title}</h3>
                    <div class = "shop_descr">${this.descr}</div>
                    <div class="shop_price"><span>${this.price}</span> £</div>
                </div>
            `;
            this.parent.append(element);
        }
    }

    new shopCard (
        "/img/shop/T-S_1_whiteH.png",
        "whiteH",
        "T-shirt №1",
        "Homeland is hero - beige embroidery",
        20,
        ".shop .container"
    ).render();

    new shopCard (
        "/img/shop/T-S_2_goldH.png",
        "goldH",
        "T-shirt №2",
        "Homeland is hero - yellow embroidery",
        27,
        ".shop .container"
    ).render();

    new shopCard (
        "/img/shop/T-S_3_blueH.png",
        "blueH",
        "T-shirt №3",
        "Homeland is hero - blue embroidery",
        27,
        ".shop .container"
    ).render();

    new shopCard (
        "/img/shop/T-S_1_whiteH.png",
        "whiteH",
        "T-shirt №1",
        "Homeland is hero - beige embroidery",
        20,
        ".shop .container"
    ).render();

    new shopCard (
        "/img/shop/T-S_2_goldH.png",
        "goldH",
        "T-shirt №2",
        "Homeland is hero - yellow embroidery",
        27,
        ".shop .container"
    ).render();

    new shopCard (
        "/img/shop/T-S_1_whiteH.png",
        "whiteH",
        "T-shirt №1",
        "Homeland is hero - beige embroidery",
        20,
        ".shop .container"
    ).render();
    
    new shopCard (
        "/img/shop/T-S_3_blueH.png",
        "blueH",
        "T-shirt №3",
        "Homeland is hero - blue embroidery",
        27,
        ".shop .container"
    ).render();

    new shopCard (
        "/img/shop/T-S_2_goldH.png",
        "goldH",
        "T-shirt №2",
        "Homeland is hero - yellow embroidery",
        27,
        ".shop .container"
    ).render();
});


