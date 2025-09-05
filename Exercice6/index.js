let currentInput = "";
const display = document.getElementById("display");

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
  console.log("Appended:", value, "Current input:", currentInput);
}

function clearDisplay() {
  currentInput = "";
  display.value = "";
}

function calculateResult() {
  console.log("Calculating:", currentInput);
  const validExpression = /^[0-9+*/\-]*$/;
  if (!validExpression.test(currentInput)) {
    display.value = "";
    currentInput = "";
    return;
  }

  if (currentInput.includes("/0")) {
    display.value = "Division by zero is not allowed";
    currentInput = "";
    return;
  }

  try {
    const result = eval(currentInput);
    console.log("Result:", result);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}
