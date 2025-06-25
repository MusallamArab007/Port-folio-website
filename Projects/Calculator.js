var pl = document.getElementsByClassName("pluss")[0];
var ans = document.getElementsByClassName("answer")[0];
var eq = document.getElementsByClassName("equals")[0];
var c = document.getElementsByClassName("change")[0];


function equal(){
    if (ans.value == "undefined"){
        alert("pls enter a number...");
        ans.value == "";
    }
}