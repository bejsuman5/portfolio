// text typing animatiom
// ************************************************
const textElement = document.getElementById('animationText');
const words = ['Developer', 'Programmer', 'Designer', 'Businessman', 'Traveller'];
let wordIndex = 0;
let charIndex = words[wordIndex].length; // Start with the first word fully displayed
const typingSpeed = 150;
const erasingSpeed = 150; // Match the typing speed for consistency
const delayBetweenWords = 2000;

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
// Function to scroll to a specific element with a gap at the top
// ****************************************************************************
function scrollToElement(elementId, gap) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - gap,
      behavior: 'smooth'
    });
  }
}

// Add event listeners to navbar links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToElement(targetId, 65); // Adjust the gap as needed
  });
});



// text typing animation withot show text (first typing and than show text) 
// ******************************************************
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