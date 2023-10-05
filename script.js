//assignment
const grid16 = document.getElementById('grid16');
const grid32 = document.getElementById('grid32');
const canvas = document.getElementById('canvas');
const pixel = document.getElementsByClassName('pixel');
const clearBtn = document.getElementById('clear');
let colorPicker = document.getElementById('colorPicker');

function updateColor () {
    currentColor = colorPicker.value;
}

colorPicker.addEventListener('change', updateColor);

let currentColor = 'black';

//default startup 16x16 canvas
for (let i = 0; i < 256; i++) {
    const addPixel = document.createElement('div');
    canvas.appendChild(addPixel);
    addPixel.className = 'pixel';
}

function clearCanvas () {
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = 'white';
    }
};

//grid buttons
grid16.onclick = function () {
    if (canvas.childElementCount == 256) {
        return
    } else {
        canvas.innerHTML = '';
        for (let i = 0; i < 256; i++) {
            const addPixel = document.createElement('div');
            canvas.appendChild(addPixel)
            addPixel.className = 'pixel';
        }
    }
};

grid32.onclick = function () {
    if (canvas.childElementCount >= 1024) {
        return
    } else {
        canvas.innerHTML = '';
        for (let i = 0; i < 1024; i++) {
            const addPixel = document.createElement('div');
            addPixel.className = 'pixel'
            canvas.appendChild(addPixel)
            addPixel.style.width = '22.5px';
            addPixel.style.height = '22.5px';
        }
    }
};

clearBtn.onclick = function () {
    clearCanvas();
};

//mouse over paint
window.addEventListener("mouseover", function (event) {
    if (event.target.className == 'pixel') {
        event.target.style.backgroundColor = currentColor;
    } 
});



