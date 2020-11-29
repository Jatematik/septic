const getBlocks = () => {
    const addBtn = document.querySelector('.add-sentence-btn'),
        sentence = document.querySelector('.sentence'),
        addBlockOne = sentence.querySelector('.visible-sm-block');

    let addBlocks = sentence.querySelectorAll('.hidden');
    console.log();

    addBtn.addEventListener('click', () => {
        addBtn.parentElement.style.transform = 'translateY(50%)';
        addBtn.style.transform = 'translateY(-50%)';
        if (addBlockOne.classList.contains('visible-sm-block')) {
            addBlockOne.classList.remove('visible-sm-block');
        } else {
            addBlocks.forEach((item, index) => {
                if (index === 0) {
                    item.classList.remove('hidden');
                }
            });
            addBlocks = sentence.querySelectorAll('.hidden');
        }
        if (addBlocks.length === 0) {
            addBtn.style.display = 'none';
        }
    });
};

export default getBlocks;