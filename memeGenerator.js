"use strict";
//user input listener
const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    memefy();
    form.reset();
});
//primary function
function memefy() {

    //define input values
    const topText = document.getElementById("top").value.toUpperCase();
    const botText = document.getElementById("bot").value.toUpperCase();
    const memeUrl = document.getElementById("url").value;
    const memeSpace = document.getElementById("meme-div");

    //create the meme with the inputs
    const memeChild = document.createElement("div");
    memeChild.className = "meme-child";
    memeChild.style.backgroundImage = `url(${memeUrl})`;
    const memeTopText = document.createElement("p");
    memeTopText.innerText = topText;
    const memeBotText = document.createElement("p");
    memeBotText.innerText = botText;

    //create delete button
    const delButton = document.createElement("button");
    delButton.className = "del-button";
    delButton.textContent = 'delete';
    const delDiv = document.createElement("div");
    delDiv.className = "del-div";
    delButton.addEventListener("click", () => {
        memeAndDeleteDiv.remove();
    })

    //put it all together
    const memeAndDeleteDiv = document.createElement("div");
    memeAndDeleteDiv.className = "meme-and-del";
    delDiv.appendChild(delButton);

    memeChild.appendChild(memeTopText);
    memeChild.appendChild(memeBotText);

    memeAndDeleteDiv.appendChild(memeChild);
    memeAndDeleteDiv.appendChild(delDiv);

    memeSpace.appendChild(memeAndDeleteDiv);


}