document.getElementById('withdraw-btn').addEventListener('click', function () {

    const withdrawInputAmount = getInputValue('withdraw-field');

    const withdrawAmountValue = elementAmount('withdraw-total');

    const balanceAmountValue = elementAmount('balance-total');

    if (withdrawInputAmount > balanceAmountValue || withdrawInputAmount < 0 || isNaN(withdrawInputAmount)) {
        return alert('please provide your number')
    }

    const newBalance = balanceAmountValue - withdrawInputAmount;
    setElementAmount('balance-total', newBalance);

    const newWithdrawAmount = withdrawAmountValue + withdrawInputAmount;
    setElementAmount('withdraw-total', newWithdrawAmount)
})