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

function updateDisplay(displayNum) {
    const display = document.getElementById("current-num"); 
    currentNum = parseFloat(displayNum);
    display.textContent = `${currentNum}`;
    
}

var currentNum = 0;

let button = document.getElementsByClassName("button");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        if (button[i].value === "clear") {
            currentNum = 0;
        }
        console.log(button[i].value);
        currentNum += button[i].value;
        updateDisplay(currentNum);
    });
}



