const titles = ["Web Developer", "Web Designer", "Chatbot Developer", "FreeLancer"];
let titleIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Adjust typing speed here
const erasingSpeed = 50; // Adjust erasing speed here
const delayBetweenTitles = 2000; // Delay between titles

function type() {
  if (charIndex < titles[titleIndex].length) {
    document.getElementById("typing-text").innerHTML +=
      titles[titleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTitles);
  }
}

function erase() {
  if (charIndex > 0) {
    document.getElementById("typing-text").innerHTML = titles[
      titleIndex
    ].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    titleIndex++;
    if (titleIndex >= titles.length) titleIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, delayBetweenTitles);
});

(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
