function getInputValue(inputId) {
    const inputFiled = document.getElementById(inputId);
    const inputValueString = inputFiled.value;
    const inputValue = parseFloat(inputValueString);
    inputFiled.value = '';
    return inputValue;
}

function elementAmount(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue
}

function setElementAmount(element, num) {
    document.getElementById(element).innerText = num
}
