const buttons = document.querySelectorAll('.number');
const wholeOp = document.querySelector('.whole-operation');
const currentOp = document.querySelector('.current-operation');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete')
let operator = document.querySelectorAll('.operation');
let expression = '';
let test1 = ''; 
const operatorArr = ['+', '-', '/', '*'];
clearBtn.addEventListener('click', clear);

function getNumbers() {
  deleteN()
  buttons.forEach((element) => 
    element.addEventListener('click', (el) => {
      const lastChar = String(expression).slice(-2, -1);
      if (operatorArr.includes(lastChar)) {
        currentOp.textContent = '';
        currentOp.textContent += el.target.textContent;
        expression += el.target.textContent;
        wholeOp.textContent += el.target.textContent
      } else if (wholeOp.textContent.slice(-2, -1) == '=') {
        currentOp.textContent += el.target.textContent;
        expression += el.target.textContent;
      } else {
        currentOp.textContent += el.target.textContent;
        expression += el.target.textContent;
        wholeOp.textContent += el.target.textContent
      }
    })
  )
}

function equals() {
  equalBtn.addEventListener('click', () => {
    let [firstNum, operator, secondNum] = expression.split(" ")
    firstNum = parseFloat(firstNum); 
    secondNum = parseFloat(secondNum); 
    if (expression.split(" ").length < 3 || isNaN(secondNum)) {
      return;
    }
    if ((operator == '/') && (secondNum == '0')) {
      alert("HEY you cant divide a number by 0");
      clear();
    } else {
      let result = operate(firstNum, operator, secondNum);
      result = Math.round(result * 1000) / 1000;
      currentOp.textContent =  result; 
      expression = result;
      wholeOp.textContent += ' = ';
    }
  })
}

function getOperator() {
  operator.forEach((element) => 
    element.addEventListener('click', (el) => {
      if (expression === '') return;
      if (operatorArr.some(op => expression.includes(`${op}`))) return;
      operator = el.target.textContent;
      expression += ' ' + el.target.textContent + ' ';
      wholeOp.textContent = expression
    })
  )
}

function clear() {
    expression = '';
    currentOp.textContent = '';
    wholeOp.textContent = '';
}

function deleteN() {
  deleteBtn.addEventListener('click', () => {
    if (wholeOp.textContent.charAt(wholeOp.textContent.length - 2 ) === '=') {
      currentOp.textContent = currentOp.textContent.slice(0, -1);
      expression = currentOp.textContent;
    } else {
      currentOp.textContent = currentOp.textContent.slice(0, -1);
      expression = expression.slice(0, -1);
      wholeOp.textContent = wholeOp.textContent.slice(0, -1);
    }
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

getNumbers();
equals();
getOperator();
clear();