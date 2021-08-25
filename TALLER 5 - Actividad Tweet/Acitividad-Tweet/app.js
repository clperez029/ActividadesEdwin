const inicial = document.querySelector('#initial-name');
const usuario = document.querySelector('#txt-name');
const txtUserValidate = document.querySelector('#txt-userValidate');
const tweet = document.querySelector('#ta-tweet');
const contador = document.querySelector('#counter');
const mensaje = document.querySelector('#mensaje');
const btnSend = document.querySelector('#btn-send');
// const letraInicial = document.querySelector('#initial-name');


usuario.addEventListener('keyup', letraInicail);
tweet.addEventListener('keydown', contadorTweets);

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
        mensaje.textContent = "El límite de escritura son 200 Caracteres";
        mensaje.style.color = "red";
        contador.style.color = "red";
    }

    else if (escrito.length >= 150 && escrito.length < 170){
        mensaje.textContent = "Le quedan menos de 50 caracteres";
        mensaje.style.color = "#130f40";
        mensaje.style.fontSize= '18px';
        mensaje.style.fontFamily= 'Arial, sans-serif';
        mensaje.style.background= 'white';
        mensaje.style.borderRadius= '7px';
        mensaje.style.width= '80%';
        mensaje.style.padding= '10px';
        mensaje.style.textAlign = 'center';
        contador.style.color = "#white";
    }

    else if (escrito.length >= 170 && escrito.length < 190){
        mensaje.textContent = "Le quedan menos de 30 caracteres";
        mensaje.style.color = "#30336b";
        mensaje.style.fontSize= '18px';
        mensaje.style.fontFamily= 'Arial, sans-serif';
        mensaje.style.background= 'white';
        mensaje.style.borderRadius= '7px';
        mensaje.style.width= '80%';
        mensaje.style.padding= '10px';
        mensaje.style.textAlign = 'center';
        contador.style.color = "#c8d6e5";
    }

    else if (escrito.length >= 190 && escrito.length < 200){
        mensaje.textContent = "Le quedan menos de 10 caracteres";
        mensaje.style.color = "black";
        mensaje.style.fontSize= '18px';
        mensaje.style.fontFamily= 'Arial, sans-serif';
        mensaje.style.background= 'white';
        mensaje.style.borderRadius= '7px';
        mensaje.style.width= '80%';
        mensaje.style.padding= '10px';
        mensaje.style.textAlign = 'center';
        contador.style.color = "black";
    }

    else{
        mensaje.textContent = "";
        mensaje.style.background= 'transparent';
        contador.style.color = "white";
    }

    resultado = cont - escrito.length;

    contador.textContent = resultado;


}
