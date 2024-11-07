let currentProgress = 0;
let targetProgress = 75; // custom 
let animationInterval;

function animateProgress() {
    const progressCircle = document.getElementById('progressCircle');
    const progressText = document.getElementById('progressText');

    clearInterval(animationInterval);

    animationInterval = setInterval(() => {
        if (currentProgress < targetProgress) {
            currentProgress++;
        } else if (currentProgress > targetProgress) {
            currentProgress--;
        } else {
            clearInterval(animationInterval);
        }

        const angle = currentProgress * 3.6;

        progressCircle.style.background = `conic-gradient(#2aa4a2 ${angle}deg, #c3c3c3 0deg)`;
        progressText.textContent = `${currentProgress}%`;
    }, 10);
}

animateProgress();