// Variáveis globais para guardar o valor e operador
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Função para adicionar um número ao display
function appendNumber(number) {
    currentNumber += number;
    updateDisplay();
}

// Função para definir o operador
function setOperator(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

// Função para calcular o resultado
function calculate() {
    if (previousNumber === '' || currentNumber === '' || operator === '') return;
    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentNumber = result;
    operator = '';
    previousNumber = '';
    updateDisplay();
}

// Função para limpar o display e resetar variáveis
function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay();
}

// Função para atualizar o display com o valor atual
function updateDisplay() {
    document.getElementById('display').value = currentNumber;
}
