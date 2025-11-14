// var u_name = document.getElementById("name");
// var email = document.getElementById("email");
// var account = document.getElementById("Account");
// var select = document.getElementById("select");
// var submit = document.getElementById("submit_btn");
// var tablebody = document.getElementById("tbody1");
// var tablebody2 = document.getElementsByClassName("tbody2")[0];

// // console.log(tablebody2.value);

// // submit.document.addEventListener('click', update_table);

// console.log(select);

// function update_table(){

//     if (!u_name.value || !email.value )
//     {
//         alert("Pls fill the form...");
//     }
//     else
//         {
//             tablebody.innerHTML += `
//                             <tr>
//                                 <td>${u_name.value}</td>
//                                 <td>${email.value}</td>
//                                 <td>${account.value}</td>
//                             </tr>`;
        
//                             u_name.value = "";
//                             email.value = "";
//                             account.value = "";
        
        
//             tablebody2.innerHTML += `
//                             <tr>
//                                 <td>${u_name.value}</td>
//                                 <td>${email.value}</td>
//                                 <td>${account.value}</td>
//                             </tr>
//                             `;
//         // if (select.value)
//     }
    


// }




// new js 

var u_name = document.getElementById("name");
var email = document.getElementById("email");
var account = document.getElementById("Account");
var select = document.getElementById("select");
var submit = document.getElementById("submit_btn");
var tablebody1 = document.getElementById("tbody1");
var tablebody2 = document.getElementsByClassName("tbody2")[0];
var accountDiv = account.parentElement.parentElement; // to show/hide account field

// Show or hide account input based on customer type
select.addEventListener("change", () => {
  if (select.value === "Existing") {
    accountDiv.style.display = "block";
  } else {
    accountDiv.style.display = "none";
    account.value = "";
  }
});

// Main update function
function update_table(event) {
  event.preventDefault();
  // Step-by-step validation
  if (!u_name.value.trim()) {
    alert("Please enter your name.");
    u_name.focus();
    return;
  }

  if (!email.value.trim()) {
    alert("Please enter your email.");
    email.focus();
    return;
  }

  if (select.value === "") {
    alert("Please select a customer type.");
    select.focus();
    return;
  }

  if (select.value === "Existing" && !account.value.trim()) {
    alert("Please enter account number for existing customers.");
    account.focus();
    return;
  }

  // Add data to the correct table
  if (select.value === "Existing") {
    tablebody1.innerHTML += `
      <tr>
        <td>${u_name.value}</td>
        <td>${email.value}</td>
        <td>${account.value}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button></td>
      </tr>`;
  } else if (select.value === "New") {
    tablebody2.innerHTML += `
      <tr>
        <td>${u_name.value}</td>
        <td>${email.value}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button></td>
      </tr>`;
  }

  // Reset form
  u_name.value = "";
  email.value = "";
  account.value = "";
  select.value = "";
  accountDiv.style.display = "none";
}

// Attach event listener
submit.addEventListener("click", update_table);

// Delete row function
function deleteRow(btn) {
  btn.closest("tr").remove();
}
