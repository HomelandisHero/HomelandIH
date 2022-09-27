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

module.exports = toggle;