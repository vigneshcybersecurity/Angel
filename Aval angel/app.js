const correctPassword = "1122"; // Set your password here
const birthday = new Date("December 11, 2024").getTime();

function checkPassword() {
    const input = document.getElementById("passwordInput").value;
    if (input === correctPassword) {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("countdown").style.display = "block";
        document.getElementById("surpriseSection").style.display = "block";
        updateCountdown();
    } else {
        alert("Incorrect password");
    }
}

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = birthday - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = `${days} days left until your birthday!`;
}

function showSurprise() {
    // Placeholder for Google Drive link
    const driveLink = 'https://your-google-drive-link';
    
    // If using Google Drive API or a specific method to fetch content:
    fetch(driveLink)
        .then(response => response.text())
        .then(data => {
            document.getElementById("surpriseMessage").innerHTML = "Surprise content from Drive will be displayed here.";
            document.getElementById("surpriseMessage").classList.add("show");
        })
        .catch(error => console.log("Error fetching surprise", error));
}

setInterval(updateCountdown, 1000);
