const firstNumber = 0;
const operator = 0;
const secondNumber = 0;

function operate(operator,num1,num2) {
  switch (operator) {
    case '+':
    return add(num1, num2);
    case '-':
    return subtract(num1, num2);
    case '*':
    return multiply(num1, num2);
    case '/':
    return divide(num1, num2);
  default:
    return "Invalid operator";
  } 
}

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
  return a / b;
}
