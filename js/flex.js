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

addElement.addEventListener("click", function() {
  const el = document.createElement("div");
  el.classList.add("element");
  el.innerHTML = `<p>Flex item</p> <button class='delete'>x</button>`;
  visual.appendChild(el);
});

visual.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    const element = e.target.parentElement;
    element.parentElement.removeChild(element);
  }
});

/* =================================
elements generator - START
==================================== */
