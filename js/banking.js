document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
   
    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText =  depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotl = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotl;
    
    //update balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
   

    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

     //clear the deposit input field
     depositInput.value = '';
    
})


//handle wothdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
   
    //update withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText =  withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //clean withdraw input
    withdrawInput.value = '';


    //update balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
   

    const newBalanceTotal = previousBalanceAmount -  newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;
})
























