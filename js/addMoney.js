document.getElementById('btn-add-money')
.addEventListener("click", function(event){
    event.preventDefault();
  const addMoney = getInputValueById('input-add-money');
  const pinNumber = getInputValueById('pin-number');
  console.log(addMoney, pinNumber);
  if(pinNumber === 1234){
    const balance = getTextFieldValuById('account-balance');
    console.log(addMoney, balance);
  }
  else{
    alert('Faild to add money. Please try again');
  }
})