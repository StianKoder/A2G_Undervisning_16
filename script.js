// Submit knappen
const submitBtn = document.querySelector('#submit-btn');

// konvertering knapp

const konverteringButton = document.querySelector('#konverter-button')

// Number input

const numberInput = document.querySelector("#number")

// Personalia elementer
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');

// Land element
const countryInput = document.querySelector('#country');

// Hobbyer
const fiskeElement = document.querySelector("#fiske")
const gamingElement = document.querySelector("#gaming")
const kodingElement = document.querySelector("#koding")

function submit(event) {
  event.preventDefault();
  
  const name = nameInput.value;
  const surname = surnameInput.value;
  const country = countryInput.value;

  const hobbyArray = [];

  if (fiskeElement.checked === true) {
    hobbyArray.push(fiskeElement.value)
  }
  if (gamingElement.checked === true) {
    hobbyArray.push(gamingElement.value)
  }
  if (kodingElement.checked === true) {
    hobbyArray.push(kodingElement.value)
  }


  console.log(name);
  console.log(surname);
  console.log(country);
  console.log(hobbyArray)
}

function konvertering (event) {
  event.preventDefault() 

  const number = numberInput.value

  const feet = number * 3.2

  konverteringButton.textContent = number + " meter = " + feet + " feet"

}

konverteringButton.addEventListener("click", konvertering)
submitBtn.addEventListener('click', submit);
