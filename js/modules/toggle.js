//---------- FUNCTION TOGGLE -----------

function toggle(el, classname, btnToggle) {
    const btnTogg = document.getElementById(btnToggle),
    element = document.querySelector(el);
    
          
    btnTogg.addEventListener('click', () =>{
        if(element.classList.contains(classname)){
            element.classList.remove(classname);
        } else {
            element.classList.add(classname);
        }
    });
}

export default toggle;