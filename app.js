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
            validatePassword('password');
        break;
        case 'password-confirmation':
            validatePassword('confirmation');
        break;
        case 'submit':
            submitForm();
        break;
    }
}

function validateEmail() {
    if(!input_email.checkValidity()) {
        
    }   
}

function validateCountry() {

}

function validateZipcode() {

}

function validatePassword(type) {
    if(type === 'password') {

    }
    else if(type === 'confirmation') {
        
    }
}

function submitForm() {

}