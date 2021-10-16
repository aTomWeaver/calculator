const screen = document.querySelector('.screen-contents');
const buttons = document.querySelector('.button-container');
let displayValue;

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

window.addEventListener('click', function(e){
    if(e.target.dataset.num) {
        screen.innerText += e.target.dataset.num;
        displayValue = parseInt(screen.innerText);
    } else if (e.target.dataset.clr) {
        screen.innerText = '';
        displayValue = 'none';
    }
})
