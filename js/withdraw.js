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

//step 1. add event handler to the withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {

    //step 2. get the input value
    const withdrawInputAmount = getInputValue('withdraw-field');

    //step 3. get the previous withdraw amount 
    const withdrawAmountValue = elementAmount('withdraw-total');

    //step 5. get the balance
    const balanceAmountValue = elementAmount('balance-total');

    if (withdrawInputAmount > balanceAmountValue || withdrawInputAmount < 0 || isNaN(withdrawInputAmount)) {
        return alert('please provide your number')
    }

    const newBalance = balanceAmountValue - withdrawInputAmount;
    setElementAmount('balance-total', newBalance);

    //step 4. set the new withdraw amount
    const newWithdrawAmount = withdrawAmountValue + withdrawInputAmount;
    setElementAmount('withdraw-total', newWithdrawAmount)
})