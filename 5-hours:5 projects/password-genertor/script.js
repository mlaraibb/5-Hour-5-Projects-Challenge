const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

//asigning letters/number/sybmols
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*90-+=';

//to get random numbers
function getUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}
function getLowerCase(){
    return upperLetters[Math.floor(Math.random() * lowerLetters.length)];
}
function getNumbersCase(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}
function getSymbols(){
    return symbols[Math.floor(Math.random() * upperLetters.length)];
}
//to generate password
function generatePassword(){
    const len = lenEl.value;
    let password = "";

if(upperEl.checked){
    password+= getUpperCase();

}
if(lowerEl.checked){
    password+= getLowerCase();
}
if(numberEl.checked){
    password+=getNumbersCase();
}
if(symbolEl.checked){
    password+= getSymbols();
}
pwEl.innerText = password;
}
//button generate
function generatePassword(){
    const len = lenEl.value;

    let password = '';
if(upperEl.checked){
    password += getNumbersCase();
}
if(lowerEl.checked){
    password += getLowerCase();
}
if(numberEl.checked){
    password += getNumbersCase();
}
if(symbolEl.checked){
    password += getSymbols();
}
for(let i = password.length; i<len; i++){
    const x = generateX();
    password += x;
}
pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUpperCase());
    }

    if (lowerEl.checked) {
        xs.push(getLowerCase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbols());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener("click", generatePassword);

