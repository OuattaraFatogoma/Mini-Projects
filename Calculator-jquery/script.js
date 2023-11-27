$(document).ready(function () {
  let currentEntry = "0";
  let prevuEntry = 0;
  let operation = null;
  updateScreen(currentEntry);

  $("#calc-body").on("click", (event) => {
    let buttonPressed = event.target.textContent;

    if (!isNaN(buttonPressed)) {
      console.log("number");
      if (currentEntry == 0) currentEntry = buttonPressed;
      else currentEntry += buttonPressed;
    } else if (isOperator(buttonPressed)) {
      prevuEntry = currentEntry;
      currentEntry = "0";
      operation = buttonPressed;
    } else {
      switch (buttonPressed) {
        case "C":
          currentEntry = "0";
          break;

        case "CE":
          currentEntry = "0";
          break;

        case "back":
          currentEntry = currentEntry.substring(0, currentEntry.length - 1);
          break;

        case ".":
          currentEntry += ".";
          break;

        case "+/-":
          currentEntry *= -1;
          break;

        case "%":
          currentEntry /= 100;
          currentEntry += "%";
          break;

        case "sqrt":
          currentEntry = Math.sqrt(currentEntry);
          break;

        case "1/x":
          currentEntry = 1 / currentEntry;
          break;

        case "pi":
          currentEntry = Math.PI;
          break;

        case "=":
          currentEntry = operate(prevuEntry, currentEntry, operation);
          operation = null;
          break;

        default:
          currentEntry = currentEntry;
          break;
      }
    }
    console.log(currentEntry);
    updateScreen(currentEntry);
  });
});

/////////////////// Functions //////////////////

function isOperator(value) {
  let verify = false;
  value == "+" || value == "-" || value == "*" || value == "/"
    ? (verify = true)
    : verify;
  return verify;
}

function operate(a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return b;
  }
}

function updateScreen(value) {
  $("#screen").html(value);
}
