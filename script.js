const total = document.getElementById("total");
const image = document.getElementById("diceImage");
const button = document.getElementById("button");
const newgame = document.getElementById("newGame");
let sum = 0;

//generating number when button is clicked and adding to total
button.addEventListener("click", () =>{
    let number = Math.floor(Math.random() * 6) +1;
    image.setAttribute('src',`./img/dice-${number}.png`);
    sum += number;
    if (number == 1){
        total.innerText = "You lose!";
        newgame.style.display = ""
        button.style.display = "none"
    }
    else if (sum <20){
        total.innerText = `Total score: ${sum}`;
    }
    else{
        total.innerText = "Winner!!"
        newgame.style.display = ""
        button.style.display = "none"
    }
})

newgame.addEventListener("click", () =>{
    sum = 0;
    total.innerText = "Total";
    newgame.style.display = "none";
    button.style.display = "";
    image.setAttribute('src',`./img/dice-1.png`);

})