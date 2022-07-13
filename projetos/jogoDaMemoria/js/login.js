const input = document.querySelector('.input-login');
const button = document.querySelector('.input-button');
const form = document.querySelector('.form-login');

const validateInput = () => {
  
    if(input.value.length > 2){
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '');
    }

}

const submit = (event) => {

    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'

}

input.addEventListener('input', validateInput);
form.addEventListener('submit', submit);
