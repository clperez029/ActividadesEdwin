const nameUser = document.getElementById('txt-name');
const ageUser = document.querySelector('#txt-age');
const calculateAge = document.querySelector('#btn-validate');
const response = document.querySelector('#p-response');

calculateAge.addEventListener('click',validateAge);

function validateAge() {
  const myName = nameUser.value;
  const myAge = parseInt(ageUser.value);

  if (myAge >= 18) {
     response.textContent = `Sr(a) ${myName} usted es mayor de edad, con ${myAge} años`;
     response.style.color = 'green';
  } else {
    response.textContent = `Sr(a) ${myName} usted es menor de edad, con ${myAge} años`;
    response.style.color = 'red';
  }
 
}

// console.log(`Sr(a) ${name} usted es mayor de edad, con ${age} años`);


