const visual = document.querySelector(".visualization");

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
