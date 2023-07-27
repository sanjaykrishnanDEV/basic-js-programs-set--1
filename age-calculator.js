//--task--1--age-calculator;
//--task--1--age-calculator;

const presentYear = 2023;   
function age(){
    let userName = prompt('enter your username: ');
    let birthYear = Number(prompt('enter your birth year: '));
    let age = presentYear - birthYear;
    return (`${userName} is ${age} years old`);
}

console.log(age());
