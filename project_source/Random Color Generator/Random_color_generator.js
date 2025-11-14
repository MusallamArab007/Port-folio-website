const containerEl = document.querySelector(".container");
const btnEl = document.getElementById("btn");

// create 30 color boxes
for (let i = 0; i < 30; i++) {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-container");
    containerEl.appendChild(colorBox);
}

const colorContainerEls = document.querySelectorAll(".color-container");

// load colors initially
generateColors();

// button click → generate new colors
btnEl.addEventListener("click", generateColors);

function generateColors() {
    colorContainerEls.forEach((colorContainerEl) => {
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;
    });
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars[randomNum];
    }
    return colorCode;
}
