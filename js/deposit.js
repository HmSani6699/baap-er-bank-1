function getInputValue(inputFiledId) {
    let depositInputFiled = document.getElementById(inputFiledId);
    let depositInputFiledValueString = depositInputFiled.value;
    let depositInputFiledValue = parseFloat(depositInputFiledValueString);
    depositInputFiled.value = '';
    return depositInputFiledValue;
}

function getElementBalance(element) {
    const depositElement = document.getElementById(element);
    const depositElementValueString = depositElement.innerText;
    const depositElementValue = parseFloat(depositElementValueString);
    return depositElementValue;
}

function setAmount(elementId, num) {
    document.getElementById(elementId).innerText = num;
}


//step 1. add event handler to the deposit button
document.getElementById('deposit-btn').addEventListener('click', function () {

    //step 2. get the deposit input filed value
    const depositInputValue = getInputValue('deposit-field');

    if (isNaN(depositInputValue) || depositInputValue < 0) {
        return alert('please provide your number')
    }
    //step 3. get the previous deposit amount
    const depositAmountValue = getElementBalance('deposit-total');

    //step 4. set the new deposit amount
    const newDepositValue = depositAmountValue + depositInputValue;
    setAmount('deposit-total', newDepositValue);

    //step 5.
    const previousBalance = getElementBalance('balance-total');
    const newBalance = previousBalance + depositInputValue
    setAmount('balance-total', newBalance);

})
