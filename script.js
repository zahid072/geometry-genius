function deleteAll() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result3").innerHTML = "";
}

// triangle calculation

function triangleCalculate() {
  const triangleBase = document.getElementById("triangleBase");
  const base = triangleBase.value;
  const triangleHeight = document.getElementById("triangleHeight");
  const height = triangleHeight.value;
  const result = document.getElementById("result");

  const area = 0.5 * base * height;

  if (triangleBase.value > 0 && triangleHeight.value > 0) {
    if (base && height) {
      result.innerHTML = `Triangle-Area: ${area} <span>cm<sup>2</sup></span>`;
    }
  }

  // clear the input
  triangleBase.value = "";
  triangleHeight.value = "";
}

// rectangle calculation
function rectangleCalculation() {
  const rectangleWidth = document.getElementById("rectangleWidth");
  const width = rectangleWidth.value;
  const rectangleLength = document.getElementById("rectangleLength");
  const length = rectangleLength.value;
  const result = document.getElementById("result2");

  const area = width * length;

  if (rectangleWidth.value > 0 && rectangleLength.value > 0) {
    if (width && length) {
      result.innerHTML = `Rectangle-Area: ${area} <span>cm<sup>2</sup></span>`;
    }
  }

  // clear the input
  rectangleWidth.value = "";
  rectangleLength.value = "";
}

// parallelogram calculation
function parallelogramCalculation() {
  const parallelogramBase = document.getElementById("parallelogramBase");
  const base = parallelogramBase.value;
  const parallelogramHeight = document.getElementById("parallelogramHeight");
  const height = parallelogramHeight.value;
  const result = document.getElementById("result3");

  const area = base * height;

  if (parallelogramBase.value > 0 && parallelogramHeight.value > 0) {
    if (base && height) {
      result.innerHTML = `Parallelogram-Area: ${area} <span>cm<sup>2</sup></span>`;
    }
  }

  // clear the input
  parallelogramBase.value = "";
  parallelogramHeight.value = "";
}
// rhombus calculation
function rhombusCalculation() {
  const d1 = document.getElementById("rhombusD1");
  const rhombusD1 = d1.value;
  const d2 = document.getElementById("rhombusD2");
  const rhombusD2 = d2.value;
  const result = document.getElementById("result4");

  const area = 0.5 * rhombusD1 * rhombusD2;

  if (d1.value > 0 && d2.value > 0) {
    if (rhombusD1 && rhombusD2) {
      result.innerHTML = `Rhombus-Area: ${area} <span>cm<sup>2</sup></span>`;
    }
  }

  // clear the input
  d1.value = "";
  d2.value = "";
}
//  pentagon calculation
function pentagonCalculation() {
  const pentagonP = document.getElementById("pentagonP");
  const p = pentagonP.value;
  const pentagonB = document.getElementById("pentagonB");
  const b = pentagonB.value;
  const result = document.getElementById("result5");

  const area = 0.5 * p * b;

  if (pentagonP.value > 0 && pentagonB.value > 0) {
    if (p && b) {
      result.innerHTML = `Pentagon-Area: ${area} <span>cm<sup>2</sup></span>`;
    }
  }

  // clear the input
  p.value = "";
  b.value = "";
}
