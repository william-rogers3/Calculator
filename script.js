function operate(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            return "Und";
        }
        return num1 / num2;
    }
}

function roundNumber(numInput) {
    if (numInput === "Und") {
        return "Und";
    }
    let finalNumber = Math.round((numInput + Number.EPSILON) * 100000) / 100000;
    return finalNumber;
}

function updateDisplay(displayNum) {
    const display = document.getElementById("current-num");
    if (displayNum == "-") {
        display.textContent = "-";
    } else if (typeof (displayNum) === "number" && displayNum != NaN) {
        console.log(displayNum)
        display.textContent = `${displayNum}`;
    } else if (typeof (displayNum) === "string" && displayNum.includes(".")) {
        display.textContent = displayNum;
    } else if (displayNum === "Und") {
        display.textContent = displayNum;
    } else {
        currentNum = parseFloat(displayNum);
        display.textContent = `${currentNum}`;
    }
}


let firstNum = null;
let currentNum = 0;
let secondNum = null;
let operatorSelection = null;
let finalNum = null;

let button = document.getElementsByClassName("button");
let operators = document.getElementsByClassName("operators");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        for (let i = 0; i < operators.length - 1; i++) {
            operators[i].style.backgroundColor = "#84369b";
        }

        if (button[i].value === "clear") {
            currentNum = 0;
            firstNum = null;
            secondNum = null;
            operatorSelection = null;
            updateDisplay(currentNum);
        } else if (button[i].classList.contains("operators")) {
            if (button[i].value === "=") {
                if (firstNum === null || operatorSelection === null) {
                    return;
                } else {
                    firstNum = parseFloat(firstNum);
                    secondNum = parseFloat(currentNum);

                    console.log(`first num: ${firstNum}, second num: ${secondNum}, op: ${operatorSelection}`);
                    currentNum = roundNumber(operate(firstNum, secondNum, operatorSelection));
                    finalNum = currentNum;
                    updateDisplay(currentNum);
                    firstNum = null;
                    secondNum = null;
                    operatorSelection = null;
                }
            } else {
                console.log(`button value of operator: ${button[i].value}`);
                button[i].style.backgroundColor = "#D183E8";
                if (!operatorSelection) {
                    firstNum = currentNum;
                }
                console.log("first num: " + firstNum);
                currentNum = 0;
                operatorSelection = button[i].value;
            }

        } else if (button[i].value === ".") {
            currentNum = currentNum.toString();
            if (currentNum.includes(".")) {
                return;
            }
            currentNum += "."
            updateDisplay(currentNum);
        } else if (button[i].value === "sign") {
            if (currentNum == 0) {
                currentNum = "-";
                updateDisplay(currentNum);
            } else if (currentNum === "-") {
                currentNum = 0;
                updateDisplay(currentNum);
            } else {
                currentNum *= -1;
                updateDisplay(currentNum);
            }
        } else {
            console.log(button[i].value);
            currentNum += button[i].value;
            updateDisplay(currentNum);
        }

    });

}