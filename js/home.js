document.getElementById('deposit-btn').addEventListener('click', function () {
    // deposit add system
    const depositAmount = document.getElementById('diposit-amount');
    const newDepositText = depositAmount.value;
    const newDeposit = parseFloat(newDepositText);
    // deposit update
    const previousDepositAmount = document.getElementById('deposit-balance');
    const previousDepositText = previousDepositAmount.innerText;
    const previousDeposit = parseFloat(previousDepositText);
    const totalDeposit = previousDeposit + newDeposit;
    previousDepositAmount.innerText = totalDeposit;

    // Balance update
    const previousBalance = document.getElementById('total-balance');
    const totalBalanceText = previousBalance.innerText;
    const totalBlance = parseFloat(totalBalanceText);
    const updateTotalBalance = newDeposit + totalBlance;
    previousBalance.innerText = updateTotalBalance;
    //clear input field
    depositAmount.value = '';
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // add withddraw 
    const newWidtdra = document.getElementById('withdraw-amount');
    const newWidtdraText = newWidtdra.value;
    const withdraw = parseFloat(newWidtdraText);
    // withdraw update
    const previousWithdraw = document.getElementById('withdraw-balance');
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawBalance = parseFloat(previousWithdrawText);
    previousWithdraw.innerText = previousWithdrawBalance + withdraw;
    // update balance
    const previousBalance = document.getElementById('total-balance');
    const totalBalanceText = previousBalance.innerText;
    const totalBlance = parseFloat(totalBalanceText);
    const updateTotalBalance = totalBlance - withdraw;
    previousBalance.innerText = updateTotalBalance;
    // clear input field
    newWidtdra.value = '';

})