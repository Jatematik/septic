const popupCheck = () => {
    const checkBtn = document.querySelector('.check-btn'),
        popupCheck = document.querySelector('.popup-check'),
        inputs = popupCheck.querySelectorAll('input');

    checkBtn.addEventListener('click', () => {
        popupCheck.style.display = 'block';
    });

    popupCheck.addEventListener('click', (event) => {
        event.preventDefault();
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