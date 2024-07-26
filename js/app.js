document.addEventListener("DOMContentLoaded", function() {
  var skillItems = document.querySelectorAll(".skills-prog li");

  skillItems.forEach(function(item) {
    var bar = item.querySelector(".bar");
    var percent = item.getAttribute("data-percent");
    var percentageText = item.querySelector(".percentage") || document.createElement("span");
    
    percentageText.className = "percentage";
    percentageText.textContent = "0%";
    if (!item.querySelector(".percentage")) {
      item.appendChild(percentageText);
    }

    // Initial state
    bar.style.width = "0%";
    percentageText.style.opacity = "0";

    // Animate bars
    setTimeout(function() {
      bar.style.width = percent + "%";
      setTimeout(function() {
        percentageText.textContent = percent + "%";
        percentageText.style.opacity = "1"; // Show percentage
      }, 1000); // Delay to match animation duration
    }, 100); // Small delay to ensure initial state is rendered
  });
});
