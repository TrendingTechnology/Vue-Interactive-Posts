function onInputValidation(userEmail) {
    var validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (document.getElementById(userEmail)) {
        var emailValue = document.getElementById(userEmail).value;

    if (!validEmail.test(emailValue)) {
        document.getElementById('userEmail').style.border = "1px solid red";
    }
    else {
        document.getElementById('userEmail').style.border = "1px solid transparent";
    }
    }else{
        if (validEmail.test(userEmail)) {
            return true;
        }
        else {
            return false;
        }
    }
    return false;
}
