function display(value) {
  document.querySelector("#display-box").value += value;
}
function clearDisplay() {
  document.querySelector("#display-box").value = null;
}
function calculate() {
  let displayBox = document.querySelector("#display-box");
  let equation = displayBox.value;
  equation = equation.replaceAll(`x`, `*`);
  equation = equation.replaceAll(`÷`, `/`);
  displayBox.value = eval(equation);
}
