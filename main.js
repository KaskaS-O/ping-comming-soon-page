const input = document.querySelector('.subscription__input');

const form = document.querySelector('.subscription__form');

const formMsg = document.querySelector('.subscription__msg');

let error = null;

form.addEventListener('submit', e => {
    e.preventDefault();

    if (input.value.length < 5 || !input.value.includes('@') || !input.value.includes('.')) {
        error = document.createElement('p');
        formMsg.style = 'display:block';
        formMsg.appendChild(error);
        error.classList.add('subscription__error');
        error.innerText = 'Please provide a valid email address';
        
    } else {
        input.value = '';
        formMsg.style ='display:none';
    }
})

