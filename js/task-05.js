const inputElement = document.querySelector('input#name-input');
const outputElement = document.querySelector('span#name-output');
const outputElContent = outputElement.textContent;

inputElement.addEventListener('input', (event) => {    
    let inputValidation = event.currentTarget.value > '' 
        ? outputElement.textContent = event.currentTarget.value 
        : outputElement.textContent = outputElContent;
    return inputValidation;
});