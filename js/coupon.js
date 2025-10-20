// Text typing animation with JS control
const text = "Special Coupons"; // Text to be typed
const heading = document.querySelector("h1");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    heading.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100); // typing speed
  } else {
    heading.style.borderRight = "none"; // remove cursor after typing
    button.style.display = "inline-block"; // show the button
  }
}

// Start typing animation after short delay
window.onload = () => {
  heading.textContent = ""; // clear existing text
  typeEffect();
};

// When the heart image is clicked, go to choose page
document.getElementById("heart").addEventListener("click", function() {
  window.location.href = "choose page.html"; // Redirect page
});
