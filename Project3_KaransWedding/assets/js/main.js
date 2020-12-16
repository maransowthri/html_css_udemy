$(document).ready(function () {
  preloaderFadeOutTime = 500;
  hidePreLoader(500);
});

function hidePreLoader(preloaderFadeOutTime) {
  var preloader = $(".spinner-wrapper");
  preloader.fadeOut(preloaderFadeOutTime);
}

document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = new Date().getTime() / 1000 + 86400 * 2 + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle("light-theme");
    body.querySelector("#flipdown").classList.toggle("flipdown__theme-dark");
    body.querySelector("#flipdown").classList.toggle("flipdown__theme-light");
  }, 5000);
});

$("#wedding_day_link").click(function () {
  $("#wedding_day").slideUp();
});

const navbarEl = document.querySelector(".navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbarEl.classList.remove("top");
    if (!scrolled) {
      navbarEl.style.transform = "translateY(-70px)";
    }
    setTimeout(() => {
      navbarEl.style.transform = "translateY(0px)";
    }, 500);
    scrolled = true;
  } else {
    navbarEl.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
