var scores,
  roundScore,
  activePlayer,
  dice,
  gamePlaying = true;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").innerText = "0";
document.getElementById("score-1").innerText = "0";
document.getElementById("current-0").innerText = "0";
document.getElementById("current-1").innerText = "0";

// Code for Button
// This is for the
var lastdice;
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // add the random number method
    dice = Math.floor(Math.random() * 6) + 1;
    // display the image using when change the dice value
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";
    //Update the round score if the rolled number is not a 1
    // IF the current value and last dice value both will be 6 then current score will be 0
    if (dice === 6 && lastdice === 6) {
      //   console.log("Captured");
      // Player losses the score
      scores[activePlayer] = 0;
      // Update the UI of current score
      document.querySelector("#score-" + activePlayer).textContent = "0";
    } else if (dice !== 1) {
      // Add the score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Next Player
      nextPlayer();
    }
    lastdice = dice;
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

    // Next Player
    if (scores[activePlayer] >= 100) {
      // console.log("You Win");
      document.querySelector("#name-" + activePlayer).textContent = "winner!";
      document.querySelector(".dice").style.display = "none";
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

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", function () {
  init();
});

// THis is for New game
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").innerText = "0";
  document.getElementById("score-1").innerText = "0";

  document.getElementById("current-0").innerText = "0";
  document.getElementById("current-1").innerText = "0";

  document.getElementById("name-0").innerText = "Player 1";
  document.getElementById("name-1").innerText = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
