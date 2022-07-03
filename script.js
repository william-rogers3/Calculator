function operate(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    }
}

function roundNumber(numInput) {
    let finalNumber = Math.round((numInput + Number.EPSILON) * 100000) / 100000;
    return finalNumber;
}

function updateDisplay(displayNum) {
    const display = document.getElementById("current-num");
    if (typeof (displayNum) === "number") {
        console.log(displayNum)
        display.textContent = `${displayNum}`;
    } else if (typeof(displayNum) === "string" && displayNum.includes(".")) {
        display.textContent = displayNum;
    } else {
        currentNum = parseFloat(displayNum);
        display.textContent = `${currentNum}`;
    }
}


let firstNumber = null;
let currentNum = 0;
let secondNumber = null;
let operatorSelection = null;

let button = document.getElementsByClassName("button");
let operators = document.getElementsByClassName("operators");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        for (let i = 0; i < operators.length - 1; i++) {
            operators[i].style.backgroundColor = "#84369b";
        }

        if (button[i].value === "clear") {
            currentNum = 0;
            firstNumber = null;
            secondNumber = null;
            operatorSelection = null;
            updateDisplay(currentNum);
        } else if (button[i].classList.contains("operators")) {
            if (button[i].value === "=") {
                if (firstNumber === null || operatorSelection === null) {
                    return;
                } else {
                    firstNumber = parseFloat(firstNumber);
                    secondNumber = parseFloat(currentNum);

                    console.log(`first num: ${firstNumber}, second num: ${secondNumber}, op: ${operatorSelection}`);
                    currentNum = roundNumber(operate(firstNumber, secondNumber, operatorSelection));
                    console.log(currentNum);
                    updateDisplay(currentNum);

                }
            } else {
                console.log(`button value of operator: ${button[i].value}`);
                button[i].style.backgroundColor = "#D183E8";
                if (!operatorSelection) {
                    firstNumber = currentNum;
                }
                currentNum = 0;
                operatorSelection = button[i].value;
            }

        } else if (button[i].value === ".") {
            currentNum += "."
            updateDisplay(currentNum);
        } else if (button[i].value === "sign") {
        
        } 
        else {
            console.log(button[i].value);
            currentNum += button[i].value;
            updateDisplay(currentNum);
        }

    });

}