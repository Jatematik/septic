const popupDiscount = () => {
    const discountBtn = document.querySelectorAll('.discount-btn'),
        discountModal = document.querySelector('.popup-discount'),
        inputs = discountModal.querySelectorAll('input');

    discountBtn.forEach((item) => {
        item.addEventListener('click', () => {
            discountModal.style.display = 'block';
        });
    });

    discountModal.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        if (target.matches('.popup-close')) {
            inputs.forEach((item) => {
                item.value = '';
            });
            discountModal.style.display = 'none';
        } else {
            target = target.closest('.popup-dialog');
            if (!target) {
                inputs.forEach((item) => {
                    item.value = '';
                });
                discountModal.style.display = 'none';
            }
        }
    });
};

export default popupDiscount;