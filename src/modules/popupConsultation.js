const popupConsultation = () => {
    const popupConsultation = document.querySelector('.popup-consultation'),
        consultationBtn = document.querySelector('.consultation-btn'),
        formDirector = document.querySelector('.director-form'),
        formCapture = document.getElementById('form-consultation'),
        input = formDirector.querySelector('input');

        const errorMessage = 'Ошибка, что-то пошло не так...',
            loadMessage = 'Идет отправка сообщения...',
            successMessage = 'Сообщение отправлено! Мы скоро с вами свяжемся!';

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = `font-size: 2rem;
        color: white;
        text-align: center;`;

    formDirector.addEventListener('submit', (event) => {
        event.preventDefault();
        formDirector.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        popupConsultation.style.display = 'block';

        const formData = new FormData(formDirector);
        let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });
        postData(body, () => {
            statusMessage.textContent = successMessage;
            function deleteMessageTime(){
                statusMessage.remove();
                clearInterval(deleteMessage);
            }
            let deleteMessage = setInterval(deleteMessageTime, 5000);
        }, (error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
            function deleteMessageTime(){
                statusMessage.remove();
                clearInterval(deleteMessage);
            }
            let deleteMessage = setInterval(deleteMessageTime, 5000);
        });
        input.value = '';
    });

    formCapture.addEventListener('submit', (event) => {
        event.preventDefault();
        formCapture.appendChild(statusMessage);
        statusMessage.style.cssText = `font-size: 2rem;
        color: black;
        text-align: center;`;
        statusMessage.textContent = loadMessage;

        const formData = new FormData(formCapture);
        let bodyCapture = {};
        formData.forEach((val, key) => {
            bodyCapture[key] = val;
        });
        postData(bodyCapture, () => {
            statusMessage.textContent = successMessage;
            function deleteMessageTime(){
                statusMessage.remove();
                clearInterval(deleteMessage);
            }
            let deleteMessage = setInterval(deleteMessageTime, 5000);
        }, (error) => {
            statusMessage.textContent = errorMessage;
            console.error(error);
            function deleteMessageTime(){
                statusMessage.remove();
                clearInterval(deleteMessage);
            }
            let deleteMessage = setInterval(deleteMessageTime, 5000);
        });
        const inputs = formCapture.querySelectorAll('input');
        inputs.forEach((item) => {
            item.value = '';
        });
    });

    const postData = (body, outputData, errorData) => {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }
            if (request.status === 200) {
                outputData();
            } else {
                errorData(request.status);
            }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(body));
    };

    popupConsultation.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.popup-close')) {
            popupConsultation.style.display = 'none';
        } else {
            target = target.closest('.popup-dialog');
            if (!target) {
                popupConsultation.style.display = 'none';
            }
        }
    });
};

export default popupConsultation;