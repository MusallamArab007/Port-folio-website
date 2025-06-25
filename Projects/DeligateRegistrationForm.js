let nextDiv;
let arr1=[];
let arr2=[];
let arr3=[];
let arr4=[];
let number = document.getElementsByClassName("select");
let number1 = document.getElementById("select1");
// let next = document.getElementById("")

let i;


function registration(){
    for (i=1; i<=number1.value; i++)
    {
        document.getElementById("show_deligate_registration_form1").innerHTML += `<div id="input-div">
        <div class="h3">
            <h3 id="registration">Deligate - Registration Details - ${i}</h3>
            <p id="para1">* Please enter the details of the deligate that you wish to register</p>        
        </div>
    
        <div class="input select-div">
            <label for="">Solution</label><br>
            <select name="" id="selection" class="in">
                <option value="">Please Select...</option>
                <option value="Mr">Mr</option>
                <option value="Dr">Dr</option>
                <option value="Mrs">Mrs</option>
                <option value="Er">Er</option>
            </select>
        </div>
        <div class="input"><label class="label" for="">Deligate Firt Name</label><br><input type="text" class="in" id="fname${i}" placeholder="Enter First Name :"></div>
        <div class="input"><label class="label" for="">Deligate Last Name</label><br><input type="text" class="in" id="lname${i}" placeholder="Enter Last Name :"></div>
        <div class="input"><label class="label" for="">Deligate Email</label><br><input type="email" class="in" id="email${i}" placeholder="Enter Email-ID :"></div>
        <div class="input"><label class="label" for="">Deligate Telephone Number</label><br><input type="number" id="tphone${i}" class="in" placeholder="Enter Telephone Number :"></div>
        <div class="input"><label class="label" for="">Job Title</label><br><input type="text" class="in" id="job${i}" placeholder="Enter Job Title :"></div>
        <div class="input"><label class="label" for="">Deligate Passport Number</label><br><input type="text" id"passport${i}" class="in" placeholder="Enter Passport Number :"></div>

        <div class="h3"><h3>Product And Fees:</h3></div>
        
        <div><input class="label checkbox" id="one${i}" value="1" onchange="setPrice${i}(event)" type="checkbox"><label class="chck" for="one${i}">All Access (Deligate) </label><label class="usd1" for="">USD 5900</label></div> 
        <div><input class="label checkbox" id="two${i}" value="2" onchange="setPrice${i}(event)" type="checkbox"><label class="chck" for="two${i}">Stategic Conference (Deligate) </label><label class="usd2" for="">USD 5100</label></div> 
        <div><input class="label checkbox" id="three${i}" value="3" onchange="setPrice${i}(event)" type="checkbox"><label class="chck" for="three${i}">Technical Conference Pass - 4 days (Deligate) </label><label class="usd3" for="">USD 1858</label></div> 
        <div><input class="label checkbox" id="four${i}" value="4" onchange="setPrice${i}(event)" type="checkbox"><label class="chck" for="four${i}">Technical Conference Pass - 2 days (Deligate) </label><label class="usd4" for="">USD 1485</label></div> 
        <div><input class="label checkbox" id="five${i}" value="5" onchange="setPrice${i}(event)" type="checkbox"><label class="chck" for="five${i}">Downstream Technical Conference Pass (Deligate) </label><label class="usd5" for="">USD 1100</label></div> 
        <hr align="left">
    </div>`
    }
}



function setPrice1(event){
    if (event.target.checked == true)
    {
        arr1.push(event.target.value);
    }
    else 
    {
        arr1.pop(event.target.value);
    }
}
function setPrice2(event){
    if (event.target.checked == true)
    {
        arr2.push(event.target.value);
    }
    else 
    {
        arr2.pop(event.target.value);
    }
}
function setPrice3(event){
    if (event.target.checked == true)
    {
        arr3.push(event.target.value);
    }
    else 
    {
        arr3.pop(event.target.value);
    }
}
function setPrice4(event){
    if (event.target.checked == true)
    {
        arr4.push(event.target.value);
    }
    else 
    {
        arr4.pop(event.target.value);
    }
}

let priceArray=[];
function total(){
    let sum1 = 0;
    // console.log(arr1)
    for (i=0; i<arr1.length; i++)
    {
        sum1 = sum1 + Number(arr1[i]);
    }
    let pa = sum1;
    priceArray.push(pa);
    let sum2 = 0;
    for (i=0; i<arr2.length; i++)
    {
        sum2 = sum2 + Number(arr2[i]);
    }
    let pa2 = sum2;
    priceArray.push(pa2);
    let sum3 = 0;
    for (i=0; i<arr3.length; i++)
    {
        sum3 = sum3 + Number(arr3[i]);
    }
    let pa3 = sum3;
    priceArray.push(pa3);
    let sum4 = 0;
    for (i=0; i<arr4.length; i++)
    {
        sum4 = sum4 + Number(arr4[i]);
    }
    let pa4 = sum4;
    priceArray.push(pa4);
    // let total = sum1 + sum2 + sum3 + sum4;
    // console.log(total); 
    let total = 0;
    for (i=0; i<priceArray.length; i++)
    {
        total += priceArray[i];
    }
    // console.log(total);
    document.getElementById("showtotal").innerHTML = `
    The Grand Total is : ${total}`
}




function nextbtn(){
    nextDiv = document.getElementById("next_button_form");
        nextDiv.innerHTML = `
        <hr align="left">
    <div class="mainDiv">
        <div class="h3"><h3>Company Information</h3></div>
        <div class="input">
            <label class="label" for="">Company Name </label><input class="in" id="cmp-name" placeholder="Enter Company Name" type="text">
        </div>
        <div class="input">
            <label class="label" for="">Street </label><input class="in" id="strt-name" placeholder="Enter Street" type="text">
        </div>
        <div class="input">
            <label class="label" for="">Town/City </label><input class="in" id="city-name" placeholder="Town/City" type="text">
        </div>
        <div class="input">
            <label class="label" for="">Country </label><input class="in" id="country-name" placeholder="Enter Country" type="text">
        </div>
        <div class="input">
            <label class="label" for="">ZipCode </label><input class="in" id="zipcode" placeholder="Ente Zipcode" type="text">
        </div>
        <div class="input">
            <label class="label" for="">State </label><br><input class="in" id="state" placeholder="Enter State" type="text">
        </div>
        <div class="h3"><h3>Billing Contact Info</h3></div>
        <div class="input select-div">
            <label class="label" for="">Salutation</label>
            <select name="" id="" class="in">
                <option value="">Please select...</option>
                <option value="">Mr</option>
                <option value="">Dr</option>
                <option value="">Mrs</option>
                <option value="">Er</option>
            </select>
        </div>
        <div class="input"><label class="label" for="">First Name</label><input placeholder="Enter First Name" class="in" type="text" name="" id=""></div>
        <div class="input"><label class="label" for="">Last Name</label><input placeholder="Enter Last Name" type="text" class="in" name="" id=""></div>
        <div class="input"><label class="label mail" for="">Email</label><br><input placeholder="Enter Email-Id" type="email" class="in" name="" id=""></div>
        <div class="input"><label class="label" for="">Telephone</label><input type="text" placeholder="Enter Mobile Number" class="in" name="" id=""></div>
        <div><h3>VAT Registered</h3></div>
        <div id="radioDiv"><input type="radio" value="Yes" name="radio" id="yes"><label for="yes">Yes</label></div>
        <div id="radioDiv"><input type="radio" value="No" name="radio" id="no"><label for="no">No</label></div>
    </div>`
}


var firstName = document.getElementById("fname'${i}.value'");
var lastName = document.getElementById("lname");
var email = document.getElementById("email");
var Telephone = document.getElementById("tphone");
var job = document.getElementById("job");
var passport = document.getElementById("passport");
let j;
var select = doc.getElementById("selection");

function showbtn(){
    m3 = document.getElementById("show_button");

    for (j=1; j<=number1.value; j++)
    {
        m3.innerHTML += `
        
        <div class="tableDiv">
            <table class="table"  style="text-align: left;" border="1" cellspacing="0" width="900px" cellpadding="8px">
                <tr><th colspan="3"> No of Delegate = ${j}</th></tr>
                <tr><th colspan="3" id="delegate"> Delegate</th></tr>
                <tr>
                    <th>Solution</th>
                    <th>Deligate First Name</th>
                    <th>Deligate Last Name</th>
                </tr>
                <tr>
                    <td>${select}</td>
                    <td>${firstName}</td>
                    <td>${lastName}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <th>Delagate Telephone</th>
                    <th>Delegate Job Title</th>
                </tr>
                <tr>
                    <td>${email}</td>
                    <td>${Telephone}</td>
                    <td>${job}</td>
                </tr>
                <tr>
                    <th>Delegate Passport Number</th>
                    <td colspan="2">${passport}</td>
                </tr>
                <tr>
                    <th></th>
                    <td colspan="2"></td>
                </tr>
                <tr>
                    <th>Product And Fees</th>
                    <td colspan="2">${total}</td>
                </tr>
                <tr>
                    <th></th>
                    <td colspan="2"></td>
                </tr>
            </table>

            <div class="summary">
                <table id="table2" border="1" cellspacing="0" cellpadding="10px" width="300px">
                    <tr><th>PURCHASE SUMMARY</th></tr>
                    <tr><td><label for="" style="text-decoration-line: underline;">Total: ${total}</label></td></tr>
                </table>
            </div>
        </div>
        
        `
    }







    // m3.innerHTML = `
//     <div class="tableDiv">
//     <table class="table"  style="text-align: left;" border="1" cellspacing="0" width="1000px" cellpadding="20px">
//         <tr><th colspan="3"> No of Delegate = 1</th></tr>
//         <tr><th colspan="3" id="delegate"> Delegate</th></tr>
//         <tr>
//             <th>Solution</th>
//             <th>Deligate First Name</th>
//             <th>Deligate Last Name</th>
//         </tr>
//         <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>
//         <tr>
//             <th>Email</th>
//             <th>Delagate Telephone</th>
//             <th>Delegate Job Title</th>
//         </tr>
//         <tr>
//             <td></td>
//             <td></td>
//             <td></td>
//         </tr>
//         <tr>
//             <th>Delegate Password Number</th>
//             <td colspan="2"></td>
//         </tr>
//         <tr>
//             <th></th>
//             <td colspan="2"></td>
//         </tr>
//         <tr>
//             <th>Product And Fees</th>
//             <td colspan="2"></td>
//         </tr>
//         <tr>
//             <th></th>
//             <td colspan="2"></td>
//         </tr>
//     </table>

//     <div class="summary">
//         <table id="table2" border="1" cellspacing="0" cellpadding="10px" width="300px">
//             <tr><th>PURCHASE SUMMARY</th></tr>
//             <tr><td><label for="" style="text-decoration-line: underline;">Total: </label></td></tr>
//         </table>
//     </div>
// </div>
//     `
}
