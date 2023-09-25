const grid16 = document.getElementById('grid16');
const container = document.getElementById('container');
const pixel = document.getElementsByClassName('pixel');

grid16.onclick = function () {
    for (let i = 0; i < 256; i++) {
        const addPixel = document.createElement('div');
        container.appendChild(addPixel)
        addPixel.className = 'pixel'
    }
};



