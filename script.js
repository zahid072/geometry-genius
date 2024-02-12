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
  document.getElementById("triangleBase").value = "";
  document.getElementById("triangleHeight").value = "";
}
