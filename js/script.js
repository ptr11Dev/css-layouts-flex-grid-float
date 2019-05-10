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
