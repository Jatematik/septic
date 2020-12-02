const popupCheck = () => {
    const checkBtn = document.querySelector('.check-btn'),
        popupCheck = document.querySelector('.popup-check'),
        inputs = popupCheck.querySelectorAll('input');

    const form = document.getElementById('form-check');

    const errorMessage = 'Ошибка, что-то пошло не так...',
        loadMessage = 'Идет отправка...',
        successMessage = 'Отправлено! Мы скоро с вами свяжемся!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;
    color: black;`;

    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body).then((response) => {
            if (response.status !== 200) {
                throw new Error('status network not 200.');
            }
            statusMessage.textContent = successMessage;
            function deleteMessageTime(){
                statusMessage.remove();
                clearInterval(deleteMessage);
            }
            let deleteMessage = setInterval(deleteMessageTime, 5000);
        })
        .catch((error) => {
            statusMessage.textContent = errorMessage;
            console.log(error);
            function deleteMessageTime(){
                statusMessage.remove();
                clearInterval(deleteMessage);
            }
            let deleteMessage = setInterval(deleteMessageTime, 5000);
        }).finally(() => {
            formPhoneMain.value = '';
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });
    };

    popupCheck.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.popup-close')) {
            inputs.forEach((item) => {
                item.value = '';
            });
            popupCheck.style.display = 'none';
        } else {
            target = target.closest('.popup-dialog');
            if (!target) {
                inputs.forEach((item) => {
                    item.value = '';
                });
                popupCheck.style.display = 'none';
            }
        }
    });

};

export default popupCheck;