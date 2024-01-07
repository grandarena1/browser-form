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
        formatError(0, 'Please enter a valid email address');
    }   
    else {
        resetError(0);
    }
}

function validateCountry() {
    if(!input_country.value) {
        formatError(1, 'Please select a country');
    }
    else {
        resetError(1);
    }
}

function validateZipcode() {
    if(!input_zipcode.checkValidity()) {
        formatError(2, 'Please enter a valid ZIP code');
    }
    else {
        resetError(2);
    }
}

function validatePassword() {
    if(input_password.value.length > 3 || input_password_confirmation.value.length > 3) {
        if(input_password_confirmation.value !== input_password.value) {
            formatError(3, 'Please make sure both fields match');
            input_password.style.borderColor = 'red';
            input_password_confirmation.style.borderColor = 'red';
        }
        else {
            resetError(3);
            input_password.style.borderColor = 'green';
            input_password_confirmation.style.borderColor = 'green';
        }
    }
    else {
        input_password.style.borderColor = 'red';
        input_password_confirmation.style.borderColor = 'red';
        formatError(3, 'Please enter a password more than 3 characters');
    }
}

function submitForm() {

}

function formatError(number, message) {
    const err = document.getElementsByClassName('error')[number];
    err.style.color = 'red';
    err.style.textAlign = 'center';
    err.textContent = message;
}

function resetError(number) {
    const errors = document.querySelectorAll('.error');
    errors[number].style.textAlign = 'center';
    errors[number].style.color = 'green';
    errors[number].textContent = "✓";
}