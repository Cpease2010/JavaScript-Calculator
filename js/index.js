document.addEventListener('DOMContentLoaded', function () {

    // VARIABLES
    const screen = document.querySelector('#screen');
    const allButtons = document.querySelectorAll('span');
    const operators = document.querySelectorAll('.operator');
    const clear = document.querySelector('#clear');
    const zero = document.querySelector('#zero');
    const equals = document.querySelector('#equals');

    // FUNCTIONS
    function numbersDo(numberElement) {
        numberElement.addEventListener('click', function () {
            screen.textContent += numberElement.textContent 
        });
    };

    function operatorsDo(operatorElement) {
        operatorElement.addEventListener('click', function () {
            screen.textContent += operatorElement.textContent
        });
    };

    function clearDoes(clearElement) {
        clearElement.addEventListener('click', function () {
            screen.textContent = ''    
        });
    };

    // LOGIC
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