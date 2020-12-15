const homeTab = document.getElementById("home");
const contactTab = document.getElementById("contact");
const aboutTab = document.getElementById("about");
const logoTab = document.querySelector(".logo");

if (innerWidth < 768) {
  homeTab.style.display = "none";
  contactTab.style.display = "none";
  aboutTab.style.display = "none";

  logoTab.addEventListener("click", (e) => {
    e.preventDefault();
    if (homeTab.style.display === "block") {
      homeTab.style.display = "none";
      contactTab.style.display = "none";
      aboutTab.style.display = "none";
    } else {
      homeTab.style.display = "block";
      contactTab.style.display = "block";
      aboutTab.style.display = "block";
    }
  });
}
