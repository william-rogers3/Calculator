function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    let difference = num1 - num2;
    return difference;
}

function multiply(num1, num2) {
    let product = num1 * num2;
    return product;
}

function divide(num1, num2) {
    let quotient = num1 / num2;
    return quotient;
}

function operate(num1, num2, operator) {
    if (operator === "+") {
        let finalNum = add(num1, num2);
        return finalNum;
    } else if (operator === "-") {
        let finalNum = subtract(num1, num2);
        return finalNum;
    } else if (operator === "*") {
        let finalNum = multiply(num1, num2);
        return finalNum;
    } else if (operator === "/") {
        let finalNum = divide(num1, num2);
        return finalNum;
    }
}



let button = document.getElementsByClassName("button");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        console.log(button[i].value)
        return button[i].nodeValue;
    });
}

let currentNum = 0;

console.log(operate(2, 1.5, "*"))