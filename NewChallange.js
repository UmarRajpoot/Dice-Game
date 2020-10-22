// Dice Game
//
var scores,
  roundScore,
  activePlayer,
  dice,
  gamePlaying = true;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

ComInitializer("dice-1", "score-0", "current-0");
ComInitializer("dice-2", "score-1", "current-1");

// Code for Button
// This is for the
var lastdice;
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // add the random number method
    dice1 = randomNum();
    dice2 = randomNum();

    // display the image using when change the dice value

    DisplayImage("dice-1", dice1);
    DisplayImage("dice-2", dice2);

    //Update the round score if the rolled number is not a 1
    // IF the current value and last dice value both will be 6 then current score will be 0
    if (dice1 !== 1 && dice2 !== 1) {
      // Add the score
      roundScore += dice1 + dice2;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Next Player
      nextPlayer();
    }
  }
});

//
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // Add current score to global
    scores[activePlayer] += roundScore;

    // update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    var input = document.querySelector(".final-score").value;
    var winningScore;
    if (input) {
      var winningScore = input;
    } else {
      winningScore = 100;
    }

    // Next Player Winner the player code
    if (scores[activePlayer] >= winningScore) {
      // console.log("You Win");
      document.querySelector("#name-" + activePlayer).textContent = "winner!";
      // None Display of the dice
      DisplayNone("dice-1");
      DisplayNone("dice-2");

      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});

// function for the next player

function nextPlayer() {
  // Next Player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  DisplayNone("dice-1");
  DisplayNone("dice-2");
}
// This button is represent the New Button on the top (New Game)
document.querySelector(".btn-new").addEventListener("click", function () {
  init();
});

// THis is for New game
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  // Initialize again for the New Game
  ComInitializer("dice-1", "score-0", "current-0");
  ComInitializer("dice-2", "score-1", "current-1");

  // put the type and player name
  PlayersName("name-0", "Player 1");
  PlayersName("name-1", "Player 2");

  remove(".player-0-panel", "winner");
  remove(".player-1-panel", "winner");
  remove(".player-0-panel", "active");
  remove(".player-1-panel", "active");

  document.querySelector(".player-0-panel").classList.add("active");
}

//                          Method For Avoid Duplication

//Component Initializer render the first view when game is at 0 position
function ComInitializer(diceValue, score, current) {
  document.getElementById(diceValue).style.display = "none";
  document.getElementById(score).innerText = "0";
  document.getElementById(current).innerText = "0";
}
// Back to New game initialize when some one wins the game
function remove(PpanelName, removeItem) {
  document.querySelector(PpanelName).classList.remove(removeItem);
}
// put name of the players
function PlayersName(PlayerType, playername) {
  document.getElementById(PlayerType).innerText = playername;
}

// Random Number Calculator
function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}
// display the image using when change the dice value
function DisplayImage(dice, ranDice) {
  document.getElementById(dice).style.display = "block";
  document.getElementById(dice).src = "./image/dice-" + ranDice + ".png";
}
//Display none
function DisplayNone(Ddice) {
  document.getElementById(Ddice).style.display = "none";
}
