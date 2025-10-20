// Text typing animation with JS control
const text = "Our Memories"; // Text to be typed
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

// Navigate to choose page when heart is clicked
document.getElementById("heart").addEventListener("click", function() {
  window.location.href = "choose page.html"; // Redirect page
});
