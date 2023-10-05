//assignment
const grid16 = document.getElementById('grid16');
const grid32 = document.getElementById('grid32');
const canvas = document.getElementById('canvas');
const pixel = document.getElementsByClassName('pixel');
const clearBtn = document.getElementById('clear');
const eraserBtn = document.getElementById('eraser');
const markerBtn = document.getElementById('marker');
let colorPicker = document.getElementById('colorPicker');
let currentColor = 'black';

//default startup 16x16 canvas
for (let i = 0; i < 256; i++) {
    const addPixel = document.createElement('div');
    canvas.appendChild(addPixel);
    addPixel.className = 'pixel';
}

//clear canvas func
function clearCanvas () {
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].style.backgroundColor = 'white';
    }
};

//12x12 grid button
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

//32x32 grid button
grid32.onclick = function () {
    if (canvas.childElementCount == 1024) {
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

//clear button
clearBtn.onclick = function () {
    clearCanvas();
};


let isErasing = false;

//eraser button
eraserBtn.onclick = function () {
    isErasing == true
    currentColor = 'white'
    console.log('now erasing')
};

//marker button
markerBtn.onclick = function () {
    isErasing == false
};

//mouse over paint event
if (isErasing == false){
    window.addEventListener("mouseover", function (event) {
        currentColor = colorPicker.value;
        if (event.target.className == 'pixel') {
            event.target.style.backgroundColor = currentColor;
        } 
    })
};


