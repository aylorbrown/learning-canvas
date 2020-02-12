const canvas = document.querySelector('canvas');

// canvas is a pixel based drawing system 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

context.strokeStyle = '#bcd381'
context.lineWidth = 10
context.lineCap = 'round'

let shouldPaint = false

// click down paint
document.addEventListener('mousedown', function (event) {
    shouldPaint = true
    context.moveTo(event.pageX, event.pageY)
    context.beginPath()
})

// click up not paint
document.addEventListener('mouseup', function (event) {
    shouldPaint = false;
})


document.addEventListener('mousemove', function (event) {
    if (shouldPaint) {
        context.lineTo(event.pageX, event.pageY)
        context.stroke()
    }
})

// make context stroke color the color of nav circles 

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        context.strokeStyle = this.style.backgroundColor
    });
})

