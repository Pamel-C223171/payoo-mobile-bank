
const validPin = 1234;
const transactionData = [];

//----------------------toggle add money-------------------------------

document.getElementById('add-money-card').addEventListener('click', function(){
    document.getElementById('cashout-form').style.display = 'none'
    document.getElementById('add-money-form').style.display = 'block'
    document.getElementById('add-money-card').classList.remove('border-gray-300')
    document.getElementById('cashout-card').classList.add('border-gray-300')
    document.getElementById('add-money-card').classList.add('border-blue-300', 'bg-[#f4f5f7]')
    document.getElementById('cashout-card').classList.remove('border-blue-300', 'bg-[#f4f5f7]')
})

// ---------------------toggle cash out---------------------------------

document.getElementById('cashout-card').addEventListener('click', function(){
    document.getElementById('cashout-form').style.display = 'block'
    document.getElementById('add-money-form').style.display = 'none'
    document.getElementById('cashout-card').classList.remove('border-gray-300')
    document.getElementById('add-money-card').classList.add('border-gray-300')
    document.getElementById('cashout-card').classList.add('border-blue-300', 'bg-[#f4f5f7]')
    document.getElementById('add-money-card').classList.remove('border-blue-300', 'bg-[#f4f5f7]')
})


//--------------------add money----------------------------------------

document.getElementById('add-btn').addEventListener('click', function(e){
    e.preventDefault();
    // const bankAccountNumber = document.getElementById('bank-account-number').value
    // if()

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const bankSelect = document.getElementById('bank').value
    const bankAccountNumber = document.getElementById('bank-account-number').value

    const addAmount = parseInt(document.getElementById('add-amount').value)
    const addPin = parseInt(document.getElementById('add-pin').value)

    // console.log(availableBalance, bankSelect, bankAccountNumber, addAmount, addPin)

     if(bankAccountNumber.length < 11)
    {
        alert('invalid acc nmbr');
        return;
    }
     if(addAmount <= 0)
    {
        alert('invalid amount')
        return
    }
    if(validPin !== addPin)
    {
        alert('please enter valid pin')
        return
    }

    const newAvailableBalance = availableBalance + addAmount;
    // console.log(newAvailableBalance)
    document.getElementById('available-balance').innerText = newAvailableBalance

    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
    console.log(data)

})


//----------------------Cash Out-------------------------------

document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault();
    // const bankAccountNumber = document.getElementById('bank-account-number').value
    // if()

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const agentNumber = document.getElementById('agent-number').value

    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value)
    const withdrawPin = parseInt(document.getElementById('withdraw-pin').value)

    // console.log(availableBalance, bankSelect, bankAccountNumber, addAmount, addPin)

     if(agentNumber.length < 11)
    {
        alert('invalid agent nmbr');
        return;
    }
     if(withdrawAmount <= 0 || withdrawAmount > availableBalance)
    {
        alert('invalid amount')
        return
    }
    if(validPin !== withdrawPin)
    {
        alert('please enter valid pin')
        return
    }

    const newAvailableBalance = availableBalance - withdrawAmount;
    // console.log(newAvailableBalance)
    document.getElementById('available-balance').innerText = newAvailableBalance

    const data = {
        name:"Cash Out",
        date:new Date().toLocaleTimeString()
    }

    transactionData.push(data)
    console.log(transactionData)

})

//----------------------transfer-------------------------------

document.getElementById('transfer-btn').addEventListener('click', function(e){
    e.preventDefault();

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const userAccNumber = document.getElementById('user-acc-number').value

    const transferAmount = parseInt(document.getElementById('transfer-amount').value)
    const transferPin = parseInt(document.getElementById('transfer-pin').value)

    // console.log(availableBalance, bankSelect, bankAccountNumber, addAmount, addPin)

     if(userAccNumber.length < 11)
    {
        alert('invalid user acc nmbr');
        return;
    }
     if(transferAmount <= 0 || transferAmount > availableBalance)
    {
        alert('invalid amount')
        return
    }
    if(validPin !== transferPin)
    {
        alert('please enter valid pin')
        return
    }

    const newAvailableBalance = availableBalance - transferAmount;
    // console.log(newAvailableBalance)
    document.getElementById('available-balance').innerText = newAvailableBalance

})


//-----------------get bonus-----------------------------------

document.getElementById('bonus-btn').addEventListener('click', function(e){
    e.preventDefault();

    // const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    // const transferPin = parseInt(document.getElementById('transfer-pin').value)

    //  if(userAccNumber.length < 11)
    // {
    //     alert('invalid user acc nmbr');
    //     return;
    // }
    //  if(transferAmount <= 0 || transferAmount > availableBalance)
    // {
    //     alert('invalid amount')
    //     return
    // }
    // if(validPin !== transferPin)
    // {
    //     alert('please enter valid pin')
    //     return
    // }

    // const newAvailableBalance = availableBalance - transferAmount;
    // // console.log(newAvailableBalance)
    // document.getElementById('available-balance').innerText = newAvailableBalance

})


//-------------------pay bill-------------------------------------

document.getElementById('bill-btn').addEventListener('click', function(e){
    e.preventDefault();

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    const billSelect = document.getElementById('bill').value
    const billAccountNumber = document.getElementById('bill-account-number').value

    const billAmount = parseInt(document.getElementById('bill-amount').value)
    const billPin = parseInt(document.getElementById('bill-pin').value)

    // console.log(availableBalance, bankSelect, bankAccountNumber, addAmount, addPin)

     if(billAccountNumber.length < 11)
    {
        alert('invalid acc nmbr');
        return;
    }
     if(billAmount <= 0 || availableBalance < billAmount)
    {
        alert('invalid amount')
        return
    }
    if(validPin !== billPin)
    {
        alert('please enter valid pin')
        return
    }

    const newAvailableBalance = availableBalance - billAmount;
    // console.log(newAvailableBalance)
    document.getElementById('available-balance').innerText = newAvailableBalance

})

//-----------------transaction--------------------------------

document.getElementById('transaction-card').addEventListener('click', function(){
   
    const transactionForm = document.getElementById('transaction-form')
    transactionForm.innerText = ""

    for(const data of transactionData)
    {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-white rounded-2xl p-5 flex justify-between items-center">
                <div class="flex">
                    <div class="border-2 border-green-600 p-3 rounded-full bg-[#f4f5f7]">
                        <img class="" src="./assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-3">
                        <h2>${data.name}</h2>
                        <p>${data.date}</p>
                    </div>
                </div>

                <i class="fa-solid fa-ellipsis-vertical"></i>

            </div>
        `
        transactionForm.appendChild(div)
        

    }

    
})


{/* <div class="bg-white rounded-2xl p-5 flex justify-between items-center">
                <div class="flex">
                    <div class="border-2 border-green-600 p-3 rounded-full bg-[#f4f5f7]">
                        <img class="" src="./assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-3">
                        <h2>Add Money</h2>
                        <p>Today 1:44 AM</p>
                    </div>
                </div>

                <i class="fa-solid fa-ellipsis-vertical"></i>

            </div> */}