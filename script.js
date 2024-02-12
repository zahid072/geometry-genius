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
    } else {
      result.innerHTML = "";
    }
  } else {
    result.innerHTML = "";
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
  const result = document.getElementById("result");

  const area = width * length;

  if (rectangleWidth.value > 0 && rectangleLength.value > 0) {
    if (width && length) {
      result.innerHTML = `Triangle-Area: ${area} <span>cm<sup>2</sup></span>`;
    } else {
      result.innerHTML = "";
    }
  } else {
    result.innerHTML = "";
  }

  // clear the input
  rectangleWidth.value = "";
  rectangleLength.value = "";
}
