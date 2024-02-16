function deleteAll() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("result2").innerHTML = "";
  document.getElementById("result3").innerHTML = "";
  document.getElementById("result4").innerHTML = "";
  document.getElementById("result5").innerHTML = "";
  document.getElementById("result6").innerHTML = "";
}

// triangle calculation
function triangleCalculate() {
  calculation("triangleBase", "triangleHeight", "result", "Triangle", 0.5);
}
// rectangle calculation
function rectangleCalculation() {
  calculation2("rectangleWidth", "rectangleLength", "result2", "Rectangle");
}
// parallelogram calculation
function parallelogramCalculation() {
  calculation2(
    "parallelogramBase",
    "parallelogramHeight",
    "result3",
    "Parallelogram"
  );
}
// rhombus calculation
function rhombusCalculation() {
  calculation("rhombusD1", "rhombusD2", "result4", "Rhombus", 0.5);
}
//  pentagon calculation
function pentagonCalculation() {
  calculation("pentagonP", "pentagonB", "result5", "Pentagon", 0.5);
}
//  Ellipse calculation
function ellipseCalculation() {
  calculation("ellipseA", "ellipseB", "result6", "Ellipse", Math.round(Math.PI));
}
