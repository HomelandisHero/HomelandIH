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

export default calc;