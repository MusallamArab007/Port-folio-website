var user = document.querySelector("#usr");
var pass = document.querySelector("#pwd");

var checkbox = document.getElementsByClassName("checkbox");
// var checkbox1 = document.querySelector(".checkbox1")
// var checkbox2 = document.querySelector(".checkbox2")

console.log(pass)
console.log(user)
console.log(checkbox) 
var user_name = prompt("Enter Your UserName: ");
var user_password = prompt("Enter Your UserPassword: ");
function check(){
    if ((user.value == user_name && pass.value == user_password) && (checkbox[0].checked == true && checkbox[1].checked == true))
    {
        alert("Successful..!")
        window.location.assign("CodeGenerator2.html");
        user_name.value = "";
        user_password.value = "";
        // user_name.focus();
        // check.checked = false;
    }
        
    else{
        alert("Something is went wrong.. Pls Try again");
        user.value = "";
        pass.value = "";
        user.focus();
    }
}