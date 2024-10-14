document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll(".box");
    let resetBtn = document.querySelector("#reset-btn");
    let winnerMessage = document.getElementById("winner-message");
    let turnO = true; // true means it's X's turn

    const winpatterns = [
        [0, 1, 2], // First row
        [3, 4, 5], // Second row
        [6, 7, 8], // Third row
        [0, 3, 6], // First column
        [1, 4, 7], // Second column
        [2, 5, 8], // Third column
        [0, 4, 8], // Diagonal 1
        [2, 4, 6], // Diagonal 2
    ];

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (!box.innerText) { // Only allow marking if the box is empty
                box.innerText = turnO ? "X" : "O"; // Alternate between X and O
                turnO = !turnO; // Switch turn
                checkWinner(); // Check if someone has won
            }
        });
    });

    const checkWinner = () => {
        for (let pattern of winpatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            // Check if all positions have the same value and are not empty
            if (pos1Val !== "" && pos1Val === pos2Val && pos1Val === pos3Val) {
                winnerMessage.innerText = `Winner: ${pos1Val}`; // Display winner
                winnerMessage.style.display = "block"; // Show the message
                winnerMessage.classList.add("burst"); // Add animation class
                return; // Exit the function once a winner is found
            }
        }
    };

    // Reset game
    resetBtn.addEventListener("click", () => {
        boxes.forEach((box) => {
            box.innerText = ""; // Clear all boxes
        });
        turnO = true; // Reset the turn to X
        winnerMessage.innerText = ""; // Clear winner message
        winnerMessage.style.display = "none"; // Hide the message
        winnerMessage.classList.remove("burst"); // Remove animation class
    });
});


