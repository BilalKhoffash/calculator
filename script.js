const operation = '8 + 9'; // This is just an example
let [firstNum, operator, secondNum] = operation.split(" ");

function operate() {
  let result;
  firstNum = parseFloat(firstNum); 
  secondNum = parseFloat(secondNum);

  switch(operator) {
    case '+':
      result = addNumbers(firstNum, secondNum);
      break;
    case '-':
      result = subtractNumbers(firstNum, secondNum);
      break;
    case '*':
      result = multiplyNumbers(firstNum, secondNum);
      break;
    case '/':
      result = divideNumbers(firstNum, secondNum);
      break;
  }
  return result
}

function addNumbers(a, b) {
  return a + b;
}

function subtractNumbers(a, b) {
  return a - b;
}

function multiplyNumbers(a, b) {
  return a * b;
}

function divideNumbers(a, b) {
  return a / b;
}

console.log(operate());