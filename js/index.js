// Text typing animation with JS control
const text = "Happy Birthday To You Daddy"; // Text to be typed
const heading = document.querySelector("h1");
const button = document.getElementById("startBtn");
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

// When button is clicked
button.addEventListener("click", () => {
  // 🎉 Redirect to your surprise page
  window.location.href = "choose page.html"; // change to your actual file
});
