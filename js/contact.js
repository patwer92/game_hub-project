const contactForm = document.querySelector("#contactForm");

const contactName = document.querySelector("#contactName");
const contactNameError = document.querySelector("#contactNameError");

const contactEmail = document.querySelector("#contactEmail");
const contactEmailError = document.querySelector("#contactEmailError");

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");




function validateContactForm(event) {

    event.preventDefault();

    if (checkLength(contactName.value, 0) === true) {
        contactNameError.style.display = "none";
    } else {
        contactNameError.style.display = "block";
        return false;
    }

    if(validateContactEmail(contactEmail.value) === true) {
        contactEmailError.style.display = "none";
    } else {
        contactEmailError.style.display = "block";
        return false;
    }

    if (checkLength(message.value, 9) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        return false;
    }

    alert("Your message has been successfully sent.");
    return true;
    

}

contactForm.addEventListener("submit", validateContactForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateContactEmail(contactEmail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(contactEmail);
    return patternMatches;

}