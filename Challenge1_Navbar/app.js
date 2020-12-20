if (innerWidth <= 400) {
  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const contact = document.getElementById("contact");
  const donate = document.getElementById("donate");

  home.style.display = "none";
  about.style.display = "none";
  contact.style.display = "none";
  donate.style.display = "none";

  document.querySelector(".logo").addEventListener("click", (e) => {
    e.preventDefault();
    if (home.style.display === "none") {
      home.style.display = "block";
      about.style.display = "block";
      contact.style.display = "block";
      donate.style.display = "block";
    } else {
      home.style.display = "none";
      about.style.display = "none";
      contact.style.display = "none";
      donate.style.display = "none";
    }
  });
} else {
  home.style.display = "block";
  about.style.display = "block";
  contact.style.display = "block";
  donate.style.display = "block";
}
