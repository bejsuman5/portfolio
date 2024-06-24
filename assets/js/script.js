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
document.querySelectorAll('.jump-bookmark').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    scrollToElement(targetId, 110); // Adjust the gap as needed
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



// // send Contact form on whatsapp
function sendContactFormToWhatsapp() {
  let sendNumber = "+916290487369";

  let name = document.getElementById('contact_name').value;
  let number = document.getElementById('contact_number').value;
  let email = document.getElementById('contact_email').value;
  let address = document.getElementById('contact_address').value;
  let message = document.getElementById('contact_message').value;

  var form = document.getElementById("contact_form");

  if (name.trim() === "") {
    alert("Name is required!");
    return false;
  }

  if (number.trim() === "") {
    alert("Number is required!");
    return false;
  }

  if (email.trim() === "") {
    alert("Email is required!");
    return false;
  }

  if (address.trim() === "") {
    alert("Address is required!");
    return false;
  }

  if (message.trim() === "") {
    alert("Message is required!");
    return false;
  }

  var url = "https://wa.me/" + sendNumber + "?text="
    + "Name: " + name + "%0a"
    + "Number: " + number + "%0a"
    + "Email: " + email + "%0a"
    + "Address: " + address + "%0a"
    + "Message: " + message + "%0a%0a";
  window.open(url, '_blank').focus();
  form.reset();
}