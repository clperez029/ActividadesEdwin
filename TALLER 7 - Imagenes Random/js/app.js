const imgRamdom = document.querySelector("#imgRamdom");
const emoji = document.querySelector("#emoji");

const btnCambiarImg = document.querySelector("#btnCambiarimg");
const like = document.querySelector("#btn-Like");
const dislike = document.querySelector("#btn-Dislike");

btnCambiarImg.addEventListener('click', CambiarImagen);
like.addEventListener('click', Like);
dislike.addEventListener('click', Dislike);



function CambiarImagen(){
    let imagen = numRamdom(1,8);
    imgRamdom.setAttribute('src', `./img/ramdom/img${imagen}.jpg`)  
}

function Like(){
    let emojifeliz = `./img/emojiFeliz.png`
    emoji.setAttribute('src', `${emojifeliz}`)
}

function Dislike(){
    let emojiTrizte = `./img/emojiTrizte.png`
    emoji.setAttribute('src', `${emojiTrizte}`)
}

function numRamdom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};




