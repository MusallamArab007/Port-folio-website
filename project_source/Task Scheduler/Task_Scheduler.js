// #1 First made by me

// const { createElement } = require("react");

// taskName = document.getElementById("TaskName");
// taskDate = document.getElementById("TaskDate");
// taskselect = document.getElementById("TaskSelect");
// addtask = document.getElementById("addTask");
// editbtn = document.getElementById("editbtn");
// deletebtn = document.getElementById("deletebtn");
// addText = document.getElementById("add-text");
// display = document.getElementById("display");
// datespan = document.getElementById("datespan");


// addtask.addEventListener("click", change);

// var para1 = document.createElement("p");
// var addTxt = document.
// // var note = document.createTextNode("Welcome to Musallam's webpage");
// // para1.innerHTML = "Musallam arab";
// para1.append(note);



// function change(){
//     alert("Working");
//     console.log(para1)
//     console.log(note)
//     display.innerHTML += `
//                 <p id="add-text">sdfdd</p>
//                 <p id="datespan">dfdf</p>
//                 <button class="btn btn-warning" id="editbtn">Edit</button>
//                 <button class="btn btn-danger" id="deletebtn">Delete</button>`;

//     addText.innerHTML = `${taskName.value}`;
//     datespan.innerHTML = `${taskDate.value}`;
//     // display.style.display += "block";
// }

// deletebtn.addEventListener("click", deleteItem);

// function deleteItem(){
//     alert("Delete is working");
//     // addText.value = " ";
//     addText.remove();
//     datespan.remove();
// }



// #2 made by chatgpt


// Get elements
// let taskName = document.getElementById("TaskName");
// let taskDate = document.getElementById("TaskDate");
// let taskselect = document.getElementById("TaskSelect");
// let addtask = document.getElementById("addTask");
// let display = document.getElementById("display");

// // Event listener for Add Task
// addtask.addEventListener("click", addTask);

// // Function to add a task
// function addTask() {
//   // Validation
//   if (!taskName.value.trim()) {
//     alert("Please enter a task name!");
//     return;
//   }
//   if (!taskDate.value) {
//     alert("Please select a date!");
//     return;
//   }

//   // Create elements dynamically
//   const taskDiv = document.createElement("div");
//   taskDiv.classList.add("task-item", "border", "p-2", "mb-2", "bg-light");

//   const namePara = document.createElement("p");
//   namePara.textContent = `${taskName.value}`;

//   const datePara = document.createElement("p");
//   datePara.textContent = `${taskDate.value}`;

//   const editBtn = document.createElement("button");
//   editBtn.textContent = "Edit";
//   editBtn.classList.add("btn", "btn-warning", "btn-sm", "me-2");

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "Delete";
//   deleteBtn.classList.add("btn", "btn-danger", "btn-sm");

//   // Append everything
//   taskDiv.appendChild(namePara);
//   taskDiv.appendChild(datePara);
//   taskDiv.appendChild(editBtn);
//   taskDiv.appendChild(deleteBtn);
//   display.appendChild(taskDiv);

//   // Add event listeners
//   deleteBtn.addEventListener("click", () => {
//     taskDiv.remove();
//   });

//   editBtn.addEventListener("click", () => {
//     taskName.value = namePara.textContent.replace("", "");
//     taskDate.value = datePara.textContent.replace("", "");
//     taskDiv.remove();
//   });

//   // Clear inputs
//   taskName.value = "";
//   taskDate.value = "";
// }


// #3 made by chatGpt

let taskName = document.getElementById("TaskName");
let taskDate = document.getElementById("TaskDate");
let taskselect = document.getElementById("TaskSelect");
let addtask = document.getElementById("addTask");
let display = document.getElementById("display");

// Event listener for Add Task
addtask.addEventListener("click", addTask);

// Function to add a task
function addTask() {
  // Validation
  if (!taskName.value.trim()) {
    alert("Please enter a task name!");
    return;
  }
  if (!taskDate.value) {
    alert("Please select a date!");
    return;
  }
  if (!taskselect.value) {
    alert("Please select a category!");
    return;
  }

  // Create elements dynamically
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-item", "border", "p-2", "mb-2", "rounded");

  // Set background color based on priority
//   if (taskselect.value === "High") {
//     taskDiv.style.backgroundColor = "#f8d7da"; // light red
//     taskDiv.style.borderLeft = "5px solid red";
//   } else if (taskselect.value === "Medium") {
//     taskDiv.style.backgroundColor = "#fff3cd"; // light yellow
//     taskDiv.style.borderLeft = "5px solid orange";
//   } else if (taskselect.value === "Low") {
//     taskDiv.style.backgroundColor = "#d4edda"; // light green
//     taskDiv.style.borderLeft = "5px solid green";
//   }

  const namePara = document.createElement("p");
  namePara.textContent = ` ${taskName.value}`;

  const datePara = document.createElement("p");
  datePara.textContent = ` ${taskDate.value}`;

//   const categoryPara = document.createElement("p");
//   categoryPara.textContent = ` Priority: ${taskselect.value}`;

  if (taskselect.value == "High") {
    namePara.style.backgroundColor = "#f8d7da"; // light red
    datePara.style.backgroundColor = "#f8d7da"; // light red
    namePara.style.color = "red";
    datePara.style.color = "red";
  } else if (taskselect.value == "Medium") {
    namePara.style.backgroundColor = "#fff3cd"; // light yellow
    datePara.style.backgroundColor = "#fff3cd"; // light yellow
    namePara.style.color = "orange";
    datePara.style.color = "orange";
  } else if (taskselect.value == "Low") {
    namePara.style.backgroundColor = "#d4edda"; // light green
    datePara.style.backgroundColor = "#d4edda"; // light green
    namePara.style.color = "green";
    datePara.style.color = "green";
  }


  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("btn", "btn-warning", "btn-sm", "me-2");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("btn", "btn-danger", "btn-sm");

  // Append everything
  taskDiv.appendChild(namePara);
  taskDiv.appendChild(datePara);
//   taskDiv.appendChild(categoryPara);
  taskDiv.appendChild(editBtn);
  taskDiv.appendChild(deleteBtn);
  display.appendChild(taskDiv);

  // Add event listeners
  deleteBtn.addEventListener("click", () => {
    taskDiv.remove();
  });

  editBtn.addEventListener("click", () => {
    taskName.value = taskName.value = namePara.textContent.replace(" ", "");
    taskDate.value = datePara.textContent.replace(" ", "");
    taskDiv.remove();
  });

  // Clear inputs
  taskName.value = "";
  taskDate.value = "";
  taskselect.value = "";
}

