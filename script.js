// Submit knappen
const submitBtn = document.querySelector('#submit-btn');

// Personalia elementer
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');

// Land element
const countryInput = document.querySelector('#country');

function submit(event) {
  event.preventDefault();

  const name = nameInput.value;
  const surname = surnameInput.value;
  const country = countryInput.value;

  console.log(name);
  console.log(surname);
  console.log(country);
}

submitBtn.addEventListener('click', submit);
