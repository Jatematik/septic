const popupCall = () => {
    const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call'),
        inputs = document.querySelectorAll('.popup-dialog input');

    callBtn.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            popupCall.style.display = 'block';
        });
    });

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