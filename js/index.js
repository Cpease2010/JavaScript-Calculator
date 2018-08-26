// VARIABLES
let screen = document.querySelector('#screen'),
    allButtons = document.querySelectorAll('span'),
    operators = document.querySelectorAll('.operator'),
    clear = document.querySelector('#clear'),
    zero = document.querySelector('#zero'),
    equals = document.querySelector('#equals'),
    firstNumber = undefined,
    mathSymbol = undefined,
    secondNumber = undefined;

// FUNCTIONS

function error() {
    screen.textContent = 'ERROR';
    setTimeout(() => {
        screen.textContent = ''
    }, 1000)
}

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
}

function numbersDo(number) {
    number.addEventListener('click', function () {
        if (number.textContent === '0' && screen.textContent === '') {
            error()
        } else if (mathSymbol) {
            screen.textContent = ''
            screen.textContent += number.textContent
        } else {
            screen.textContent += number.textContent
        }
    });
};

function operatorsDo(operator) {
    operator.addEventListener('click', function () {
        if (screen.textContent === '0' || '') {
            error()
        } else if (firstNumber) {
            mathSymbol = operator.textContent
            screen.textContent = firstNumber + mathSymbol
        } else {
            firstNumber = parseInt(screen.textContent)
            mathSymbol = operator.textContent
            screen.textContent = firstNumber + mathSymbol
        }
    });
};

function equalDoes(equal) {
    equal.addEventListener('click', function () {
        if (firstNumber) {
            secondNumber = parseInt(screen.textContent)
            doMath()
            screen.textContent = firstNumber
            secondNumber = undefined
            mathSymbol = undefined
        }
    })
}

function clearDoes(clear) {
    clear.addEventListener('click', function () {
        screen.textContent = ''
        firstNumber = undefined
        mathSymbol = undefined
        secondNumber = undefined
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