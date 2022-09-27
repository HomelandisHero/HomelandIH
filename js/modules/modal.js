function modal() {

    //---------------Modal window -----------------------------
    
    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modalTriggerSgn = document.querySelectorAll('[data-modalSng]'),      
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelectorAll('[data-close]'),
          modalWindow = document.querySelector('.modalWindow'),
          modalWindowSgn = document.querySelector('.modalWindowSgn');


    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() { 
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

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
}

module.exports = modal;