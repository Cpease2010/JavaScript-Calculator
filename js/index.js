// VARIABLES
let screen = document.querySelector('#screen'),
    allButtons = document.querySelectorAll('span'),
    operators = document.querySelectorAll('.operator'),
    clear = document.querySelector('#clear'),
    zero = document.querySelector('#zero'),
    equals = document.querySelector('#equals'),
    firstNumber,
    mathSymbol,
    screenLength,
    secondNumber;

// Main Invocation
document.addEventListener('DOMContentLoaded', function () {
    allButtons.forEach(element => {
        if (element === clear) {
            clearDoes(element);
        } else if (element.className === 'operator') {
            operatorsDo(element);
        } else {
            numbersDo(element);
        };
    });
});

    // FUNCTIONS

function numbersDo(numberElement) {
    numberElement.addEventListener('click', function () {
        if (numberElement.textContent === '0' && screen.textContent === '') {
            screen.textContent = 'ERROR'
        } else {
            screen.textContent += numberElement.textContent
        };
    });
};

function operatorsDo(operatorElement) {
    operatorElement.addEventListener('click', function () {
        if (screen.textContent === '' || screen.textContent === 'ERROR') {
            screen.textContent = 'ERROR'
        } else if (operatorElement === equals && firstNumber) {
            doMath();
        } else if (screen.textContent === '0') {
            alert('I CANNOT START WITH 0!')
        } else if (firstNumber) {
            doMath();
            mathSymbol = operatorElement.textContent
            screen.textContent += operatorElement.textContent
            screenLength = screen.textContent.length
        } else {            
            firstNumber = parseInt(screen.textContent);
            mathSymbol = operatorElement.textContent;
            screen.textContent += operatorElement.textContent;
            screenLength = screen.textContent.length
        };
    });
};

function clearDoes(clearElement) {
    clearElement.addEventListener('click', function () {
        screen.textContent = '';
        firstNumber = undefined;
        mathSymbol = undefined;
        secondNumber = undefined;
    });
};

function doMath() {
    secondNumber = parseInt(screen.textContent.slice(screenLength,))
    console.log(secondNumber)
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
    };
    secondNumber = undefined;
    mathSymbol = undefined;
    screen.textContent = firstNumber;
};

