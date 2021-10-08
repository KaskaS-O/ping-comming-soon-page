const input = document.querySelector('.subscription__input');

const form = document.querySelector('.subscription__form');

const formMsg = document.querySelector('.subscription__msg');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!input.value.length) {
        formMsg.style = 'display:block';
        formMsg.innerText = 'Whoops! It looks like you forgot to add your email';
        input.classList.add('error');
    } else if (input.value.length < 7 || !input.value.includes('@') || !input.value.includes('.')) {
        formMsg.style = 'display:block';
        formMsg.innerText = 'Please provide a valid email address';
        input.classList.add('error');
    }  else {
        input.value = '';
        formMsg.style ='display:none';
        input.classList.remove('error');
    }
})

