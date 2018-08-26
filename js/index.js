// VARIABLES
let screen = document.querySelector('#screen'),
    allButtons = document.querySelectorAll('span'),
    operators = document.querySelectorAll('.operator'),
    clear = document.querySelector('#clear'),
    zero = document.querySelector('#zero'),
    equals = document.querySelector('#equals'),
    firstNumber = '',
    mathSymbol = '',
    secondNumber = '';

// FUNCTIONS

function error() {
    screen.textContent = 'ERROR';
    setTimeout(() => {
        screen.textContent = ''
    }, 1000)
}

function doMath() {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
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
}

function numbersDo(number) {
    number.addEventListener('click', function () {
        
        if (number.textContent === '0' && screen.textContent === '') {
            error()
        } else if (mathSymbol) {
            secondNumber += number.textContent
            screen.textContent += number.textContent
        } else {
            screen.textContent += number.textContent
        }
        console.log(secondNumber);
    });
};

function operatorsDo(operator) {
    operator.addEventListener('click', function () {
        if (screen.textContent === '0' || '') {
            error()
        } else if (firstNumber) {
            mathSymbol = operator.textContent
            screen.textContent = firstNumber + mathSymbol
            secondNumber = ''
        } else {
            firstNumber = screen.textContent
            mathSymbol = operator.textContent
            screen.textContent = firstNumber + mathSymbol
        }
    });
};

function equalDoes(equal) {
    equal.addEventListener('click', function () {
        if (firstNumber) {
            doMath()
            screen.textContent = firstNumber
            secondNumber = ''
            mathSymbol = ''
        }
    })
}

function clearDoes(clear) {
    clear.addEventListener('click', function () {
        screen.textContent = ''
        firstNumber = ''
        mathSymbol = ''
        secondNumber = ''
    });
};

document.addEventListener('DOMContentLoaded', function () {
    // Main Invocation
    allButtons.forEach(element => {
        if (element === clear) {
            clearDoes(element)
        } else if (element === equals) {
            equalDoes(element)
        } else if (element.className === 'operator') {
            operatorsDo(element)
        } else {
            numbersDo(element)
        }
    });
});
