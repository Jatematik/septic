const sendForm = () => {
    const formMain = document.getElementById('form1'),
        formCapture = document.getElementById('form2'),
        formPhoneMain = document.getElementById('phone_3');

    const errorMessage = 'Ошибка, что-то пошло не так...',
        loadMessage = 'Идет отправка...',
        successMessage = 'Отправлено! Мы скоро с вами свяжемся!';

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;
    color: black;`;

    formPhoneMain.addEventListener('input', () => {
        formPhoneMain.value = formPhoneMain.value.replace(/(?!^\+|[0-9])\D/g, '');
        if (formPhoneMain.value.length >= 12) {
            formPhoneMain.value = formPhoneMain.value.substring(0, 12);
        }
    });

    formCapture.addEventListener('input', (event) => {
        let target = event.target;
        if (target.matches('#name_2')) {
            target.value = target.value.replace(/(?!\s|[а-яА-Я])\D|[0-9]/g, '');
        }
        if (target.matches('#phone_2')) {
            target.value = target.value.replace(/(?!^\+|[0-9])\D/g, '');
            if (target.value.length >= 12) { 
                target.value = target.value.substring(0, 12);
            }
        }
    });

    formMain.addEventListener('submit', (event) => {
        event.preventDefault();
        formMain.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(formMain);
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

    formCapture.addEventListener('submit', (event) => {
        event.preventDefault();
        formCapture.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(formCapture);
        let bodyCapture = {};
        formData.forEach((val, key) => {
            bodyCapture[key] = val;
        });
        postData(bodyCapture).then((response) => {
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
};

export default sendForm;