const screen = document.querySelector('.screen-contents');
const buttons = document.querySelector('.btn-container');
const opContainer = document.getElementById('op-container');
const eqlBtn = document.getElementById('equals');
const clrBtn = document.getElementById('clear');
const numButtons = document.querySelectorAll('[data-num]');

numButtons.forEach((button) => button.addEventListener('click', () => pushNumber(button.textContent)));
eqlBtn.addEventListener('click', evaluate);

let displayVal = 0;
let firstVal = null;
let secondVal = null;
let operator = null;
let opPressed = false;
let lastPressed = '';

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
    nullVals();
}

function screenClear() {
    screen.innerText = null;
    displayVal = 0;
    opPressed = false;
}

function nullVals() {
    firstVal = null;
    secondVal = null;
    operator = null;
}

function pushNumber(num) {
    if (opPressed) { // if an operator button has already been pressed, refresh the screen for the next value
        screenClear();
    }
    screen.innerText += num;
    displayVal = parseInt(screen.innerText);
    lastPressed = 'num';
};

function evaluate() {
    if (firstVal) {
        secondVal = displayVal;
        screen.innerText = operate(firstVal, secondVal, operator);
        displayVal = parseInt(screen.innerText);
        nullVals();
    }
}

const operators = opContainer.addEventListener('click', (e) => {
    if (displayVal === null)  return; // if no numbers have been entered, ignore;
    if (lastPressed === 'op') {
        operator = e.target.dataset.op;
    } else if (operator !== null && firstVal !== null) {
        screen.innerText = operate(firstVal, displayVal, operator);
        displayVal = parseInt(screen.innerText);
        firstVal = displayVal;
        secondVal = null;
        operator = e.target.dataset.op;
    } else {
        firstVal = displayVal;
        operator = e.target.dataset.op;
    }
    opPressed = true;
    lastPressed = 'op';
});

clrBtn.addEventListener('click', () => {
    screenClear();
    nullVals();
});


