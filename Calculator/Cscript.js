let display = document.getElementById('display');
let shouldClearDisplay = false;

function appendSymbol(symbol) {
    if (shouldClearDisplay) {
        display.value = '';
        shouldClearDisplay = false;
    }
    display.value += symbol;
}

function clearDisplay() {
    display.value = '';
    shouldClearDisplay = false;
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
        shouldClearDisplay = true;
    } catch (error) {
        display.value = 'Error';
    }
}

function squareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
        shouldClearDisplay = true;
    } catch (error) {
        display.value = 'Error';
    }
}

function square() {
    try {
        display.value = Math.pow(eval(display.value), 2);
        shouldClearDisplay = true;
    } catch (error) {
        display.value = 'Error';
    }
}
