// const operation = '8 + 9'; // This is just an example
// let [firstNum, operator, secondNum] = operation.split(" ");
const buttons = document.querySelectorAll('.number');
let wholeOp = document.querySelector('.whole-operation');
const currentOp = document.querySelector('.current-operation');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
let operator = document.querySelectorAll('.operation');
let expression = '';

function getNumbers() {
  buttons.forEach((element) => 
    element.addEventListener('click', (el) => {
      currentOp.textContent += el.target.textContent;
      expression += el.target.textContent;
    })
  )
}

function equals() {
  equalBtn.addEventListener('click', () => {
    let [firstNum, operator, secondNum] = expression.split(" ")
    firstNum = parseFloat(firstNum); 
    secondNum = parseFloat(secondNum); 
    let result = operate(firstNum, operator, secondNum);
    currentOp.textContent =  result; 
    expression = result;
  })
}

function getOperator() {
  operator.forEach((element) => 
    element.addEventListener('click', (el) => {
      operator = el.target.textContent;
      expression += ' ' + el.target.textContent + ' ';
      console.log('test');
      currentOp.textContent =  ''; 
    })
  )
}

function clear() {
  clearBtn.addEventListener('click', () => {
    expression = '';
    currentOp.textContent = '';
  })
}

function operate(firstNum, operator, secondNum) {
  let result;
  
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

getNumbers();
equals();
getOperator();
clear();