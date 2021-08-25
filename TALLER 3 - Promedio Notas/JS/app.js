const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const nota4 = document.querySelector('#nota4');
const nota5 = document.querySelector('#nota5');
const resultNotaF = document.querySelector('#notaFinal');
const mensaje = document.querySelector('#msjTrimestre');
const btnCalcular = document.querySelector('#btnCalcularNotas');

btnCalcular.addEventListener('click', promedio);

function promedio(){
    let promNotaFinal;
    let promNota1 = ((parseFloat(nota1.value) * 10)/100);
    let promNota2 = ((parseFloat(nota2.value) * 10)/100);
    let promNota3 = ((parseFloat(nota3.value) * 15)/100);
    let promNota4 = ((parseFloat(nota4.value) * 20)/100);
    let promNota5 = ((parseFloat(nota5.value) * 45)/100);
    promNotaFinal = promNota1 + promNota2 + promNota3 + promNota4 + promNota5;
    resultNotaF.textContent = promNotaFinal;
    
    if (promNotaFinal >= 3.5){
        mensaje.textContent = `Felicidades Ganaste el trimestre con una nota final de ${promNotaFinal}!`;
    }
    else{
        mensaje.textContent = `Lo siento Perdió el trimestre con una nota final de ${promNotaFinal}`;
    }

    alert(`Su nota final es de: ${promNotaFinal}`)
}

