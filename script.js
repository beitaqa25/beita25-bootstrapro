document.addEventListener('DOMContentLoaded', () => {
    const grid1Button = document.getElementById('grid-1');
    const grid3Button = document.getElementById('grid-3');
    const imageGrid = document.getElementById('image-grid');
    
    let isThreePerRow = true;

    grid1Button.addEventListener('click', (event) => {
        event.preventDefault();
        if (!isThreePerRow) {
            imageGrid.classList.remove('row-cols-1');
            imageGrid.classList.add('row-cols-3');
            grid3Button.querySelector('i').style.color = '#000000';
            grid1Button.querySelector('i').style.color = '#0088f0';
            isThreePerRow = true;
        }
    });

    grid3Button.addEventListener('click', (event) => {
        event.preventDefault();
        if (isThreePerRow) {
            imageGrid.classList.remove('row-cols-3');
            imageGrid.classList.add('row-cols-1');
            grid1Button.querySelector('i').style.color = '#000000';
            grid3Button.querySelector('i').style.color = '#0088f0';
            isThreePerRow = false;
        }
    });
});
