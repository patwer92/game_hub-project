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
    }

    if(validateNewsletterEmail(newsletterEmail.value) === true) {
        newsletterEmailError.style.display = "none";
    } else {
        newsletterEmailError.style.display = "block";
    }

    if (checkLength(newsletterName.value, 0) &&
        validateContactEmail(newsletterEmail.value) 
    ) {
        alert("Your message has been successfully sent.");
    }
    

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