const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();
    console.log("The form was submitted");
    const firstNameValue = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}

function checkInputLength(value) {
    const trimmedValue = value.trim();
    if (trimmedValue.length >= 2) {
        console.log("value is valid")
        return true;
    } else {
        console.log("value is not valid")
        return false;
    }
}