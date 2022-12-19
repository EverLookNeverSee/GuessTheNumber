'use strict';

// Generating random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}


document.querySelector(".check").addEventListener(
    "click", function() {
        const guess = Number(document.querySelector(".guess").value);

        // When there is no input
        if (!guess) {
            displayMessage("No Number!");

            // When player wins
        } else if (guess === secretNumber) {
            displayMessage("Correct number");
            document.querySelector("body").style.backgroundColor = "#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").textContent = String(secretNumber);
            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = String(highScore);
            }

            // When guss is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
                score--;
                document.querySelector(".score").textContent = String(score);
            } else {
                document.querySelector(".message").textContent = "You lost the game!";
                document.querySelector(".score").textContent = String(0);
            }
        }
    }
)

document.querySelector(".again").addEventListener(
    "click", function() {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector(".score").textContent = String(score);
        displayMessage("Start guessing...");
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value = "";
    }
)
