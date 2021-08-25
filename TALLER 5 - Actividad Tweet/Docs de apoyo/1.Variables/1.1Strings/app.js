const inicial = document.querySelector('#initial-name');
const usuario = document.querySelector('#txt-name');
const txtUserValidate = document.querySelector('#txt-userValidate');
const tweet = document.querySelector('#ta-tweet');
const contador = document.querySelector('#counter');
const mensaje = document.querySelector('#mensaje');
const btnSend = document.querySelector('#btn-send');
// const letraInicial = document.querySelector('#initial-name');


usuario.addEventListener('keypress', letraInicail);
tweet.addEventListener('keypress', contadorTweets);

function letraInicail(){
    const user = usuario.value;
    let ini = user.charAt(0).toUpperCase()
    console.log(ini);
    inicial.textContent = ini.toString();
}


function contadorTweets(){
    const escrito = tweet.value;
    console.log(escrito.length);
    let cont = 200;
    console.log(cont);

    if (escrito.length >= 200){
        mensaje.textContent = "Solo se permiten 200 Caracteres";
    }

    else if (escrito.length >= 150 && escrito.length < 170){
        mensaje.textContent = "Le quedan menos de 50 caracteres";
    }

    else if (escrito.length >= 170 && escrito.length < 190){
        mensaje.textContent = "Le quedan menos de 30 caracteres";
    }

    else if (escrito.length >= 190 && escrito.length < 200){
        mensaje.textContent = "Le quedan menos de 10 caracteres";
    }

    else{
        mensaje.textContent = "";
    }

    resultado = cont - escrito.length;

    contador.textContent = resultado;


}
