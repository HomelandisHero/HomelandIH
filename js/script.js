'use strict';
//---------------Modal window -------------

document.addEventListener('DOMContentLoaded', () =>{

    const modalTrigger = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');
    
    modalTrigger.addEventListener('click', () =>{
        modal.classList.add('show');
        modal.classList.remove('hide');
    });

    modalCloseBtn.addEventListener('click', () =>{
        modal.classList.add('hide');
        modal.classList.remove('show');
    });
}); 


