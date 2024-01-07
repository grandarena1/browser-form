const input_email = document.querySelector('#email');
input_email.addEventListener('change', () => validateForm('email'));

const input_country = document.querySelector('#country');
input_country.addEventListener('change', () => validateForm('country'));

const input_zipcode = document.querySelector('#zipcode');
input_zipcode.addEventListener('change', () => validateForm('zipcode'));

const input_password = document.querySelector('#password');
input_password.addEventListener('change', () => validateForm('password'));

const input_password_confirmation = document.querySelector('#password-confirmation');
input_password_confirmation.addEventListener('change', () => validateForm('password-confirmation'));

const input_submit = document.querySelector('#form-submit');
input_submit.addEventListener('click', () => submitForm());

const form_container = document.querySelector('.form');
const form_success_submit = document.querySelector('.submitted');

function validateForm(type) {
    switch(type) {
        case 'email':
            validateEmail(); 
        break;
        case 'country':
            validateCountry();
        break;
        case 'zipcode':
            validateZipcode();
        break;
        case 'password':
            validatePassword();
        break;
        case 'password-confirmation':
            validatePassword();
        break;
        case 'submit':
            submitForm();
        break;
    }
}

function validateEmail() {
    if(!input_email.checkValidity()) {
        formatError(0, 'Please enter a valid email address', [input_email]);
    }   
    else if(input_email.checkValidity()){
        resetError(0, [input_email]);
        return true;
    }
    else {
        input_email.style.borderColor = '#7372c28c';
    }
}

function validateCountry() {
    if(!input_country.value) {
        formatError(1, 'Please select a country', [input_country]);
    }
    else {
        resetError(1, [input_country]);
        return true;
    }
}

function validateZipcode() {
    if(!input_zipcode.checkValidity()) {
        formatError(2, 'Please enter a valid ZIP code', [input_zipcode]);
    }
    else {
        resetError(2, [input_zipcode]);
        return true;
    }
}

function validatePassword() {
    if(input_password.value.length > 3 || input_password_confirmation.value.length > 3) {
        if(input_password_confirmation.value !== input_password.value) {
            formatError(3, 'Please make sure both fields match', [input_password, input_password_confirmation]);
            input_password.style.borderColor = 'red';
            input_password_confirmation.style.borderColor = 'red';
        }
        else {
            resetError(3, [input_password, input_password_confirmation]);
            input_password.style.borderColor = 'green';
            input_password_confirmation.style.borderColor = 'green';
            return true;
        }
    }
    else {
        input_password.style.borderColor = 'red';
        input_password_confirmation.style.borderColor = 'red';
        formatError(3, 'Please enter a password more than 3 characters', [input_password, input_password_confirmation]);
    }
}

function submitForm() {
    if(validateEmail() && validateCountry() && validateZipcode() && validatePassword()) {
        console.log('All fields successfully validated');
        form_container.classList.add('hidden');
        form_success_submit.classList.remove('hidden');
        setTimeout(resetForm, 3000);
    }
    else {
        throw(new Error('Some fields failed to validate'))
    }
}

function formatError(number, message, object) {
    const err = document.getElementsByClassName('error')[number];
    err.style.color = 'red';
    object.forEach(obj => obj.style.borderColor = 'red');
    err.style.textAlign = 'center';
    err.textContent = message;
}

function resetError(number, object) {
    const errors = document.querySelectorAll('.error');
    object.forEach(obj => obj.style.borderColor = 'green');
    errors[number].style.textAlign = 'center';
    errors[number].style.color = 'green';
    errors[number].textContent = "✓";
}

function resetForm() {
    form_success_submit.classList.add('hidden'); 
    form_container.classList.remove('hidden');
    input_email.value = "";
    input_zipcode.value = "";
    input_password.value = "";
    input_password_confirmation.value = "";

    input_email.style.borderColor = '#7372c28c';
    input_country.style.borderColor = 'green';
    input_zipcode.style.borderColor = '#7372c28c';
    input_password.style.borderColor = '#7372c28c';
    input_password_confirmation.style.borderColor = '#7372c28c';

    const errors = document.querySelectorAll('.error');
    errors.forEach(err => err.textContent = "");
}