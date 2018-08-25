document.addEventListener('DOMContentLoaded', function () {
    const screen = document.querySelector('#screen');
    const allButtons = document.querySelectorAll('span');
    const clear = document.querySelector('#clear');
    const zero = document.querySelector('#zero');
    const operators = document.querySelectorAll('.operator');
    const equals = document.querySelector('#equals');

    allButtons.forEach(element => {
        if (element === clear) {
            console.log('i am clear', element)
        } else if (element.className === 'operator') {
            console.log('we are operators', element)
        } else {
            console.log('we are numbers', element)
        }
    })
})