const popupCall = () => {
    const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call'),
        inputs = document.querySelectorAll('.popup-dialog input');

    const form = document.getElementById('form-call');

    const errorMessage = 'Ошибка, что-то пошло не так...',
        loadMessage = 'Идет отправка...',
        successMessage = 'Отправлено! Мы скоро с вами свяжемся!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;
    color: black;`;

    callBtn.forEach((item) => {
        if (callBtn[0] === item || callBtn[callBtn.length - 1] === item) {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                popupCall.style.display = 'block';
            });
        }
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

    popupCall.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.popup-close')) {
            inputs.forEach((item) => {
                item.value = '';
            });
            popupCall.style.display = 'none';
        } else {
            target = target.closest('.popup-dialog');
            if (!target) {
                inputs.forEach((item) => {
                    item.value = '';
                });
                popupCall.style.display = 'none';
            }
        }
    });
};

export default popupCall;