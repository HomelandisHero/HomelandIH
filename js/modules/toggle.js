import { closeModal } from "./modal";

//---------- FUNCTION TOGGLE -----------

// function closeToggle(el, btnToggle) {
//     const btnTogg = document.getElementById(btnToggle),
//     element = document.querySelector(el);

//     document.addEventListener('click', (e) => {
//         if (e.target != btnTogg) {
//             element.classList.add('hide');
//         }
//     });
// }

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