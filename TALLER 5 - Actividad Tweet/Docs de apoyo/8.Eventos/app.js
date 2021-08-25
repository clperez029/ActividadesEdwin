const btnMouse = document.getElementById('btn-mouse');

const txtKeyUp = document.getElementById('txt-keyup');
const txtKeyDown = document.getElementById('txt-keydown');
const txtKeyPress = document.getElementById('txt-keypress');    
const eventChange = document.getElementById('event-change');


EventListener();
function EventListener() {
  // btnMouse.addEventListener('click', runMouseClick);
  // btnMouse.addEventListener('blur', runBlurClick);
  // btnMouse.addEventListener('dblclick', runDblClick);
  // btnMouse.addEventListener('mouseover', runMouseOver);

  // txtKeyDown.addEventListener('keydown', inputKeyDown);
  // txtKeyUp.addEventListener('keyup', inputKeyUp);
  // txtKeyPress.addEventListener('keypress', inputKeyPress);
  eventChange.addEventListener('change', EventChange);
}

// function runMouseClick() {
//   console.log('Evento activado cuando escucha el evento click');
// }

// function runBlurClick() {
//   console.log('Evento activado cuando escucha el evento blur');
// }

// function runDblClick() {
//   console.log('Evento activado cuando escucha el evento doble click');
// }

// function runMouseOver() {
//   console.log('Evento activado cuando el mouse pasa por encima');
// }

// function inputKeyDown() {
//   console.log(txtKeyDown.value);
// }

// function inputKeyUp() {
//   console.log('Evento se dispara cuando suelto la tecla');
// }

function inputKeyPress() {
  console.log('Evento se dispara cuando presiono la tecla');
}

function EventChange() {
  console.log('Evento se dispara cuando selecciono algún elemento');
}
