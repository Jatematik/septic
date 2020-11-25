const accordion = () => {
    const accordion = document.getElementById('accordion-two'),
        accordionPanel = accordion.querySelectorAll('.panel-heading'),
        accordionCollapse = accordion.querySelectorAll('.panel-collapse');

    const toggleAccordion = (index) => {
        for (let i = 0; i < accordionCollapse.length; i++) {
            if (index === i) {
                accordionCollapse[i].classList.add('in');
            } else {
                accordionCollapse[i].classList.remove('in');
            }
        }
    };


    accordion.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target;
        target = target.closest('.panel-heading');
        if (target) {
            accordionPanel.forEach((item, i) => {
                if (item === target) {
                    console.log(target);
                    toggleAccordion(i);
                } 
            });
        }
    });


};

export default accordion;