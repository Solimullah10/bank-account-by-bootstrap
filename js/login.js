document.getElementById('login_btn').addEventListener('click', function () {
    const emailIpnut = document.getElementById('email-input');
    const userEmail = emailIpnut.value;
    console.log(userEmail);

    const passwordInput = document.getElementById('password-input');
    const userPassword = passwordInput.value;
    console.log(userPassword);

    if (userEmail == 'admin@gmail.com' && userPassword == '12345') {
        window.location = 'home.html'
    }
    else {
        window.location = '404.html'
    }
});