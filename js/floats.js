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

/* clearing floats */

const container = document.querySelector(".parent");
const clearBtns = document.querySelectorAll(".clear button");

const addEmptyDiv = function() {
  this.disabled = true;
  this.classList.add("disabled");
  const emptyDiv = document.createElement("div");
  emptyDiv.classList.add("emptyDiv");
  emptyDiv.style.clear = "both";
  container.appendChild(emptyDiv);
};

const removeEmptyDiv = function() {
  clearBtns[0].disabled = false;
  clearBtns[0].classList.remove("disabled");
  container.removeChild(document.querySelector(".parent .emptyDiv"));
};

clearBtns[0].addEventListener("click", addEmptyDiv);
clearBtns[1].addEventListener("click", removeEmptyDiv);

clearBtns[2].addEventListener("click", function() {
  this.disabled = true;
  this.classList.add("disabled");
  container.style.overflow = "hidden";
});

clearBtns[3].addEventListener("click", function() {
  clearBtns[2].classList.remove("disabled");
  container.style.overflow = "visible";
  clearBtns[2].disabled = false;
});

clearBtns[4].addEventListener("click", function() {
  this.classList.add("disabled");
  container.classList.add("clearfix");
  this.disabled = true;
});

clearBtns[5].addEventListener("click", function() {
  clearBtns[4].disabled = false;
  clearBtns[4].classList.remove("disabled");
  container.classList.remove("clearfix");
});
