let noClickCount = 0;

const funnyMessages = [
    "Why do you do this to me? 😢",
    "Come on, give me a chance! 🤔",
    "Seriously? Again? 😂",
    "You're killing me here! 😭",
    "I thought we had something special! "
];

function showSecondPage() {
    hideAllPages();
    document.getElementById('secondPage').style.display = 'block';
}

function showThirdPage() {
    hideAllPages();
    document.getElementById('thirdPage').style.display = 'block';
}

function showSuccessPage() {
    hideAllPages();
    document.getElementById('successPage').style.display = 'block';
}

function showRetryPage() {
    hideAllPages();
    document.getElementById('retryPage').style.display = 'block';
    startCountdown();
}

function startCountdown() {
    let countdown = 3;
    const countdownElement = document.getElementById('countdown');
    const funnyMessageElement = document.getElementById('funnyMessage');
    
    funnyMessageElement.innerText = funnyMessages[noClickCount % funnyMessages.length];
    countdownElement.innerText = countdown;

    const interval = setInterval(() => {
        countdown--;
        countdownElement.innerText = countdown;
        if (countdown === 0) {
            clearInterval(interval);
            showSecondPageAgain();
        }
    }, 1000);

    noClickCount++;
}

function showSecondPageAgain() {
    hideAllPages();
    const secondPageText = document.getElementById('secondPageText');
    if (!secondPageText.innerText.includes('again')) {
        secondPageText.innerText += ' again';
    }
    document.getElementById('secondPage').style.display = 'block';
}

function hideAllPages() {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => {
        page.style.display = 'none';
    });
}
