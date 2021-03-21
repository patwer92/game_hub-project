const billingForm = document.querySelector("#billingForm");

const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const zipCode = document.querySelector("#zipCode");
const zipCodeError = document.querySelector("#zipCodeError");

const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");

const cardHolder = document.querySelector("#cardHolder");
const cardHolderError = document.querySelector("#cardHolderError");

const expiration = document.querySelector("#expiration");
const expirationError = document.querySelector("#expirationError");

const cvc = document.querySelector("#cvc");
const cvcError = document.querySelector("#cvcError");




function validateForm() {

    event.preventDefault();

    console.log("hello");

    if (checkLength(firstName.value, 0) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
        return false;
    }

    if (checkLength(lastName.value, 0) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
        return false;
    }
    
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        return false;
    }

    if (checkLength(address.value, 4) === true) {
        addressError.style.display = "none";
    } else  {
        addressError.style.display = "block";
        return false;
    }


    if (validateNumber(zipCode.value) === true && checkLength(zipCode.value, 3) === true) {
        zipCodeError.style.display = "none";
    } else {
        zipCodeError.style.display = "block";
        return false;
    }

    if (validateNumber(cardNumber.value) === true && checkLength(cardNumber.value, 18) === true) {
        cardNumberError.style.display = "none";
    }  else {
        cardNumberError.style.display = "block";
        return false;
    }

    if (checkLength(cardHolder.value, 0) === true) {
        cardHolderError.style.display = "none";
    } else {
        cardHolderError.style.display = "block";
        return false;
    }

    if (validateDate(expiration.value) === true) {
        expirationError.style.display = "none";
    } else {
        expirationError.style.display = "block";
        return false;
    }

    if (validateCVC(cvc.value) === true) {
        cvcError.style.display = "none";
    } else {
        cvcError.style.display = "block";
        return false;
    }

 

    location.href = '/success.html';
    return true;





}

billingForm.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateNumber(number) {
    const regEx = /^[0-9\s]*$/;
    const numberMatches = regEx.test(number);
    return numberMatches;
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailMatches = regEx.test(email);
    return emailMatches;
}

function validateDate(expiration) {
    const regEx = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const dateMatches = regEx.test(expiration);
    return dateMatches;
}

function validateCVC(cvc) {
    const regEx = /[0-9]{3}/;
    const cvcMatches = regEx.test(cvc);
    return cvcMatches;
}


