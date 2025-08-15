// CALCULATOR WHIT ADD SUBTRACT MULTIPLY DIVIDE
// CREATE AND FUNCTION "OPERATE" THAT TAKES THE OPERATOR
// AND TWO NUMBERS AND THEN CALL THE APPROPRIATE FUNCTION
// ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION
const dataBase = [];

// const history = document.querySelector("#history");
// history.value = dataBase.join(" "); // Display the contents of the database
// function operateDataBase()

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}
function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Error: Invalid operator";
  }
}

const btnOne = document.querySelector("#one");
const btnTwo = document.querySelector("#two");
const btnThree = document.querySelector("#three");
const btnFour = document.querySelector("#four");
const btnFive = document.querySelector("#five");
const btnSix = document.querySelector("#six");
const btnSeven = document.querySelector("#seven");
const btnEight = document.querySelector("#eight");
const btnNine = document.querySelector("#nine");
const btnZero = document.querySelector("#zero");
const btnClear = document.querySelector("#clear");
const btnAdd = document.querySelector("#add");
const btnSubtract = document.querySelector("#subtract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnEquals = document.querySelector("#equals");
const btnDecimal = document.querySelector("#decimal");

btnDecimal.addEventListener("click", () => {
  console.log("Decimal Button Clicked");
  const input = document.querySelector("#display");
  if (!input.value.includes(".")) {
    input.value += ".";
  }
});

btnEquals.addEventListener("click", () => {
  console.log("Equals Button Clicked");
  const input = document.querySelector("#display");
  const currentValue = input.value;
  if (dataBase.length < 2) {
    console.log("Not enough values in database to perform operation");
    return; // Prevent operation if there are not enough values'
  }
  const result = operate(dataBase[1], dataBase[0], parseFloat(currentValue));
  console.log("Operation Performed with Current Value:", currentValue);
  input.value = result; // Display the result in the input field
  dataBase.length = 0; // Clear the database after operation
  dataBase.push(result); // Store the result in the database
});

btnClear.addEventListener("click", () => {
  console.log("Clear Button Clicked");
  const input = document.querySelector("#display");
  input.value = "";
  dataBase.length = 0; // Clear the database
  console.log("Display Cleared and Database Reset");
});

btnAdd.addEventListener("click", () => {
  addButtonClick("+");
});

btnSubtract.addEventListener("click", () => {
  addButtonClick("-");
});

btnMultiply.addEventListener("click", () => {
  addButtonClick("*");
});

btnDivide.addEventListener("click", () => {
  addButtonClick("/");
});

btnOne.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "1"; // Add '1' to the display
    console.log("Database cleared, now adding '1' to display");
    return;
  }
  console.log("Button One Clicked");

  const input = document.querySelector("#display");
  input.value += "1";
});

btnTwo.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "2"; // Add '1' to the display
    console.log("Database cleared, now adding '1' to display");
    return;
  }
  console.log("Button Two Clicked");
  const input = document.querySelector("#display");
  input.value += "2";
});

btnThree.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "3"; // Add '1' to the display
    console.log("Database cleared, now adding '1' to display");
    return;
  }
  console.log("Button Three Clicked");
  const input = document.querySelector("#display");
  input.value += "3";
});

btnFour.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "4"; // Add '1' to the display
    console.log("Database cleared, now adding '1' to display");
    return;
  }
  console.log("Button Four Clicked");
  const input = document.querySelector("#display");
  input.value += "4";
});

btnFive.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "5"; // Add '1' to the display
    console.log("Database cleared, now adding '1' to display");
    return;
  }
  console.log("Button Five Clicked");
  const input = document.querySelector("#display");
  input.value += "5";
});

btnSix.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "6"; // Add '1' to the display
    console.log("Database cleared, now adding '1' to display");
    return;
  }
  console.log("Button Six Clicked");
  const input = document.querySelector("#display");
  input.value += "6";
});
btnSeven.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "7"; // Add '1' to the display
    console.log("Database cleared, now adding '1' to display");
    return;
  }
  console.log("Button Seven Clicked");
  const input = document.querySelector("#display");
  input.value += "7";
});
btnEight.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "8"; // Add '1' to the display
    console.log("Database cleared, now adding '1' to display");
    return;
  }
  console.log("Button Eight Clicked");
  const input = document.querySelector("#display");
  input.value += "8";
});
btnNine.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "9"; // Add '1' to the display
    console.log("Database cleared, now adding '1' to display");
    return;
  }
  console.log("Button Nine Clicked");
  const input = document.querySelector("#display");
  input.value += "9";
});
btnZero.addEventListener("click", () => {
  if (dataBase.length === 1) {
    dataBase.length = 0; // Clear the database if already one value
    const input = document.querySelector("#display");
    input.value = ""; // Clear the display
    input.value += "0"; // Add '1' to the display
    return;
  }
  console.log("Button Zero Clicked");
  const input = document.querySelector("#display");
  input.value += "0";
});

function addButtonClick(operatorMath) {
  console.log("Add Button Clicked");
  const input = document.querySelector("#display");
  const currentValue = input.value;
  if (dataBase.length === 2 && input.value !== "") {
    console.log("Performing addition with existing value in database");
    const input = document.querySelector("#display");
    const currentValue = parseFloat(input.value);
    const result = operate(dataBase[1], dataBase[0], currentValue);
    input.value = result; // Display the result in the input field
    dataBase.length = 0; // Clear the database after operation
    dataBase.push(result); // Store the result in the database
    console.log("Result after addition:", result);
    return;
  }
  if (currentValue === "") {
    console.log("No value to add");
    return; // Prevent adding if no value is present
  }

  if (dataBase.length === 1 && currentValue !== "") {
    dataBase.push(operatorMath);
    input.value = "";
    return;
  }
  dataBase.push(parseFloat(currentValue)); // Store the current value in the database
  console.log("Current Value Added to Database:", currentValue);
  dataBase.push(operatorMath); // Store the operator in the database
  input.value = "";
}
