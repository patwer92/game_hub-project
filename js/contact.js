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
    }

    if(validateContactEmail(contactEmail.value) === true) {
        contactEmailError.style.display = "none";
    } else {
        contactEmailError.style.display = "block";
    }

    if (checkLength(message.value, 9) === true) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }

    if (checkLength(contactName.value, 0) &&
        validateContactEmail(contactEmail.value) &&
        checkLength(contactMessage.value, 9)
    ) {
        alert("Your message has been successfully sent.");
    }
    

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