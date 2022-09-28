function forms() {

    //_------------------- FORMS-------------------

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/anim/spinner.svg',
        success: 'Welcome',
        failure: 'Ooops... Try again'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch (url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            }, 
            body: data
        });
        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            // form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);

            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');

            // request.setRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form);
            // request.send(formData);
            const json = JSON.stringify(Object.fromEntries(formData.entries()));            
            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        modalWindow.classList.add('hide');
        modalWindowSgn.classList.add('hide');
        openModal();
        
        const thanksModal = document.createElement('div');
            thanksModal.classList.add('modalWindow');
            thanksModal.innerHTML = `
                <div class="modalContent">
                    <div data-close class="modalClose">x</div>
                    <div class="modalTitle">${message}</div>
                </div>
            `;

            document.querySelector('.modal').append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                modalWindow.classList.add('show');
                modalWindow.classList.remove('hide');
                closeModal();
            }, 2000);

    }

    fetch('http://localhost:3000/goods')
        .then(data => data.json())
        .then (res => console.log(res));

}

export default forms;