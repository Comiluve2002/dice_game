function letsPlayG(){
    document.location.href="play.html";
}

function letsPlay(){
    document.location.href="index.html";
}


var player1=localStorage.getItem("player1")? localStorage.getItem("player1"): "player 1";
var player2=localStorage.getItem("player2")? localStorage.getItem("player2"): "player 2";
document.querySelector(".Player1").innerHTML=player1;
document.querySelector(".Player2").innerHTML=player2;


// Function to change the player's name
 function editNames() {


   name1 = prompt("Change Player 1 name");
   
  localStorage.setItem("player1", name1);

   name2 = prompt("Change player 2 name");

   localStorage.setItem("player2", name2);

              
}

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML =   `${player1} wins 🚩`;
}
//if player 2 wins
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = `${player2} Wins! 🚩`;
}

//if its a draw
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

function rollTheDice(){
    reload=location.reload("btnp");
}

