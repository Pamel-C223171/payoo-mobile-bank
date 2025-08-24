document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault();
    // console.log('clicked')
    const mobileNumber = 12345678910;
    const digitPin = 1234;

    const userMobileNumber = parseInt(document.getElementById('login-number').value);
    const userPinNumber = parseInt(document.getElementById('login-pin').value);

    if(mobileNumber === userMobileNumber && digitPin === userPinNumber)
    {
        window.location.href = "./home.html";
    }
    else{
        alert('Invalid user Number or  Pin')
    }

})