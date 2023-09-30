const grid16 = document.getElementById('grid16');
const container = document.getElementById('container');
const pixel = document.getElementsByClassName('pixel');
const hoveredDiv = document 
let currentColor = ('black');

grid16.onclick = function () {
    if (container.childElementCount == 256) {
        return
    } else {
        for (let i = 0; i < 256; i++) {
            const addPixel = document.createElement('div');
            container.appendChild(addPixel)
            addPixel.className = 'pixel'
        }
    }
};

function makeCurrentColor () {
    pixel.style.color = currentColor;
};

window.addEventListener("mouseover", function (event) {
    if (event.target.className == 'pixel') {
        event.target.style.backgroundColor = 'black';
        console.log('registering');
    } 
});
