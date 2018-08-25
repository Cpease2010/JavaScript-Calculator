// VARIABLES
let screen = document.querySelector('#screen'),
    allButtons = document.querySelectorAll('span'),
    operators = document.querySelectorAll('.operator'),
    clear = document.querySelector('#clear'),
    zero = document.querySelector('#zero'),
    equals = document.querySelector('#equals'),
    firstNumber,
    operator,
    secondNumber,
    totalvalue;

// FUNCTIONS
function numbersDo(numberElement) {
    numberElement.addEventListener('click', function () {
        if (numberElement.textContent === '0' && screen.textContent === '') {
            alert('Starting with nothing is a hard road! i am in numbersDo')
        } else {
            screen.textContent += numberElement.textContent
        }
    });
};

function operatorsDo(operatorElement) {
    operatorElement.addEventListener('click', function () {
        if (screen.textContent === '') {
            alert('Starting with nothing is a hard road! i am in operators do')
        } else {
            screen.textContent += operatorElement.textContent
        }
    });
};

function clearDoes(clearElement) {
    clearElement.addEventListener('click', function () {
        screen.textContent = ''
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