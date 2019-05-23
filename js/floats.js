const firstDivBtns = document.querySelectorAll(".firstDivTools button");
const secndDivBtns = document.querySelectorAll(".secndDivTools button");

const pressBtn = function(button) {
  button.classList.toggle("pressed");
  if (button.classList.contains("left")) {
    button.nextElementSibling.classList.remove("pressed");
  } else {
    button.previousElementSibling.classList.remove("pressed");
  }
};

const checkFloat = function(button, div) {
  if (!button.parentNode.innerHTML.includes("pressed")) {
    div.style.float = "none";
  }
};

const addFloat = function() {
  /* tricky move */
  const selectedDiv = document.querySelector(
    `.${this.parentNode.classList.value.slice(0, 5)}`
  );

  selectedDiv.style.float = this.textContent.toLowerCase();
  pressBtn(this);
  checkFloat(this, selectedDiv);
};

firstDivBtns.forEach(button => button.addEventListener("click", addFloat));
secndDivBtns.forEach(button => button.addEventListener("click", addFloat));

/*==========
Year actualization - Start
==========*/
let date = new Date();
document.querySelector("footer p span").textContent = date.getFullYear();
/*==========
Year actualization - END
==========*/
