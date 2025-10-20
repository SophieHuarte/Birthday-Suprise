// Text typing animation with JS control
const text = "Guess Our Song"; // Text to be typed
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
const player = document.getElementById("player");
const playBtn = document.getElementById("playBtn");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    player.pause();
    playBtn.textContent = "PLAY ▶";
    playBtn.classList.remove("playing");
  } else {
    player.play();
    playBtn.textContent = "PAUSE ⏸";
    playBtn.classList.add("playing");
  }
  isPlaying = !isPlaying;
});


// Navigate to choose page when heart is clicked
document.getElementById("heart").addEventListener("click", function() {
  window.location.href = "choose page.html"; // Redirect page
});
