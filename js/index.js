// VARIABLES
let screen = document.querySelector('#screen'),
    allButtons = document.querySelectorAll('span'),
    operators = document.querySelectorAll('.operator'),
    clear = document.querySelector('#clear'),
    zero = document.querySelector('#zero'),
    equals = document.querySelector('#equals'),
    dataArray = [undefined, undefined, undefined],
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
        console.log(dataArray)
    });
};

function operatorsDo(operatorElement) {
    operatorElement.addEventListener('click', function () {
        if (screen.textContent === '') {
            alert('Starting with nothing is a hard road! i am in operators do')
        } else if (dataArray[1]) {
            dataArray[1] = operatorElement.textContent
            screen.textContent = dataArray.join('')
        } else {
            dataArray[0] = screen.textContent
            dataArray[1] = operatorElement.textContent
            screen.textContent = dataArray.join('')
        }
        console.log(dataArray)
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