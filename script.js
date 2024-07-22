const titles = ["Web Developer", "Web Designer", "Chatbot Developer", "Available For Freelancing"];
let titleIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // Adjust typing speed here
const erasingSpeed = 50; // Adjust erasing speed here
const delayBetweenTitles = 2000; // Delay between titles

function type() {
    if (charIndex < titles[titleIndex].length) {
        document.getElementById("typing-text").innerHTML += titles[titleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTitles);
    }
}

function erase() {
    if (charIndex > 0) {
        document.getElementById("typing-text").innerHTML = titles[titleIndex].substring(0, charIndex - 1);
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
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

(function() {
    $(".skills-prog li")
      .find(".skills-bar")
      .each(function(i) {
        $(this)
          .find(".bar")
          .delay(i * 150)
          .animate(
            {
              width:
                $(this)
                  .parents()
                  .attr("data-percent") + "%"
            },
            1000,
            "linear",
            function() {
              return $(this).css({
                "transition-duration": ".5s"
              });
            }
          );
      });
  
    $(".skills-soft li")
      .find("svg")
      .each(function(i) {
        var c, cbar, circle, percent, r;
        circle = $(this).children(".cbar");
        r = circle.attr("r");
        c = Math.PI * (r * 2);
        percent = $(this)
          .parent()
          .data("percent");
        cbar = (100 - percent) / 100 * c;
        circle.css({
          "stroke-dashoffset": c,
          "stroke-dasharray": c
        });
        circle.delay(i * 150).animate(
          {
            strokeDashoffset: cbar
          },
          1000,
          "linear",
          function() {
            return circle.css({
              "transition-duration": ".3s"
            });
          }
        );
        $(this)
          .siblings("small")
          .prop("Counter", 0)
          .delay(i * 150)
          .animate(
            {
              Counter: percent
            },
            {
              duration: 1000,
              step: function(now) {
                return $(this).text(Math.ceil(now) + "%");
              }
            }
          );
      });
  }.call(this));
