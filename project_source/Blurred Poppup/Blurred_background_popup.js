const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

const popupContainerEl = document.querySelector(".popup-container");

const closeIconeEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
    // const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // document.writeln("done");
    // alert("working");
    // window.location.assign("D:\Desktop\E-commerce_website\index.html");
});

closeIconeEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
});

const popup_btn = document.querySelector(".popup-btn");
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let inputEl = document.querySelector(".input");
popup_btn.addEventListener("click", () => {
    // alert("its working join btn clicked");
    if (regex.test(inputEl.value)){
        alert("working");
        window.location.href = "https://musallam-portfolio.vercel.app/";
    }
    else{
        alert("❌ Please enter a valid email");
    }
})