'use strict';
const calc = () => {
    // Acordion
    const accordion = document.getElementById('accordion'),
        accordionPanel = accordion.querySelectorAll('.panel-heading'),
        accordionCollapse = accordion.querySelectorAll('.panel-collapse'),
        constructBtn = accordion.querySelectorAll('.panel-default .construct-btn');

    const toggleAccordion = (index) => {
        for (let i = 0; i < accordionCollapse.length; i++) {
            if (index === i) {
                accordionCollapse[i].classList.add('in');
            } else {
                accordionCollapse[i].classList.remove('in');
            }
        }
    };

    const toggleBtn = (index) => {
        for (let i = 0; i < constructBtn.length; i++) {
            if (index === i) {
                constructBtn[i].classList.add('active');
            } else {
                constructBtn[i].classList.remove('active');
            }
        }
    };

    constructBtn.forEach((item, index) => {
        item.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.active');
            if (item.classList.contains('active')) {
                constructBtn.forEach((item, i) => {
                    if ((constructBtn.length - 1) === index && item === target) {
                        toggleAccordion(i);
                    } else if (item === target) {
                        toggleAccordion(i + 1);
                        item.classList.remove('active');
                    }
                    else {
                        item.classList.add('active');
                    }
                });
            }
        });
    });


    accordionPanel.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;
            target = target.closest('.panel-heading');
            if (target) {
                accordionPanel.forEach((item, i) => {
                    if (item === target) {
                        toggleAccordion(i);
                        toggleBtn(i);
                    } 
                });
            } 
        });
    });

    // calculator

    const onSwitch = document.getElementById('myonoffswitch'),
        onSwitchBottom = document.getElementById('myonoffswitch-two'),
        wellText = accordion.querySelector('.nonactive'),
        wellSelect = accordion.querySelectorAll('.nonactive'),
        diameterFirst = document.getElementById('diameter1'),
        diameterSecond = document.getElementById('diameter2'),
        quantityFirst = document.getElementById('quantity1'),
        quantitySecond = document.getElementById('quantity2'),
        result = document.getElementById('calc-result'),
        popupDiscount = document.querySelector('.popup-discount'),
        inputs = popupDiscount.querySelectorAll('.popup-dialog input'),
        callBtn = accordion.querySelector('.call-btn');

    let dataCalc = {};

    result.value = 11000;

    wellText.style.display = 'none';
    wellSelect.forEach((item) => {
        item.style.display = 'none';
    });

    const sum = (price = 10000) => {
        let total = 0,
            typeSeptic,
            bottom;
        const diameterFirstValue = parseFloat(diameterFirst.options[diameterFirst.selectedIndex].value),
            quantityFirstValue = parseInt(quantityFirst.options[quantityFirst.selectedIndex].value),
            diameterSecondValue = parseFloat(diameterSecond.options[diameterSecond.selectedIndex].value),
            quantitySecondValue = parseInt(quantitySecond.options[quantitySecond.selectedIndex].value),
            meters = document.getElementById('meters');

        if (onSwitch.classList.contains('on')) {
            bottom = 'нет';
            typeSeptic = 'двухкамерный';
            wellText.style.display = 'inline-block';
            wellSelect.forEach((item) => {
                item.style.display = 'inline-block';
            });
            price += 5000;
            total = price;

            if (diameterFirstValue === 2) {
                total = total + (total * 0.2);
            }

            if (diameterSecondValue === 2) {
                total = total + (total * 0.2);
            }

            if (quantityFirstValue === 2) {
                total = total + (10000 * 0.3);
            } else if (quantityFirstValue === 3) {
                total = total + (10000 * 0.5);
            }

            if (quantitySecondValue === 2) {
                total = total + (5000 * 0.2);
            } else if (quantitySecondValue === 3) {
                total = total + (5000 * 0.4);
            }

            if (onSwitchBottom.classList.contains('on')) {
                total = total + (total * 0.2);
                bottom = 'есть';
            }

            dataCalc = {
                'Тип септика': typeSeptic,
                'Диаметр первого колодца': diameterFirstValue,
                'Кол-во колец первого колодца': quantityFirstValue,
                'Диаметр второго колодца': diameterSecondValue,
                'Кол-во колец второго колодца': quantitySecondValue,
                'Наличие днища колодца': bottom,
                'Расстояние от септика до дома': meters.value
            };

        } else {
            bottom = 'нет';
            typeSeptic = 'однокамерный';
            total = price;
            wellText.style.display = 'none';
            wellSelect.forEach((item) => {
                item.style.display = 'none';
            });
            total = price;

            if (diameterFirstValue === 2) {
                total = total + (total * 0.2);
            }

            if (quantityFirstValue === 2) {
                total = total + (10000 * 0.3);
            } else if (quantityFirstValue === 3) {
                total = total + (10000 * 0.5);
            }

            if (onSwitchBottom.classList.contains('on')) {
                total = total + (total * 0.1);
                bottom = 'есть';
            }
            dataCalc = {
                'Тип септика': typeSeptic,
                'Диаметр первого колодца': diameterFirstValue,
                'Кол-во колец первого колодца': quantityFirstValue,
                'Наличие днища колодца': bottom,
                'Расстояние от септика до дома': meters.value
            };
        }
        result.value = total;
        dataCalc['Итоговая стоимость'] = result.value;
    };

    accordion.addEventListener('change', (event) => {
        let target = event.target;
        if (target === onSwitch) {
            onSwitch.classList.toggle('on');
            sum();
        }
        if (target === onSwitchBottom) {
            onSwitchBottom.classList.toggle('on');
            sum();
        }
        if (target.matches('select') || target.matches('input') || target.matches('.call-btn')) {
            sum();
        }
    });

    callBtn.addEventListener('click', (event) => {
        event.preventDefault();
        popupDiscount.style.display = 'block';
    });

    popupDiscount.addEventListener('click', (event) => {
        let target = event.target;
        if (target.matches('.popup-close')) {
            inputs.forEach((item) => {
                item.value = '';
            });
            popupDiscount.style.display = 'none';
        } else {
            target = target.closest('.popup-dialog');
            if (!target) {
                inputs.forEach((item) => {
                    item.value = '';
                });
                popupDiscount.style.display = 'none';
            }
        }
    });

    // send data and form
    const errorMessage = 'Ошибка, что-то пошло не так...',
        loadMessage = 'Идет отправка...',
        successMessage = 'Отправлено! Мы скоро с вами свяжемся!',
        form = document.getElementById('popup-discount');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;
    color: black;`;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;

        const formData = new FormData(form);
        formData.forEach((val, key) => {
            dataCalc[key] = val;
        });
        console.log(dataCalc);
        postData(dataCalc).then((response) => {
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
            form.querySelectorAll('input').value = '';
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

export default calc;