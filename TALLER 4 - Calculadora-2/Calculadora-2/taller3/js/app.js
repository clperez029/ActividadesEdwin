const numero1 = document.querySelector('#txt-num1')
const numero2 = document.querySelector('#txt-num2')

const btnsuma = document.querySelector('#suma')
const btnresta = document.querySelector('#resta')
const btnmulti = document.querySelector('#multiplicacion')
const btndivi = document.querySelector('#division')

const resultado = document.querySelector('#resultado')

btnsuma.addEventListener('click', sumar)
btnresta.addEventListener('click', restar)
btnmulti.addEventListener('click', multiplicar)
btndivi.addEventListener('click', dividir)

function sumar(){
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    const result = num1 + num2;
    
    resultado.textContent = result;
    resultado.style.fontSize= '35px';
    resultado.style.background= 'transparent';
    resultado.style.color= 'red';
}

function restar(){
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    const result = num1 - num2;
    
    resultado.textContent = result;
    resultado.style.fontSize= '35px';
    resultado.style.background= 'transparent';
    resultado.style.color= 'red';

}

function multiplicar(){
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);
    const result = num1 * num2;
    
    resultado.textContent = result;
    resultado.style.fontSize= '35px';
    resultado.style.background= 'transparent';
    resultado.style.color= 'red';

}

function dividir(){
    const num1 = parseFloat(numero1.value);
    const num2 = parseFloat(numero2.value);

    if (num2 === 0){
        const result = 'Número 2 no puede ser 0';
        resultado.textContent = (result)
        resultado.style.color= 'white';
        resultado.style.fontSize= '18px';
        resultado.style.background= 'black';
        resultado.style.borderRadius= '7px';
        resultado.style.width= '80%';
        resultado.style.padding= '10px';
        resultado.style.textAlign = 'center';
    }

    else{
        const result = num1 / num2;
    
        resultado.textContent = result;
        resultado.style.fontSize= '35px';
        resultado.style.background= 'transparent';
        resultado.style.color= 'red';
    }

}











