let nam = document.getElementById("nam");
let emal = document.getElementById("emal");
let regexp1 = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,4})?$/;
let checkEmail = document.getElementById("checkEmail");
let pwd = document.getElementById("pwd");
let checkPass = document.getElementById("checkPass");
let regexp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
let phone = document.getElementById("phone");
let regexp3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let cit = document.getElementById("cit");
let stat = document.getElementById("stat");

function validate(){
    if(nam.value!="" && regexp1.test(emal.value) && regexp2.test(pwd.value) && regexp3.test(phone.value) && cit.value!="" && stat.value!=""){
        return true;
    }
    else{
        alert("Please review the values entered. All fields are mandatory.");
        return false;
    }
}

function emailval(){ 
        if(regexp1.test(emal.value)){
            checkEmail.innerHTML = "Valid";
            checkEmail.style.color = "green";
        }
        else{
            checkEmail.innerHTML = "Invalid";
            checkEmail.style.color = "red";
        }
}

function strength(){    
        if(pwd.value.length>=7 && regexp2.test(pwd.value)){
            if (pwd.value.length>=7 && pwd.value.length<8){
                checkPass.innerHTML = "Poor";
                checkPass.style.color = "Red";
            }
            else if (pwd.value.length>=8 && pwd.value.length<9){
                checkPass.innerHTML = "Medium";
                checkPass.style.color = "Orange";
            }
            else if (pwd.value.length>=9){
                checkPass.innerHTML = "Strong";
                checkPass.style.color = "Green";
            }
        }
        else{
                checkPass.innerHTML = "Invalid";
                checkPass.style.color = "Red";
                checkPass.style.visibility = "visible";
            }
}

function phonenumber(){
    if(regexp3.test(phone.value)){
        return true;
    }
    else{
        alert("Invalid Entry! Please provide number in the format mentioned below.");
    }
}

