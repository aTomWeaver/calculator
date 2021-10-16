const screen = document.querySelector('.screen-contents');
const buttons = document.querySelector('.btn-container');
const eqlBtn = document.getElementById('equals');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const timesBtn = document.getElementById('times');
const divideBtn = document.getElementById('divide');

let displayValue;
let firstVal, secondVal, operator;

function add(a, b) { 
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) { 
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

const NumsAndClearBtns = buttons.addEventListener('click', function(e){
    if(e.target.dataset.num) {
            screen.innerText += e.target.dataset.num;
            displayValue = parseInt(screen.innerText);
    } else if (e.target.dataset.clr) {
        screen.innerText = '';
        displayValue = 'none';
    }
})

eqlBtn.addEventListener('click', () => {
    if (firstVal) {
        secondVal = displayValue;
        screen.innerText = operate(firstVal, secondVal, operator);
    } 
});

plusBtn.addEventListener('click', () => {
    operator = '+'
    firstVal = displayValue;
    // clear the screen
    screen.innerText = '';
    displayValue = 'none';
});

minusBtn.addEventListener('click', () => {
    operator = '-'
    firstVal = displayValue;
    // clear the screen
    screen.innerText = '';
    displayValue = 'none';
});

timesBtn.addEventListener('click', () => {
    operator = '*'
    firstVal = displayValue;
    // clear the screen
    screen.innerText = '';
    displayValue = 'none';
});

divideBtn.addEventListener('click', () => {
    operator = '/'
    firstVal = displayValue;
    // clear the screen
    screen.innerText = '';
    displayValue = 'none';
});