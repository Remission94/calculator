let firstNumber = 0
let secondNumber = 0
let operator = 0
let operatorMem
let result = document.querySelector("#result")




function operate (firstNumber,operator,secondNumber) {
    if (operator == "+") return parseFloat((+firstNumber + +secondNumber).toFixed(5));
    if (operator == "-") return parseFloat((+firstNumber - +secondNumber).toFixed(5));
    if (operator == "*") return parseFloat((+firstNumber * +secondNumber).toFixed(5));
    if (operator == "/") return parseFloat((+firstNumber / +secondNumber).toFixed(5));
}

const numButtons = document.querySelectorAll(".num");
numButtons.forEach(btn => {
    btn.addEventListener("click", () => { 
        if (btn.textContent == "undo") {
            result.textContent = result.textContent.slice(0,-1)
        } else {
          if (result.textContent == 0) {
            result.textContent = btn.textContent
        } else {
            if (operator != 0) {
                result.textContent = ""
                operatorMem = operator
                operator = 0
            }
            if (btn.textContent == "." && result.textContent.includes(".")) {
            } else {
            result.textContent += btn.textContent
            }
            }
        }
    })
})

const operatorBtn = document.querySelectorAll(".operator")
operatorBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        
        if (firstNumber == 0) {
            firstNumber = result.textContent
        } else if (operator == "=") {

        } else if (firstNumber != 0) {
            operator = operatorMem
            secondNumber = result.textContent
            if (secondNumber == 0 && operator == "/") {
                result.textContent = "Can't divide with 0"
            } else {
            result.textContent = operate(firstNumber, operator, secondNumber)
            firstNumber = result.textContent   
                } 
        }
        operator = btn.textContent
    })
})


const acBtn = document.querySelector("#ac")
acBtn.addEventListener("click", () => {
    result.textContent = "0"
    firstNumber = 0
    secondNumber = 0
    operator = 0
})