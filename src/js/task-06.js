const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener('blur', handleInputBlur);

function handleInputBlur (event) {
   console.dir(validationInput.getAttribute('data-length')) 

    if (event.target.value.length === Number( validationInput.getAttribute('data-length'))) {
        validationInput.classList.add("valid")
        validationInput.classList.remove("invalid")
        return;
    }
    validationInput.classList.add("invalid")
};
