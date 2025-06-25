var name = document.getElementById("username");
var povalue = document.getElementById("poamnt");
var repovalue = document.getElementById("again-poamt");
var paidAmount = document.getElementById("paid-amt");
var sts = document.getElementById("status");
var small = document.getElementsByClassName("small");
var vali = document.getElementById("vali");
var submit = document.getElementById("submit");

function getValidation(){
    var regex = /[0-9]/;
    var porecheck = regex.test(repovalue.value);
    let valid = regex.test(povalue.value);
    let padamnt = regex.test(paidAmount.value);

    if (document.getElementById("username").value.length <= 5 || document.getElementById("username").value.length >= 15)
    {
        document.getElementsByClassName("name")[0].style.border = "3px solid red";
        small[0].innerHTML = "Please Enter name between 5 to 15 charactors";
        small[0].style.visibility = "visible";
        small[0].style.color = "red";
        document.getElementsByClassName("c1")[1].style.visibility = "visible";
        document.getElementsByClassName("c1")[1].style.color = "red";
        document.getElementsByClassName("c1")[1].style.backgrondColor = "red";
    }
    else if (!valid)
    {   
        povalue.style.border = "3px solid red";
        document.getElementsByClassName("name")[0].style.border = "2px solid  rgb(36, 165, 36)";
        small[1].innerHTML = "Please enter number only";
        small[1].style.color = "red";
        small[1].style.visibility = "visible";
        small[0].style.visibility = "hidden";
        document.getElementsByClassName("c2")[1].style.visibility = "visible";
        document.getElementsByClassName("c2")[1].style.color = "red";
        document.getElementsByClassName("c2")[1].style.backgrondColor = "red";
        document.getElementsByClassName("c1")[0].style.visibility = "visible";
        document.getElementsByClassName("c1")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c1")[1].style.visibility = "hidden";
    }
    else if(!porecheck){
        povalue.style.border = "2px solid rgb(36, 165, 36)";
        document.getElementsByClassName("name")[0].style.border = "2px solid  rgb(36, 165, 36)";
        repovalue.style.border = "3px solid red";
        small[2].innerHTML = "Please enter number only";
        small[2].style.color = "red";
        small[2].style.visibility = "visible";
        small[1].style.visibility = "hidden";
        small[0].style.visibility = "hidden";
        document.getElementsByClassName("c3")[1].style.visibility = "visible";
        document.getElementsByClassName("c3")[1].style.color = "red";
        document.getElementsByClassName("c3")[1].style.backgrondColor = "red";
        document.getElementsByClassName("c2")[0].style.visibility = "visible";
        document.getElementsByClassName("c2")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c2")[1].style.visibility = "hidden";
        document.getElementsByClassName("c1")[0].style.visibility = "visible";
        document.getElementsByClassName("c1")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c1")[1].style.visibility = "hidden";
    }
    else if (repovalue.value != povalue.value)
    {
        document.getElementsByClassName("name")[0].style.border = "2px solid  rgb(36, 165, 36)";

        repovalue.style.border = "3px solid red";
        povalue.style.border = "2px solid  rgb(36, 165, 36)";
        small[2].innerHTML = "Please enter PO value as same as above";
        small[2].style.color = "red";
        small[2].style.visibility = "visible";
        small[1].style.visibility = "hidden";
        small[0].style.visibility = "hidden";
        document.getElementsByClassName("c3")[1].style.visibility = "visible";
        document.getElementsByClassName("c3")[1].style.color = "red";
        document.getElementsByClassName("c3")[0].style.visibility = "hidden";
        document.getElementsByClassName("c2")[0].style.visibility = "visible";
        document.getElementsByClassName("c2")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c2")[1].style.visibility = "hidden";
        document.getElementsByClassName("c1")[0].style.visibility = "visible";
        document.getElementsByClassName("c1")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c1")[1].style.visibility = "hidden";
    }
    else if (!padamnt){
        povalue.style.border = "2px solid rgb(36, 165, 36)";
        document.getElementsByClassName("name")[0].style.border = "2px solid  rgb(36, 165, 36)";
        repovalue.style.border = "2px solid rgb(36, 165, 36)";
        paidAmount.style.border = "3px solid red";
        small[3].innerHTML = "Please enter number only";
        small[3].style.color = "red";
        small[3].style.visibility = "visible";
        small[2].style.visibility = "hidden";
        small[1].style.visibility = "hidden";
        document.getElementsByClassName("c4")[1].style.visibility = "visible";
        document.getElementsByClassName("c4")[1].style.color = "red";
        document.getElementsByClassName("c4")[1].style.backgrondColor = "red";
        document.getElementsByClassName("c3")[0].style.visibility = "visible";
        document.getElementsByClassName("c3")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c3")[1].style.visibility = "hidden";
        document.getElementsByClassName("c2")[0].style.visibility = "visible";
        document.getElementsByClassName("c2")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c2")[1].style.visibility = "hidden";
        document.getElementsByClassName("c1")[0].style.visibility = "visible";
        document.getElementsByClassName("c1")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c1")[1].style.visibility = "hidden";
    }
    else if (paidAmount.value>repovalue.value){
        povalue.style.border = "2px solid rgb(36, 165, 36)";
        document.getElementsByClassName("name")[0].style.border = "2px solid  rgb(36, 165, 36)";
        repovalue.style.border = "2px solid rgb(36, 165, 36)";
        paidAmount.style.border = "3px solid red";
        small[3].innerHTML = "Paid Amount must be less than PO value";
        small[3].style.color = "red";
        small[3].style.visibility = "visible";
        small[2].style.visibility = "hidden";
        small[1].style.visibility = "hidden";
        document.getElementsByClassName("c4")[1].style.visibility = "visible";
        document.getElementsByClassName("c4")[1].style.color = "red";
        document.getElementsByClassName("c4")[1].style.backgrondColor = "red";
        document.getElementsByClassName("c3")[0].style.visibility = "visible";
        document.getElementsByClassName("c3")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c3")[1].style.visibility = "hidden";
        document.getElementsByClassName("c2")[0].style.visibility = "visible";
        document.getElementsByClassName("c2")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c2")[1].style.visibility = "hidden";
        document.getElementsByClassName("c1")[0].style.visibility = "visible";
        document.getElementsByClassName("c1")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c1")[1].style.visibility = "hidden";
    }
    else {
        var balance = povalue.value - paidAmount.value;
        // let bal = document.getElementById("#balance-amt").value += `${balance}`;
        console.log(balance);
        document.getElementsByClassName("name")[0].style.border = "2px solid  rgb(36, 165, 36)";
        povalue.style.border = "2px solid rgb(36, 165, 36)";
        repovalue.style.border = "2px solid rgb(36, 165, 36)";
        paidAmount.style.border = "2px solid rgb(36, 165, 36)";
        small[4].style.visibility = "hidden";
        small[3].style.visibility = "hidden";
        small[2].style.visibility = "hidden";
        small[1].style.visibility = "hidden";
        document.getElementsByClassName("c4")[0].style.visibility = "visible";
        document.getElementsByClassName("c4")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c4")[1].style.visibility = "hidden";
        document.getElementsByClassName("c3")[0].style.visibility = "visible";
        document.getElementsByClassName("c3")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c3")[1].style.visibility = "hidden";
        document.getElementsByClassName("c2")[0].style.visibility = "visible";
        document.getElementsByClassName("c2")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c2")[1].style.visibility = "hidden";
        document.getElementsByClassName("c1")[0].style.visibility = "visible";
        document.getElementsByClassName("c1")[0].style.color = "rgb(36, 165, 36)";
        document.getElementsByClassName("c1")[1].style.visibility = "hidden";
        sts.value= "Success";

        // if (sts.value == "Success")
        // {
        //     // alert("Validation Successful");
        // }
        
        
    }
}



// do you want to submit your reponse

document.querySelector("#vali").addEventListener("click", (event) => {
    event.preventDefault();
    getValidation();
})

function submission(){
    submit.addEventListener('click', ()=> {
        if (sts.value == "Success")
        {
            document.querySelector(".tbody").innerHTML += 
            `<tr>
                <td>${document.getElementById("username").value}</td>
                <td>${povalue.value}</td>
                <td>${paidAmount.value}</td>
                <td>Success</td>
            </tr>`

            document.querySelector("#form").reset();
            name.style.border = ""
            povalue.style.border = "";
            repovalue.style.border = "";
            paidAmount.style.border = "";
            small[4].style.visibility = "hidden";
            small[3].style.visibility = "hidden";
            small[2].style.visibility = "hidden";
            small[1].style.visibility = "hidden";
            document.getElementsByClassName("c4")[0].style.visibility = "hidden";
            document.getElementsByClassName("c4")[1].style.visibility = "hidden";
            document.getElementsByClassName("c3")[0].style.visibility = "hidden";
            document.getElementsByClassName("c3")[1].style.visibility = "hidden";
            document.getElementsByClassName("c2")[0].style.visibility = "hidden";
            document.getElementsByClassName("c2")[1].style.visibility = "hidden";
            document.getElementsByClassName("c1")[0].style.visibility = "hidden";
            document.getElementsByClassName("c1")[1].style.visibility = "hidden";
            sts.value= "Fail";
        }
        else{
            alert("sorry..!")
        }
    })
    
}

submit.addEventListener('click', (s)=>{
    s.preventDefault();
    submission();
})
submission();


// function focus(){
//     document.getElementsByClassName("input")[0].style.border="";
//     document.getElementsByClassName("input")[1].style.border="3px solid  rgb(5, 53, 53)";
//     document.getElementsByClassName("input")[2].style.border="3px solid  rgb(5, 53, 53)";
//     document.getElementsByClassName("input")[3].style.border="3px solid  rgb(5, 53, 53)";

//     // outline: 2px;
//     // outline-color: rgb(7, 7, 7);
//     // border: 3px solid rgb(5, 53, 53);
// }





