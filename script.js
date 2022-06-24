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
    if (displayNum === "+" || displayNum === "/" ||
        displayNum === "*" || displayNum === "-") {

        console.log(displayNum);
        display.textContent = displayNum;

    } else if (typeof (displayNum) === "number") {
        console.log("trying");
        console.log(displayNum)
        display.textContent = `${displayNum}`;
    } else {
        currentNum = parseFloat(displayNum);
        display.textContent = `${currentNum}`;
    }
}


let firstNumber = null;
var currentNum = 0;
var finalNum = 0;
let operatorSelection = null;

let button = document.getElementsByClassName("button");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        if (button[i].value === "clear") {
            currentNum = 0;
            finalNum = 0;
            firstNumber = null;
            updateDisplay(currentNum);
        } else if (button[i].classList.contains("operators")) {
            if (button[i].value === "=") {
                if (firstNumber === null || operatorSelection === null) {
                    return;
                } else {
                    console.log(`first num: ${firstNumber}, second num: ${currentNum}, op: ${operatorSelection}`);
                    currentNum = operate(firstNumber, currentNum, operatorSelection);
                    console.log(`current: ${currentNum}`)
                    console.log(typeof (currentNum));

                    updateDisplay(currentNum);

                }
            } else {
                console.log(`button value of operator: ${button[i].value}`);
                updateDisplay(button[i].value);
                firstNumber = currentNum;
                currentNum = 0;
                operatorSelection = button[i].value;
            }

        } else {
            console.log(button[i].value);
            currentNum += button[i].value;
            updateDisplay(currentNum);
        }

    });

}