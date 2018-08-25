// VARIABLES
let screen = document.querySelector('#screen'),
    allButtons = document.querySelectorAll('span'),
    operators = document.querySelectorAll('.operator'),
    clear = document.querySelector('#clear'),
    zero = document.querySelector('#zero'),
    equals = document.querySelector('#equals'),
    firstNumber,
    mathSymbol,
    secondNumber,
// FUNCTIONS

function clearAll() {
    screen.textContent = ''
    firstNumber = undefined
    mathSymbol = undefined
    secondNumber = undefined
}

function numbersDo(numberElement) {
    numberElement.addEventListener('click', function () {
        if (numberElement.textContent === '0' && screen.textContent === '') {
            alert('Starting with nothing is a hard road! i am in numbersDo')
        } else {
            screen.textContent += numberElement.textContent
        }
    });
};

function doMath() {
    switch (mathSymbol) {
        case 'x':
        firstNumber = firstNumber * secondNumber
            break;
        case '÷':
        firstNumber = firstNumber / secondNumber
            break;
        case '+':
        firstNumber = firstNumber + secondNumber
            break;
        case '-':
        firstNumber = firstNumber - secondNumber
            break;
    }
    secondNumber = undefined
    mathSymbol = undefined
    screen.textContent = firstNumber
}

function operatorsDo(operatorElement) {
    operatorElement.addEventListener('click', function () {
        if (firstNumber) {
            secondNumber = parseInt(screen.textContent)
            doMath()
        } else {
            firstNumber = parseInt(screen.textContent)
            mathSymbol = operatorElement.textContent
            screen.textContent = ''
        }
    });
};

function clearDoes(clearElement) {
    clearElement.addEventListener('click', function () {
        clearAll()
        console.log(firstNumber, mathSymbol, secondNumber);
    });
};

document.addEventListener('DOMContentLoaded', function () {

    // Main Invocation
    allButtons.forEach(element => {
        if (element === clear) {
            // console.log('i am clear', element)
            clearDoes(element)
        } else if (element.className === 'operator') {
            // console.log('we are operators', element)
            operatorsDo(element)
        } else {
            // console.log('we are numbers', element)
            numbersDo(element)
        }
    });
});