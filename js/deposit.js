document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInputValue = getInputValue('deposit-field');

    if (isNaN(depositInputValue) || depositInputValue < 0) {
        return alert('please provide your number')
    }

    const depositAmountValue = elementAmount('deposit-total');

    const newDepositValue = depositAmountValue + depositInputValue;
    setElementAmount('deposit-total', newDepositValue);

    const previousBalance = elementAmount('balance-total');
    const newBalance = previousBalance + depositInputValue
    setElementAmount('balance-total', newBalance);

})
