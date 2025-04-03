const dynamicText = document.getElementById("dynamic-text");

if (!dynamicText) {
    console.error("Element with id 'dynamic-text' not found!");
} else {
    const phrases = ["I'm Dino Barton!", "I'm a web developer!", "I'm a tech enthusiast!", "Im an aspiring entrepreneur!"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (isDeleting) {
            currentCharIndex--;
            dynamicText.textContent = currentPhrase.substring(0, currentCharIndex);
        } else {
            currentCharIndex++;
            dynamicText.textContent = currentPhrase.substring(0, currentCharIndex);
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
}

