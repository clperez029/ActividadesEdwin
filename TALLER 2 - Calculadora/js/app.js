const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');

const btnSuma = document.querySelector('#suma');
const btnResta = document.querySelector('#resta');
const btnMult = document.querySelector('#mult');
const btnDivi = document.querySelector('#divi');

btnSuma.addEventListener('click', suma);
btnResta.addEventListener('click', resta);
btnMult.addEventListener('click', multiplication);
btnDivi.addEventListener('click', division);

const response = document.querySelector('#resultadoOperacion');

function suma (){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let resultSuma = num1 + num2;
    console.log(resultSuma);
    response.textContent = resultSuma;
}

function resta (){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let resultResta = num1 - num2;
    console.log(resultResta);
    response.textContent = resultResta;
}

function multiplication (){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);
    let resultMulti = num1 * num2;
    console.log(resultMulti);
    response.textContent = resultMulti;
}

function division (){
    let num1 = parseFloat(numero1.value);
    let num2 = parseFloat(numero2.value);

    if (num2 == 0) {
        alert("El denominador no puede ser cero");
    }
    else {
        let resultDivi = parseFloat(num1 / num2);
        console.log(resultDivi);
        response.textContent = resultDivi;
    }  
}


