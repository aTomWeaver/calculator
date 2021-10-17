const screen = document.querySelector('.screen-contents');
const buttons = document.querySelector('.btn-container');
const opContainer = document.getElementById('op-container');
const eqlBtn = document.getElementById('equals');
const clrBtn = document.getElementById('clear');

let displayVal = null;
let firstVal = null;
let secondVal = null;
let operator = null;

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
    screen.innerText = null;
    displayVal = null;
}

function nullVals() {
    firstVal = null;
    secondVal = null;
    operator = null;
}

const NumBtns = buttons.addEventListener('click', function (e) {
    if (e.target.dataset.num) {
        if (operator !== null) { // if an operator button has already been pressed, refresh the screen for the next value
            screenClear();
        }
        screen.innerText += e.target.dataset.num;
        displayVal = parseInt(screen.innerText);
    }
});

eqlBtn.addEventListener('click', () => {
    if (firstVal) {
        secondVal = displayVal;
        screen.innerText = operate(firstVal, secondVal, operator);
        displayVal = parseInt(screen.innerText);
        nullVals();
    }
});

const operators = opContainer.addEventListener('click', (e) => {
    if (displayVal === null) { 
        return; // if no numbers have been entered, ignore;
    } else if (operator !== null && firstVal !== null) {
        screen.innerText = operate(firstVal, displayVal, operator);
        displayVal = parseInt(screen.innerText);
        firstVal = displayVal;
        secondVal = null;
    } else {
        firstVal = displayVal;
        operator = e.target.dataset.op;
    }
});

clrBtn.addEventListener('click', () => {
    screenClear();
    nullVals();
});