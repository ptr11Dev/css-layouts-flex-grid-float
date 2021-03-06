const visual = document.querySelector(".visualization");
const inputs = document.querySelectorAll("input[type='radio'");

inputs.forEach(input =>
  input.addEventListener("click", function() {
    universal(this);
  })
);

function addEventListenerList(list, event, fn) {
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

function universal(dot) {
  const selectedValue = dot.value;

  const selectedProperty = dot.name;

  let testSelection = document.querySelectorAll(
    `.propertie [name=${selectedProperty}`
  );

  for (let i = 0; i < testSelection.length; i++) {
    if (testSelection[i].checked) {
      visual.style[selectedProperty] = selectedValue;
    }
  }
}

/* =================================
elements generator - START
==================================== */
const addElement = document.querySelector(".generator");
let counter = 1;

/* flex item properties - start */
let elementsOrder = document.getElementsByClassName("flexOrder");
let arrayOfOrders = [];

let elementsGrow = document.getElementsByClassName("flexGrow");
let arrayOfGrows = [];

let elementsShrink = document.getElementsByClassName("flexShrink");
let arrayOfShrinks = [];

let elementsBasis = document.getElementsByClassName("flexBasis");
let arrayOfBasis = [];

let elementsASelf = document.getElementsByClassName("aSelf");
let arrayOfASelf = [];

const setOrder = function() {
  this.parentNode.parentNode.style.order = parseInt(this.value);
};
const setGrow = function() {
  this.parentNode.parentNode.style.flexGrow = parseInt(this.value);
};
const setShrink = function() {
  this.parentNode.parentNode.style.flexShrink = parseInt(this.value);
};
const setBasis = function() {
  this.parentNode.parentNode.style.flexBasis = this.value;
};
const setASelf = function() {
  this.parentNode.parentNode.style.alignSelf = this.value;
};

const leftBtn = document.getElementsByClassName("leftBtn");
let arrayOfLeftBtns = [];

function addLeftMargin() {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    this.parentElement.parentElement.parentElement.style.marginLeft = "auto";
  } else {
    this.parentElement.parentElement.parentElement.style.marginLeft = "0.5em";
  }
}

const rightBtn = document.getElementsByClassName("rightBtn");
let arrayOfRightBtns = [];

function addRightMargin() {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    this.parentElement.parentElement.parentElement.style.marginRight = "auto";
  } else {
    this.parentElement.parentElement.parentElement.style.marginRight = "0.5em";
  }
}

const topBtn = document.getElementsByClassName("topBtn");
let arrayOfTopBtns = [];

function addTopMargin() {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    this.parentElement.parentElement.parentElement.style.marginTop = "auto";
  } else {
    this.parentElement.parentElement.parentElement.style.marginTop = "0.5em";
  }
}

const bottomBtn = document.getElementsByClassName("bottomBtn");
let arrayOfBottomBtns = [];

function addBottomMargin() {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    this.parentElement.parentElement.parentElement.style.marginBottom = "auto";
  } else {
    this.parentElement.parentElement.parentElement.style.marginBottom = "0.5em";
  }
}

/* flex item properties - end */

addElement.addEventListener("click", function() {
  const el = document.createElement("div");
  el.classList.add("element");
  el.innerHTML = `<p>Flex item ${counter}</p>
  <p class="orderContainer"><input type="number" class="flexOrder" placeholder="0" /></p>
  <p class="growContainer"><input type="number" class="flexGrow" placeholder="0" /></p>
  <p class="shrinkContainer"><input type="number" class="flexShrink" placeholder="0" /></p>
  <p class="basisContainer"><input type="text" class="flexBasis" placeholder="0" /></p>
  <p class="alignSelf"><select class="aSelf">
    <option value="stretch">stretch</option>
    <option value="flex-start">flex-start</option>
    <option value="flex-end">flex-end</option>
    <option value="center">center</option>
    <option value="baseline">baseline</option>
</select></p>
<div class="marginsWrap">
<div class="marginBtn">
   <button class="leftBtn">L</button><button class="rightBtn">R</button>
</div>
<div class="marginBtn">
   <button class="topBtn">T</button><button class="bottomBtn">B</button>
</div>
</div>
  <button class='delete'>x</button>`;
  visual.appendChild(el);
  counter++;

  /* flex item properties - start */

  arrayOfOrders = Array.from(elementsOrder);
  arrayOfOrders.forEach(element => element.addEventListener("input", setOrder));

  arrayOfGrows = Array.from(elementsGrow);
  arrayOfGrows.forEach(element => element.addEventListener("input", setGrow));

  arrayOfShrinks = Array.from(elementsShrink);
  arrayOfShrinks.forEach(element =>
    element.addEventListener("input", setShrink)
  );

  arrayOfBasis = Array.from(elementsBasis);
  arrayOfBasis.forEach(element => element.addEventListener("input", setBasis));

  arrayOfASelf = Array.from(elementsASelf);
  arrayOfASelf.forEach(element => element.addEventListener("input", setASelf));

  /* margin auto feature - start */
  arrayFromLeftBtns = Array.from(leftBtn);
  arrayFromLeftBtns.forEach(element =>
    element.addEventListener("click", addLeftMargin)
  );

  arrayFromRightBtns = Array.from(rightBtn);
  arrayFromRightBtns.forEach(element =>
    element.addEventListener("click", addRightMargin)
  );

  arrayFromTopBtns = Array.from(topBtn);
  arrayFromTopBtns.forEach(element =>
    element.addEventListener("click", addTopMargin)
  );

  arrayFromBottomBtns = Array.from(bottomBtn);
  arrayFromBottomBtns.forEach(element =>
    element.addEventListener("click", addBottomMargin)
  );

  /* margin auto feature - end */

  /* flex item properties - end */
});

visual.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    const element = e.target.parentElement;
    element.parentElement.removeChild(element);

    arrayOfOrders = Array.from(elementsOrder);
    arrayOfGrows = Array.from(elementsGrow);
    arrayOfShrinks = Array.from(elementsShrink);
    arrayOfBasis = Array.from(elementsBasis);
    arrayOfASelf = Array.from(elementsASelf);
  }
});

/* =================================
elements generator - END
==================================== */

/* =================================
        Year actualization - Start
==================================== */
let date = new Date();
document.querySelector(".siteFooter p span").textContent = date.getFullYear();
/* =================================
        Year actualization - END
==================================== */
