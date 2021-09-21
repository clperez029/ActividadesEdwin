const lista = document.querySelector('#lista');
const inputColor = document.querySelector('#inputColor');
const cuadro = document.querySelector('#cuadro');
const color = document.querySelector('#color');
lista.addEventListener('click', ListaColor);
inputColor.addEventListener('keyup', ColorInput);

function ListaColor() {
    let valorLista = lista.value;
    cuadro.style.backgroundColor = valorLista;
    color.textContent = valorLista;
}

function ColorInput(){
    let cambiarcolorinput = inputColor.value.toUpperCase();
    console.log(cambiarcolorinput);
    cambiarcolorinput = `#${cambiarcolorinput}`;
    cuadro.style.backgroundColor = cambiarcolorinput;
    color.textContent = cambiarcolorinput;
    if (cambiarcolorinput === "#"){
        color.textContent = "COLOR";
    }
}


