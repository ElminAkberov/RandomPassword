const ranges = document.getElementById("ranges");
const span = document.getElementById("span_value");
const lowerCase = document.getElementById("lowerCase");
const upperCase = document.getElementById("upperCase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const display = document.getElementById("display");
const button = document.querySelector("button");

function show() {
    span.innerHTML = ranges.value;
}

button.onclick = getGenerate

let lowercase = 'abcdefghijklmnopqrstuvwxyz'
let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let number = '0123456789'
let symbol = '!@#$%^&*()_+~`|}{[]\:;?><,./-='

function getGenerate() {
    let kod = ''
    let characters = ''

    if (numbers.checked) {
        characters += number;
    }
    if (lowerCase.checked) {
        characters += lowercase;
    }
    if (upperCase.checked) {
        characters += uppercase;
    }
    if (symbols.checked) {
        characters += symbol;
    }
    for (let i = 0; i < span.innerHTML; i++) {
        kod += characters[rndm(0,characters.length -1)]
        
    }
    display.innerHTML = kod;
}

function rndm(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
