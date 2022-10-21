function searchElements(input, searchZone, failClass) {
    const inp = document.querySelector(input),
          zone = document.querySelectorAll(searchZone),
          fail = document.querySelector(failClass);
    
    try {
        inp.oninput = function() {

            let val = this.value.trim(); //----Користувач може вводити з пробелами (по боках) і ми іх обрізаємо
            // let val = this.value.replace(/ /g, ''); //----- видаляє в цілому всі пробели
            let valUp = val.toUpperCase();

            
    
            if (valUp != '') {
                zone.forEach(function(elem) {
                    if (elem.innerText.search(valUp) == -1) {  //----Шукаємо підстроку в строке, а INNERTEXT знаходить ТОЛЬКО текст БЕЗ html тегов
                        elem.classList.add('hide');
                        
                        // elem.innerHTML = elem.innerText;
                        
                        
                        let valSearch = elem.innerText.search(valUp);
                        console.log(valSearch);
                        
                       
    
                        //     const failBlock = document.createElement('div');
                        //     failBlock.classList.add('fail_block');
                        //     failBlock.textContent = 'Ops... Try again';
                        //     failBlock.style.cssText = `
                        //         width: calc( 33% - 7.5px);
                        //         min-width: 200px;
                        //         font-size: 100%;
                        //         letter-spacing: 0.5px;
                        //         background-color: #fefefe;
                        //         color: #171717ad;
                        //         margin: 5px 5px 5px 5px;
                        //         border-radius: 4px;
                        //     `;
    
                        //     appPlace.append(failBlock);
                        // } 
                        
                        
                    }
                    else {
                        elem.classList.remove('hide');
                        // let str = elem.innerText;
                        // elem.innerHTML = inserMark(str, valSearch, val.length); //---- ПЕРЕЗАПИСУЮ складаюче елемента з урахуванням нового тегу "НИЖЧЕ"
                    }
                    
    
                    
                    
                });
    
            }
            else {
                zone.forEach(function(elem) {
                    elem.classList.remove('hide');
                    // elem.innerHTML = elem.innerText;
                });
    
                
    
            }
    
            // //---- Функція для ВИДІЛЕННЯ найдених букв
            // function inserMark(str, pos, len) { //---- "str" - наша строка, тектст який ми вводимо, "pos" -  позиція по буквах перед виділеням, "len" - кількість букв.
            //     return str.slice(0, pos) + '<mark>' + str.slice(pos, pos + len) + '</mark>' + str.slice(pos + len);
    
    
            // }
        };
    } catch (error) {}
    

}

export default searchElements;