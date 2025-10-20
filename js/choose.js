// Text typing animation with JS control
const text = "I Made These All For You My Love"; // Text to be typed
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

  // Make each gift appear one after another
  const gifts = document.querySelectorAll(".gift");
  gifts.forEach((gift, i) => {
    /** @type {HTMLElement} */ (gift).style.animationDelay = `${i * 0.3}s`;
  });


// ❤️ Heart click → go to first page
const backHeart = document.getElementById("backHeart");
if (backHeart) {
  backHeart.addEventListener("click", () => {
    window.location.href = "index.html"; // change to your first page
  });
}

// 🎁 Gift click → go to respective page
function openGift(page) {
  window.location.href = page;
}

// export function for inline onclick
window.openGift = openGift;
