document.getElementById("startButton").addEventListener("click", function() {
    let timeInput = document.getElementById("timeInput").value;
    let timerDisplay = document.getElementById("timerDisplay");

    let seconds = parseInt(timeInput);

    if (isNaN(seconds) || seconds < 1 || seconds > 60) {
        alert("Please enter a number between 1 and 60.");
        return;
    }

    let countdown = setInterval(function() {
        timerDisplay.textContent = `00:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (seconds <= 0) {
            clearInterval(countdown);
            alert("Your Time is up!!!");
            timerDisplay.textContent = "00:00";
        } else {
            seconds--;
        }
    }, 1000);
});