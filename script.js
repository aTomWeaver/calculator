const screen = document.querySelector('.screen-contents');
const buttons = document.querySelector('.btn-container');
const eqlBtn = document.getElementById('equals');
const clrBtn = document.getElementById('clear');

let displayValue;
let firstVal, secondVal, operator;
let opPressed = false;

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

function screenClear() {
    screen.innerText = '';
    displayValue = 'none';
}

const NumBtns = buttons.addEventListener('click', function(e){
    if(e.target.dataset.num) {
        if (opPressed) { // if an operator button has already been pressed, refresh the screen for the next value
            screenClear();
            opPressed = false;
        }
        screen.innerText += e.target.dataset.num;
        displayValue = parseInt(screen.innerText);
    } 
});

eqlBtn.addEventListener('click', () => {
    if (firstVal) {
        secondVal = displayValue;
        screen.innerText = operate(firstVal, secondVal, operator);
    }
});

const operators = buttons.addEventListener('click', (e) => {
    if (e.target.dataset.op) {
        operator = e.target.dataset.op;
        firstVal = displayValue;
        opPressed = true;
    }
});

clrBtn.addEventListener('click', () => {
    screenClear();
    firstVal = '';
    secondVal = '';
});