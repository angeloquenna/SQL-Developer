// JavaScript for color-changing functionality
const colorChangeBtn = document.getElementById('colorChangeBtn');
const body = document.body;
const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF'];
let currentColorIndex = 0;

colorChangeBtn.addEventListener('click', () => {
    body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});
