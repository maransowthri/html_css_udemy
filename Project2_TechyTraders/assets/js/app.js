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
