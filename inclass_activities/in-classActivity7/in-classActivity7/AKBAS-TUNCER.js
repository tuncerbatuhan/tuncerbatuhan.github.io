let clickCount = 0;
let currentLevel = 1;
let moveDelay = 500;
let isButtonMoving = false;
let isGameFinished = false;

// Move button to a random position on screen
function relocateButton() {
    const button = document.getElementById('movingButton');
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}

// Update the level and click counter on screen
function updateDisplay() {
    document.getElementById('level').innerText = currentLevel;
    document.getElementById('clicks').innerText = clickCount;
}

// Handle click event and level progression
function onButtonClick() {
    if (isGameFinished) return;

    clickCount++;
    updateDisplay();

    if (clickCount >= 3) {
        if (currentLevel >= 6) {
            alert("🎉 You completed the game! Congratulations!");
            isGameFinished = true;

            const button = document.getElementById('movingButton');
            button.disabled = true;
            button.innerText = "Game Over";
            return;
        }

        currentLevel++;
        clickCount = 0;
        moveDelay = Math.max(0, moveDelay - 100);

        alert("Level up! You're now on Level " + currentLevel);
        updateDisplay();
    }
}

// Initialize game when page loads
window.onload = function () {
    const button = document.getElementById('movingButton');

    button.addEventListener('mouseover', () => {
        if (!isButtonMoving && !isGameFinished) {
            isButtonMoving = true;
            setTimeout(() => {
                relocateButton();
                isButtonMoving = false;
            }, moveDelay);
        }
    });

    button.addEventListener('click', onButtonClick);

    relocateButton();
    updateDisplay();
};
