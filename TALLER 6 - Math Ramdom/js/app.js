const container = document.getElementById('container');
const btnColor = document.getElementById('btnColor');

btnColor.addEventListener('click', CambiarColor);

function CambiarColor(){
    let R = valorRGB(0, 255)
    let G = valorRGB(0, 255)
    let B = valorRGB(0, 255)

    let fondo = container;
    let colorFondo = ""

    container.style.backgroundColor = "rgb(" + R + "," + G + "," + B + ")";
    // container.style.backgroundColor = "rgb(40, 10, 30)";
};

function valorRGB(min, max) {
    return Math.random() * (max - min) + min;
};














