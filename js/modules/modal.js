function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector) { 
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show'); 
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector) {

    //---------------Modal window -----------------------------
    
    const modalTrigger = document.querySelectorAll(triggerSelector),
          modalTriggerSgn = document.querySelectorAll('[data-modalSng]'),      
          modal = document.querySelector(modalSelector),
          modalCloseBtn = document.querySelectorAll('[data-close]'),
          modalWindow = document.querySelector('.modalWindow'),
          modalWindowSgn = document.querySelector('.modalWindowSgn');


    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => { 
            openModal(modalSelector); 
            //     modal.classList.add('show');
            //     modal.classList.remove('hide');
            modalWindowSgn.classList.add('hide');
            modalWindow.classList.add('show');
            modalWindow.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    
    });

    modalCloseBtn.forEach(btn => {
        btn.addEventListener('click', () =>{
            closeModal(modalSelector);
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // modalWindow.classList.add('show');
            // modalWindow.classList.remove('hide');
            // modalWindowSgn.classList.add('show');
            // modalWindowSgn.classList.remove('hide');
            // document.body.style.overflow = '';
        });
    });
    
    modalTriggerSgn.forEach(btn => {
        btn.addEventListener('click', () =>{
            openModal(modalSelector); 
            // modal.classList.add('show');
            // modal.classList.remove('hide');
            modalWindow.classList.add('hide');
            modalWindowSgn.classList.add('show');
            modalWindowSgn.classList.remove('hide');
            // document.body.style.overflow = 'hidden';
        });
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
            // modal.classList.add('hide');
            // modal.classList.remove('show');
            // document.body.style.overflow = '';
        }
    });
}

export default modal;
export {openModal};
export {closeModal};