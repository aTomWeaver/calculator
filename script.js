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

// function exponentiate(a, b) {
//     let c = a;
//     for (let i = 1; i < b; i++) {
//         a = a * c;
//     }
//     return a;
// }

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