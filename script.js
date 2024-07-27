const buttons = document.querySelectorAll('.number');
const wholeOp = document.querySelector('.whole-operation');
const currentOp = document.querySelector('.current-operation');
const equalBtn = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete')
let operator = document.querySelectorAll('.operation');
let expression = '';
const operatorArr = ['+', '-', '/', '*'];
clearBtn.addEventListener('click', clear);

function getNumbers() {
  deleteN()
  buttons.forEach((element) => 
    element.addEventListener('click', (el) => {
      if (el.target.textContent === '.' ) {
        if (currentOp.textContent.includes('.'))  {
          return 
        } 
      }
      const lastChar = String(expression).slice(-2, -1);
      if (operatorArr.includes(lastChar)) {
        currentOp.textContent = '';
      } 
      currentOp.textContent += el.target.textContent;
      expression += el.target.textContent;
    })
  )
}

function equals() {
  equalBtn.addEventListener('click', () => {
    if (wholeOp.textContent.includes('=')) return;
    let [firstNum, operator, secondNum] = expression.split(" ")
    firstNum = parseFloat(firstNum); 
    secondNum = parseFloat(secondNum); 
    if (expression.split(" ").length < 3 || isNaN(secondNum)) {
      return;
    }
    wholeOp.textContent += currentOp.textContent;
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
      if (operatorArr.some(op => expression.toString().includes(`${op}`))) return;
      operator = el.target.textContent;
      expression += ' ' + el.target.textContent + ' ';
      wholeOp.textContent = expression;
      currentOp.textContent = "Enter a number";
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
    const check = wholeOp.textContent.charAt(wholeOp.textContent.length - 2)
    if (check === '=') {
      currentOp.textContent = currentOp.textContent.slice(0, -1);
      expression = currentOp.textContent;
    } else if (operatorArr.includes(check) && !(Number(currentOp.textContent))){
      return;
    } else {
      currentOp.textContent = currentOp.textContent.slice(0, -1);
      expression = expression.slice(0, -1);
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