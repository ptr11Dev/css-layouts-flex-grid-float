const childElement = document.querySelector(".child");

document.querySelector(".positionSelect").addEventListener("input", function() {
  childElement.style.position = this.value;
});

/* positioning from top - start */
const unitTop = document.querySelector(".positionTop select");
const inputTop = document.querySelector(".positionTop input");

inputTop.addEventListener("input", function() {
  childElement.style.top = this.value + unitTop.value;
});

unitTop.addEventListener("input", function() {
  childElement.style.top = inputTop.value + this.value;
});
/* positioning from top - end */

/* positioning from Right - start */
const unitRight = document.querySelector(".positionRight select");
const inputRight = document.querySelector(".positionRight input");

inputRight.addEventListener("input", function() {
  childElement.style.right = this.value + unitRight.value;
});

unitRight.addEventListener("input", function() {
  childElement.style.right = inputRight.value + this.value;
});
/* positioning from Right - end */

/* positioning from Bottom - start */
const unitBottom = document.querySelector(".positionBottom select");
const inputBottom = document.querySelector(".positionBottom input");

inputBottom.addEventListener("input", function() {
  childElement.style.bottom = this.value + unitBottom.value;
});

unitBottom.addEventListener("input", function() {
  childElement.style.bottom = inputBottom.value + this.value;
});
/* positioning from Bottom - end */

/* positioning from Left - start */
const unitLeft = document.querySelector(".positionLeft select");
const inputLeft = document.querySelector(".positionLeft input");

inputLeft.addEventListener("input", function() {
  childElement.style.left = this.value + unitLeft.value;
});

unitLeft.addEventListener("input", function() {
  childElement.style.left = inputLeft.value + this.value;
});
/* positioning from Left - end */

/* lock option - start*/

const locks = document.querySelectorAll(".lock");

locks.forEach(lock =>
  lock.addEventListener("click", function() {
    if (this.innerHTML == "") {
      this.innerHTML = "&#10003;";
      this.classList.toggle("ignore");
      this.parentElement.childNodes[3].disabled = true;
      this.parentElement.childNodes[5].disabled = true;
      this.parentElement.childNodes[3].classList.toggle("disable");
      this.parentElement.childNodes[5].classList.toggle("disable");
      let valueToIgnore = this.parentElement.classList.value.slice(8);
      childElement.style[valueToIgnore.toLowerCase()] = "auto";
      this.parentElement.childNodes[3].value = "";
    } else {
      this.innerHTML = "";
      this.classList.toggle("ignore");
      this.parentElement.childNodes[3].disabled = false;
      this.parentElement.childNodes[5].disabled = false;
      this.parentElement.childNodes[3].classList.toggle("disable");
      this.parentElement.childNodes[5].classList.toggle("disable");
    }
  })
);

/* lock option - end */

/* child's size - start */
const childWidth = document.querySelector(".childWidthValue");
const childHeight = document.querySelector(".childHeightValue");

document.querySelector(".childWidth").addEventListener("input", function() {
  childWidth.textContent = this.value;
  childElement.style.width = this.value + "%";
});

document.querySelector(".childHeight").addEventListener("input", function() {
  childHeight.textContent = this.value;
  childElement.style.height = this.value + "%";
});

/* child's size - end /*


/* centering - start */

document.querySelector(".tip button").addEventListener("click", function() {
  childElement.classList.toggle("centerElement");
  this.classList.toggle("ignore");
});

/* centering - end */

/* transform properties */

document.querySelectorAll(".transforms button").forEach(elt =>
  elt.addEventListener("click", function() {
    if (!this.innerHTML) {
      this.innerHTML = "&#10003;";
      console.log(this.parentElement.childNodes[3].value);
      console.log(this.parentElement.childNodes[1].textContent);
      const propertie = `transform:${
        this.parentElement.childNodes[1].textContent
      }()`;
      console.log(propertie);

      childElement.style[propertie] =
        this.parentElement.childNodes[3].value + "deg";
    } else {
      this.innerHTML = "";
    }
  })
);

/* =================================
        Year actualization - Start
==================================== */
let date = new Date();
document.querySelector(".siteFooter p span").textContent = date.getFullYear();
/* =================================
        Year actualization - END
==================================== */
