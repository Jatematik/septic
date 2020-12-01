const getBlocks = () => {
    const addBtn = document.querySelector('.add-sentence-btn'),
        sentence = document.querySelector('.sentence'),
        addBlockOne = sentence.querySelector('.visible-sm-block');

    let addBlocks = sentence.querySelectorAll('.hidden');

    addBtn.addEventListener('click', () => {
        addBtn.parentElement.style.transform = 'translateY(50%)';
        addBtn.style.transform = 'translateY(-50%)';
        if (addBlockOne.classList.contains('visible-sm-block')) {
            addBlockOne.classList.remove('visible-sm-block');
        } 
        addBlocks.forEach((item) => {
                    item.classList.remove('hidden');
            });
        if (addBlocks.length === 0) {
            addBtn.style.display = 'none';
        }
    });
};

export default getBlocks;