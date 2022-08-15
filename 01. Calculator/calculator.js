class Calculator {
    constructor(previousNumberText, currentNumberText) {
        this.previousNumberText = previousNumberText
        this.currentNumberText = currentNumberText
        this.clear()
    }

    clear() {
        this.previousNumber = ''
        this.currentNumber = ''
        this.operation = undefined
    }

    delete() {
        this.currentNumber = this.currentNumber.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentNumber === '') return
        if (this.previousNumber !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousNumber = this.currentNumber
        this.currentNumber = ''
    }

    compute() {
        let result
        const previous = parseFloat(this.previousNumber)
        const current = parseFloat(this.currentNumber)
        if (isNaN(previous) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                result = Math.round((previous + current) * 1e12) / 1e12
                break
            case '-':
                result = Math.round((previous - current) * 1e12) / 1e12
                break
            case 'x':
                result = Math.round((previous * current) * 1e12) / 1e12
                break
            case '÷':
                result = Math.round((previous / current) * 1e12) / 1e12
                break
            default:
                return
        }
        this.currentNumber = result
        this.operation = undefined
        this.previousNumber = ''
    }

    updateDisplay() {
        this.currentNumberText.innerText = this.currentNumber
        if (this.operation != null) {
            this.previousNumberText.innerText = `${this.previousNumber} ${this.operation}`
        } else {
            this.previousNumberText.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operation')
const equalsButton = document.getElementById('equals')
const previousNumberText = document.getElementById('previous-number')
const currentNumberText = document.getElementById('current-number')
const clearButton = document.getElementById('clear')
const deleteButton = document.getElementById('delete')

const calculator = new Calculator(previousNumberText, currentNumberText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})