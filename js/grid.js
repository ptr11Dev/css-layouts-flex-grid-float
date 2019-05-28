const expand = function() {
  if (this.nextElementSibling.classList.contains("active")) {
    this.nextElementSibling.classList.remove("active");
  } else {
    if (document.querySelector(".active") !== null) {
      document.querySelector(".active").classList.remove("active");
      this.nextElementSibling.classList.add("active");
    } else {
      this.nextElementSibling.classList.add("active");
    }
  }
};

document
  .querySelectorAll(".feature__title")
  .forEach(title => title.addEventListener("click", expand));
