const userChoiceDiv = document.getElementById('user-choice');
const computerChoiceDiv = document.getElementById('computer-choice');
const resultDiv = document.getElementById('result');
const rockButton = document.querySelector('.rock-button button');
const paperButton = document.querySelector('.paper-button button');
const scissorButton = document.querySelector('.scissor-button button');

// Function to generate a random choice for the computer
function generateComputerChoice() {
    const choices = ['fa-regular fa-hand-back-fist', 'fa-solid fa-toilet-paper', 'fa-regular fa-hand-scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to update the user's choice
function updateUserChoice(iconClass) {
    userChoiceDiv.innerHTML = `<i class="${iconClass}"></i>`;
}

// Function to update the computer's choice
function updateComputerChoice() {
    const computerIconClass = generateComputerChoice();
    computerChoiceDiv.innerHTML = `<i class="${computerIconClass}"></i>`;
    return computerIconClass;
}

// Function to determine the game result
function determineResult(userIconClass, computerIconClass) {
    if (userIconClass === computerIconClass) {
        return "Draw";
    } else if (
        (userIconClass === 'fa-solid fa-toilet-paper' && computerIconClass === 'fa-regular fa-hand-back-fist') ||
        (userIconClass === 'fa-regular fa-hand-scissors' && computerIconClass === 'fa-solid fa-toilet-paper') ||
        (userIconClass === 'fa-regular fa-hand-back-fist' && computerIconClass === 'fa-regular fa-hand-scissors')
    ) {
        return "You win";
    } else {
        return "You lose";
    }
}

// Event listeners for the buttons
rockButton.addEventListener('click', function() {
    const userIconClass = 'fa-regular fa-hand-back-fist';
    updateUserChoice(userIconClass);
    const computerIconClass = updateComputerChoice();
    const result = determineResult(userIconClass, computerIconClass);
    resultDiv.textContent = result;
});

paperButton.addEventListener('click', function() {
    const userIconClass = 'fa-solid fa-toilet-paper';
    updateUserChoice(userIconClass);
    const computerIconClass = updateComputerChoice();
    const result = determineResult(userIconClass, computerIconClass);
    resultDiv.textContent = result;
});

scissorButton.addEventListener('click', function() {
    const userIconClass = 'fa-regular fa-hand-scissors';
    updateUserChoice(userIconClass);
    const computerIconClass = updateComputerChoice();
    const result = determineResult(userIconClass, computerIconClass);
    resultDiv.textContent = result;
});