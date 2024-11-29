let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    
}

function deleteLastCharacter()
 {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
 }

 
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
