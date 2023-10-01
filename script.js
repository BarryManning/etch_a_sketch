//assignment
const grid16 = document.getElementById('grid16');
const grid32 = document.getElementById('grid32');
const canvas = document.getElementById('canvas');
const pixel = document.getElementsByClassName('pixel16');
let currentColor = 'black';

//default startup 16x16 canvas
for (let i = 0; i < 256; i++) {
    const addPixel = document.createElement('div');
    canvas.appendChild(addPixel);
    addPixel.className = 'pixel16';
}

//grid buttons
grid16.onclick = function () {
    if (canvas.childElementCount >= 256) {
        return
    } else {
        for (let i = 0; i < 256; i++) {
            const addPixel = document.createElement('div');
            canvas.appendChild(addPixel)
            addPixel.className = 'pixel16'
        }
    }
};

grid32.onclick = function () {
    if (canvas.childElementCount == 1024) {
        return
    } else {
        for (let i = 0; i < 1024; i++) {
            const addPixel = document.createElement('div');
            canvas.appendChild(addPixel)
            addPixel.className = 'pixel32'
        }
    }
};

//mouse over paint
window.addEventListener("mouseover", function (event) {
    if (event.target.className == 'pixel16') {
        event.target.style.backgroundColor = currentColor;
    } 
});


