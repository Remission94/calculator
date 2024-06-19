let firstNumber = 0
let secondNumber = 0
let operator = 0
let operatorMem
let result = document.querySelector("#result")




function operate (firstNumber,operator,secondNumber) {
    if (operator == "+") return +firstNumber + +secondNumber;
    if (operator == "-") return +firstNumber - +secondNumber;
    if (operator == "*") return +firstNumber * +secondNumber;
    if (operator == "/") return +firstNumber / +secondNumber;
}



function alertMe () {
    alert("HI")
}

const numButtons = document.querySelectorAll(".num");
numButtons.forEach(btn => {
    btn.addEventListener("click", () => { 
        if (result.textContent == 0) {
            result.textContent = btn.textContent
        } else {
            if (operator != 0) {
                result.textContent = ""
                operatorMem = operator
                operator = 0
            }
            result.textContent += btn.textContent
        }
    })
})

const operatorBtn = document.querySelectorAll(".operator")
operatorBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        operator = operatorMem
        if (firstNumber == 0) {
            firstNumber = result.textContent
            operator = btn.textContent
        } else if (firstNumber != 0 ) {
            secondNumber = result.textContent
            result.textContent = operate(firstNumber, operator, secondNumber)
            firstNumber = result.textContent
            if (operator != "=") {
                operator = btn.textContent
            }
        }
        
    })
})


const acBtn = document.querySelector("#ac")
acBtn.addEventListener("click", () => {
    result.textContent = "0"
    firstNumber = 0
    secondNumber = 0
    operator = 0
})