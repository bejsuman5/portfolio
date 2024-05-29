
// const textElement = document.getElementById('text');
// const cursorElement = document.querySelector('.cursor');
// const words = ['coder', 'programmer', 'developer', 'businessman', 'traveller'];
// let wordIndex = 0;
// let charIndex = 0;
// const typingSpeed = 150;
// const erasingSpeed = 150;
// const delayBetweenWords = 1800;

// function type() {
//     if (charIndex < words[wordIndex].length) {
//         textElement.textContent += words[wordIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(type, typingSpeed);
//     } else {
//         setTimeout(erase, delayBetweenWords);
//     }
// }

// function erase() {
//     if (charIndex > 0) {
//         textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(erase, erasingSpeed);
//     } else {
//         wordIndex = (wordIndex + 1) % words.length;
//         setTimeout(type, typingSpeed);
//     }
// }


// ************************************************


const textElement = document.getElementById('animationText');
const words = ['coder', 'programmer', 'developer', 'businessman', 'traveller'];
let wordIndex = 0;
let charIndex = words[wordIndex].length; // Start with the first word fully displayed
const typingSpeed = 120;
const erasingSpeed = 120; // Match the typing speed for consistency
const delayBetweenWords = 1000;

// Initialize the text with the first word
textElement.textContent = words[wordIndex];

function type() {
    if (charIndex < words[wordIndex].length) {
        textElement.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenWords);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
    }
}

