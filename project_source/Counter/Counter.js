const counter = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

// initialize the count variable
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains('increase'))
        {
            count++;
        } else if (styles.contains('decrease'))
        {
            count--;
        } else {
            count = 0
        }

        if (count>0)
        {
            counter.style.color = "green";
        } 
        else if (count<0)
        {
            counter.style.color = "red";
        }
        else if (count===0)
        {
            counter.style.color = "grey";
        }
        counter.textContent = count;
    })
})

// function inc(){
//     document.getElementsByClassName("btn")[0].style.color = "rgb(0, 128, 0, 0.9)";
//     document.getElementsByClassName("btn")[0].style.backgroundColor = "antiquewhite";
// }
// function dec(){
//     document.getElementsByClassName("btn")[2].style.color = "red";
//     document.getElementsByClassName("btn")[2].style.backgroundColor = "antiquewhite";
// }
// function res(){
//     document.getElementsByClassName("btn")[1].style.color = "grey";
//     document.getElementsByClassName("btn")[1].style.backgroundColor = "antiquewhite";
// }

// function onmsovr(){
//     document.getElementsByClassName("btn")[0].style.color = "antiquewhite";
//     document.getElementsByClassName("btn")[0].style.backgroundColor = "rgb(0, 128, 0, 0.9)";
    
//     document.getElementsByClassName("btn")[2].style.color = "antiquewhite";
//     document.getElementsByClassName("btn")[2].style.backgroundColor = "red";
    
//     document.getElementsByClassName("btn")[1].style.color = "antiquewhite";
//     document.getElementsByClassName("btn")[1].style.backgroundColor = "grey";
// }