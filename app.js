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
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    // add the random number method
    dice = Math.floor(Math.random() * 6) + 1;
    // display the image using when change the dice value
    var diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    if (dice !== 1) {
      // Add the score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      // Next Player

      nextPlayer();
    }
  } else {
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
    if (scores[activePlayer] >= 20) {
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
  // document.getElementById("current-0").textContent = "0";
  // document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", function () {
  init();
});

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

// dice = Math.floor(Math.random() * 6) + 1;

// const c = (document.querySelector(
//   "#current-" + activePlayer
// ).textContent = dice);
// // document.querySelector("#current-0").innerHTML = "<em>" + dice + "</em>";

// const x = document.querySelector("#score-0").textContent;
// // console.log(c);
