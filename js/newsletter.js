const newsletterForm = document.querySelector("#newsletterForm");

const newsletterName = document.querySelector("#newsletterName");
const newsletterNameError = document.querySelector("#newsletterNameError");

const newsletterEmail = document.querySelector("#newsletterEmail");
const newsletterEmailError = document.querySelector("#newsletterEmailError");




function validateNewsletterForm() {

    event.preventDefault();

    if (checkLength(newsletterName.value, 0) === true) {
        newsletterNameError.style.display = "none";
    } else {
        newsletterNameError.style.display = "block";
        return false;
    }

    if(validateNewsletterEmail(newsletterEmail.value) === true) {
        newsletterEmailError.style.display = "none";
    } else {
        newsletterEmailError.style.display = "block";
        return false;
    }

    alert("You are now signed up for our newsletter.");
    return true;
    

}

newsletterForm.addEventListener("submit", validateNewsletterForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateNewsletterEmail(newsletterEmail) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(newsletterEmail);
    return patternMatches;

}