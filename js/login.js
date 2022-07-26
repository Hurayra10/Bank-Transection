document.getElementById('login-submit').addEventListener('click', function(){
    const emailField= document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passField =  document.getElementById('user-password');
    const userPass = passField.value;

    
    if(userEmail == 'hurayra@gmail.com' && userPass== 'secret'){
        window.location.href = 'banking.html'
    }else{
        alert('invalid email or password');
    }
})