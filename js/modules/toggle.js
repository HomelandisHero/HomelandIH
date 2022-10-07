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
    function toggleMenu() {
        element.classList.toggle(classname);
    }

    btnTogg.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        const target = e.target,
        myElement = target == element || element.contains(target),
        myBtn = target == btnTogg ,
        elementActive = element.classList.contains(classname);

        if (!myElement && !myBtn && !elementActive) {
            toggleMenu();
        }

    });

    //----------------------------
    // document.addEventListener('click', (e) => {
    //     if(e.target === btnTogg && element.classList.contains(classname)) {
    //         openModal(element);
    //     } else {
    //         closeModal(element);
    //     }
    // });

    //--------------------------
    // btnTogg.addEventListener('click', () =>{
    //     if(element.classList.contains(classname)){
    //         element.classList.remove(classname);
    //     } else {
    //         element.classList.add(classname);
    //     }
    // });
}
export {toggle};
export default toggle;