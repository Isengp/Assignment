let email = document.getElementById("email");
let regexp1 = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,5})(.[a-z]{2,4})?$/;
let pass = document.getElementById("pass");
let regexp2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;

function validate(){
     if(regexp1.test(email.value) && regexp2.test(pass.value)){
         return true;
     }
     else{
         alert("Please enter valid Username/Email and Password");
         return false;
     }
 }
 
 

