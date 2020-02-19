const total = document.getElementById("total");
const image = document.getElementById("diceImage");
const button = document.getElementById("button");
const newgame = document.getElementById("newGame");
let sum = 0;

//generating number when button is clicked and adding to total
button.addEventListener("click", () =>{
    let number = Math.floor(Math.random() * 6) +1;
    image.setAttribute('src',`./img/dice${number}.png`);
    sum += number;
    total.innerText = `Total score: ${sum}`;
})