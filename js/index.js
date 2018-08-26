// VARIABLES
let screen = document.querySelector('#screen'),
    allButtons = document.querySelectorAll('span'),
    clear = document.querySelector('#clear'),
    equals = document.querySelector('#equals'),
    firstNumber = '',
    mathSymbol = '',
    secondNumber = '';

// Main Invocation

document.addEventListener('DOMContentLoaded', function () {
    // Grabs all button and passes into appropriate function for event listener
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
    })
})

// FUNCTIONS

function error() {
    // Handles Error Loading
    screen.textContent = 'ERROR';
    setTimeout(() => {
        screen.textContent = ''
    }, 1000)
}

function doMath() {
    // Handles Math Logic
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
    // Handles Number Input Logic
    number.addEventListener('click', function () {
        if (number.textContent === '0' && screen.textContent === '') {
            error()
        } else if (mathSymbol === '÷' && number.textContent === '0' && secondNumber === '') {
            error()
        } else if (mathSymbol) {
            secondNumber += number.textContent
            screen.textContent += number.textContent
        } else {
            screen.textContent += number.textContent
        }
    })
}

function operatorsDo(operator) {
    // Handles Operator Input Logic
    operator.addEventListener('click', function () {
        if (screen.textContent === '0' || screen.textContent === '') {
            error()
        } else if (firstNumber) {
            mathSymbol = operator.textContent
            secondNumber = ''
            screen.textContent = firstNumber + mathSymbol
        } else {
            firstNumber = screen.textContent
            mathSymbol = operator.textContent
            screen.textContent = firstNumber + mathSymbol
        }
    })
}

function equalDoes(equal) {
    //Handles Equals Input Logic
    equal.addEventListener('click', function () {
        if (firstNumber) {
            doMath()
            mathSymbol = ''
            secondNumber = ''
            screen.textContent = firstNumber
        }
    })
}

function clearDoes(clear) {
    //Handles Clear Functionality
    clear.addEventListener('click', function () {
        firstNumber = ''
        mathSymbol = ''
        secondNumber = ''
        screen.textContent = ''
    })
}