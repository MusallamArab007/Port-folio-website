const kit = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");


kit.forEach(kit=>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    containerEl.appendChild(btnEl);
    btnEl.style.backgroundImage = "url(images/" + kit + ".jpg";
    const audioEl = document.createElement("audio");
    audioEl.src = "Sounds/" + kit + ".mp3";
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", ()=>{
        audioEl.play();
    });
    window.addEventListener("keydown", (event)=>{
        // console.log(event.key);
        if (event.key === kit.slice(0,1)){
            audioEl.play();
            btnEl.style.transform = "scale(.9)";
            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 100);
        }
    })

})