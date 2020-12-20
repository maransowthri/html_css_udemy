let scrolled = false;
const navbar = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
      setTimeout(() => {
        navbar.style.transform = "translateY(0px)";
      }, 1000);
      scrolled = true;
    }
  } else {
    navbar.classList.add("top");
  }
};

$(".navbar a").on("click", function (e) {
  if (this.hash) {
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
