/**
 * Created by John Doe on 17.10.2017.
 */
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    initCalculator();
  }
};

function initCalculator() {
  var
    calculator = document.getElementById('calculator'),
    first = document.getElementById('first-number'),
    second = document.getElementById('second-number'),
    action = document.getElementById('action');

  calculator.onsubmit = function(event) {
    var
      firstNumber = parseFloat(first.value),
      secondNumber = parseFloat(second.value),
      actionType = action.value.trim(),
      result = calculate(firstNumber, secondNumber, actionType);
      
    event.preventDefault();

    if (result) {
      resultRender(firstNumber, secondNumber, actionType, result);
    }
    
    this.reset();
  }
}

function calculate(firstNumber, secondNumber, action) {
  var result;

  switch (action) { 
    case '+':
    case 'plus':
    result = firstNumber + secondNumber;
    break;
    case '-':
    case 'minus':
    result = firstNumber - secondNumber;
    break;
    case '*':
    case  'multiply':
    result = firstNumber * secondNumber;
    break;
    case '/':
    case 'divide':
    result = firstNumber / secondNumber;
    break;
    case '^':
    case 'elevate':
    result = Math.pow(firstNumber, secondNumber);
    break;
} 
  return result;
}

 function pow(multiplyNumber, evaluator) {
  var result = 1;
  var isNegative = evaluator >= 0;

  elevate = Math.abs(evaluator);

  
    for (var i = 0; i < evaluator; i++) {
    result = result * multiplyNumber; 
  }    
      return isNegative ? 1 / result : result;
    
  }
 

function resultRender(firstNumber, secondNumber, action, result) {
  var
    results = document.getElementById('results'),
    resultPreviousLine = results.firstChild,
    resultLine = document.createElement('li'),
    resultText = document.createTextNode(firstNumber + ' ' + action + ' ' + secondNumber + ' = ' + result);

  resultLine.appendChild(resultText);

  if (resultPreviousLine) {
    results.insertBefore(resultLine, resultPreviousLine);
  } else {
    results.appendChild(resultLine);
  }
}
