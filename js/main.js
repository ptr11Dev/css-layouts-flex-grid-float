const texts = document.querySelectorAll(".text");
const boxes = [...document.querySelectorAll(".box")];

boxes.forEach(box => {
  box.addEventListener("mouseenter", function() {
    document.querySelector(".active").classList.remove("active");

    let thisIndex = boxes.indexOf(this);
    texts[thisIndex + 1].classList.add("active");
  });

  box.addEventListener("mouseleave", function() {
    document.querySelector(".active").classList.remove("active");
    texts[0].classList.add("active");
  });
});
