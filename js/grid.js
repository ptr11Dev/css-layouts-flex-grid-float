// expanding tools

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

// Buttons

const btns = document.querySelectorAll("button");

// building grid

const gtColumns = document.querySelector("#gridTemplateColumns");
const gtRows = document.querySelector("#gridTemplateRows");
const gridPlace = document.querySelector(".visualization");

const createGrid = function() {
  let noCols = 0;
  let noRows = 0;

  /*check if there is reapeat used in columns*/
  if (gtColumns.value.slice(0, 6) == "repeat") {
    noCols = gtColumns.value.slice(
      gtColumns.value.indexOf("(") + 1,
      gtColumns.value.indexOf(",")
    );
    gridPlace.style.gridTemplateColumns = gtColumns.value;
  } else {
    console.log("Please use repeat() value in order to create a container.");
  }

  /*check if there is reapeat used in rows*/
  if (gtRows.value.slice(0, 6) == "repeat") {
    noRows = gtRows.value.slice(
      gtRows.value.indexOf("(") + 1,
      gtRows.value.indexOf(",")
    );
    gridPlace.style.gridTemplateRows = gtRows.value;
  } else {
    console.log("Please use repeat() value in order to create a container.");
  }

  let totCells = noCols * noRows;

  /*remove all existing elements in the container*/
  if (gridPlace.children.length !== 0) {
    const gridPlaceLen = gridPlace.children.length;
    for (let i = 0; i < gridPlaceLen; i++) {
      gridPlace.removeChild(gridPlace.children[0]);
    }
  }

  /*create declared elements in container*/
  for (let i = 1; i <= totCells; i++) {
    const singleCell = document.createElement("div");
    singleCell.classList.add("gitem");
    singleCell.innerHTML = '<div class="gelement"></div>';
    gridPlace.appendChild(singleCell);
  }
};
btns[0].addEventListener("click", createGrid);

/*create grid gap*/
const colGap = document.querySelector("#gridColumnGap");
const rowGap = document.querySelector("#gridRowGap");
const createGap = function() {
  gridPlace.style.gridColumnGap = colGap.value;
  gridPlace.style.gridRowGap = rowGap.value;
};
btns[2].addEventListener("click", createGap);

/*place items*/
const justifyItems = document.querySelector("#justifyItems");
const alignItems = document.querySelector("#alignItems");
const placeItems = function() {
  const trueElts = [...document.getElementsByClassName("gelement")];
  trueElts.forEach(elt => {
    elt.style.width = `${childW.value}%`;
    elt.style.height = `${childH.value}%`;
    elt.parentElement.style.justifyItems = justifyItems.value;
    elt.parentElement.style.alignItems = alignItems.value;
    if (justifyItems.value == "stretch") {
      elt.style.width = "auto";
    } else {
      elt.style.width = `${childW.value}%`;
    }
    if (alignItems.value == "stretch") {
      elt.style.height = "auto";
    } else {
      elt.style.height = `${childH.value}%`;
    }
  });
};
btns[3].addEventListener("click", placeItems);

/*place content*/
const justifContent = document.querySelector("#justifyContent");
const aligContent = document.querySelector("#alignContent");
const placeContent = function() {
  gridPlace.style.justifyContent = justifContent.value;
  gridPlace.style.alignContent = aligContent.value;
};
btns[4].addEventListener("click", placeContent);

/*Implicit grid management*/
const gaCol = document.querySelector("#gridAutoColumns");
const gaRow = document.querySelector("#gridAutoRows");
const gaFlow = document.querySelector("#gridAutoFlow");
const implicitGrid = function() {
  gridPlace.style.gridAutoColumns = gaCol.value;
  gridPlace.style.gridAutoRows = gaRow.value;
  gridPlace.style.gridAutoFlow = gaFlow.value;
};
btns[5].addEventListener("click", implicitGrid);

/*childs' size*/
const childW = document.querySelector(".childWidth");
const childH = document.querySelector(".childHeight");

childW.addEventListener("input", function() {
  const trueElts = [...document.getElementsByClassName("gelement")];
  trueElts.forEach(elt => (elt.style.width = `${this.value}%`));
});

childH.addEventListener("input", function() {
  const trueElts = [...document.getElementsByClassName("gelement")];
  trueElts.forEach(elt => (elt.style.height = `${this.value}%`));
});
