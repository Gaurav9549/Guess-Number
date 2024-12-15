const guessButton = document.querySelector("#guess");
const inputField = document.querySelector("input");
const reportArea = document.querySelector("#report");

let score = 0;
const randomNum = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100

guessButton.addEventListener("click", () => {
    const userInput = parseInt(inputField.value);
    score++;

    // Handle invalid input
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        reportArea.innerHTML += `<p style="color: red;">Invalid input. Please enter a number between 1 and 100.</p>`;
    } 
    // Handle guesses
    else if (userInput < randomNum) {
        reportArea.innerHTML += `<p style="color: blue;">Your Guess is Less than the Actual Number.</p>`;
    } 
    else if (userInput > randomNum) {
        reportArea.innerHTML += `<p style="color: blue;">Your guess is Higher than the Actual Number.</p>`;
    } 
    // Handle correct guess
    else if (userInput === randomNum) {
        reportArea.innerHTML += `<p style="color: green;">Congratulations! You guessed the correct number ${randomNum} in ${score} attempts.</p>`;

        if (score <= 5) {
            reportArea.innerHTML += `<p style="color: gold;">Feedback: You are a super genius!</p>`;
        } else {
            reportArea.innerHTML += `<p style="color: orange;">Feedback: Nice try... You can do better!</p>`;
        }

        // Disable the button after the correct guess
        guessButton.disabled = true;
    }

    // Scroll to the bottom of the report area
    reportArea.scrollTop = reportArea.scrollHeight;

    // Clear the input field for the next attempt
    inputField.value = "";
});
