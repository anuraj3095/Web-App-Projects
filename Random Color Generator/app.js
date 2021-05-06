const rndBtn = document.getElementById("btn");
const colorTxt = document.getElementById("color-text");

rndBtn.addEventListener('click', function() {
    const rndColor = '#' + 
        (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    colorTxt.innerHTML = rndColor;

    document.body.style.background = rndColor
})