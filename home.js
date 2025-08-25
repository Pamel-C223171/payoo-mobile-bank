
const validPin = 1234;
const transactionData = [];

function handleToggle(id){
    const allForms = document.getElementsByClassName('all-form')

    for(const form of allForms)
    {
        form.style.display = 'none'
        // console.log(form)
    }

    document.getElementById(id).style.display = 'block'
}

function handleCardToggle(id){
    const allCards = document.getElementsByClassName('all-card')

    for(const card of allCards)
    {
        card.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        card.classList.add("border-gray-300")
        // console.log(form)
    }

    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}

//----------------------toggle add money-------------------------------

document.getElementById('add-money-card').addEventListener('click', function(){
    // document.getElementById('cashout-form').style.display = 'none'
    // document.getElementById('add-money-form').style.display = 'block'
    // document.getElementById('add-money-card').classList.remove('border-gray-300')
    // document.getElementById('cashout-card').classList.add('border-gray-300')
    // document.getElementById('add-money-card').classList.add('border-blue-300', 'bg-[#f4f5f7]')
    // document.getElementById('cashout-card').classList.remove('border-blue-300', 'bg-[#f4f5f7]')
    handleToggle('add-money-form')
    handleCardToggle('add-money-card')
})

// ---------------------toggle cash out---------------------------------

document.getElementById('cashout-card').addEventListener('click', function(){
    // document.getElementById('cashout-form').style.display = 'block'
    // document.getElementById('add-money-form').style.display = 'none'
    // document.getElementById('cashout-card').classList.remove('border-gray-300')
    // document.getElementById('add-money-card').classList.add('border-gray-300')
    // document.getElementById('cashout-card').classList.add('border-blue-300', 'bg-[#f4f5f7]')
    // document.getElementById('add-money-card').classList.remove('border-blue-300', 'bg-[#f4f5f7]')
    handleToggle('cashout-form')
    handleCardToggle('cashout-card')
})


//----------------------toggle transfer-------------------------------

document.getElementById('transfer-card').addEventListener('click', function(){
    // document.getElementById('cashout-form').style.display = 'none'
    // document.getElementById('add-money-form').style.display = 'block'
    // document.getElementById('add-money-card').classList.remove('border-gray-300')
    // document.getElementById('cashout-card').classList.add('border-gray-300')
    // document.getElementById('add-money-card').classList.add('border-blue-300', 'bg-[#f4f5f7]')
    // document.getElementById('cashout-card').classList.remove('border-blue-300', 'bg-[#f4f5f7]')
    handleToggle('transfer-form')
    handleCardToggle('transfer-card')
})


//----------------------toggle get bonus-------------------------------

document.getElementById('get-bonus-card').addEventListener('click', function(){
    // document.getElementById('cashout-form').style.display = 'none'
    // document.getElementById('add-money-form').style.display = 'block'
    // document.getElementById('add-money-card').classList.remove('border-gray-300')
    // document.getElementById('cashout-card').classList.add('border-gray-300')
    // document.getElementById('add-money-card').classList.add('border-blue-300', 'bg-[#f4f5f7]')
    // document.getElementById('cashout-card').classList.remove('border-blue-300', 'bg-[#f4f5f7]')
    handleToggle('bonus-form')
    handleCardToggle('get-bonus-card')
})


//----------------------toggle pay bill-------------------------------

document.getElementById('pay-bill-card').addEventListener('click', function(){
    // document.getElementById('cashout-form').style.display = 'none'
    // document.getElementById('add-money-form').style.display = 'block'
    // document.getElementById('add-money-card').classList.remove('border-gray-300')
    // document.getElementById('cashout-card').classList.add('border-gray-300')
    // document.getElementById('add-money-card').classList.add('border-blue-300', 'bg-[#f4f5f7]')
    // document.getElementById('cashout-card').classList.remove('border-blue-300', 'bg-[#f4f5f7]')
    handleToggle('pay-bill-form')
    handleCardToggle('pay-bill-card')
})


//----------------------toggle transaction-------------------------------

document.getElementById('transaction-card').addEventListener('click', function(){
    // document.getElementById('cashout-form').style.display = 'none'
    // document.getElementById('add-money-form').style.display = 'block'
    // document.getElementById('add-money-card').classList.remove('border-gray-300')
    // document.getElementById('cashout-card').classList.add('border-gray-300')
    // document.getElementById('add-money-card').classList.add('border-blue-300', 'bg-[#f4f5f7]')
    // document.getElementById('cashout-card').classList.remove('border-blue-300', 'bg-[#f4f5f7]')
    handleToggle('transaction-form')
    handleCardToggle('transaction-card')
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


//--------------------log out btn---------------------------------

document.getElementById('logout-btn').addEventListener('click', function(e){
    e.preventDefault();
    window.location.href = "./index.html";

})