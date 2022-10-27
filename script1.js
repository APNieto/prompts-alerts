// let a = new Boolean(false);
// console.log(typeof(a));
// console.log(Boolean(a));


// if (new Boolean(false)) {
//     console.log('Pimba!');
// } else {
//     console.log(':( :(');
// }


// let agasajado = 'Daniel';
// let nombre = 'Pedro';
// (nombre === agasajado) ? console.log('Feliz cumple!') : console.log('Pasá!');


// let answer = prompt('Wann wurde Fredde geboren?');
// answer = answer.toLowerCase();
// answer == 'november' ? window.location = "https://bellesa.co" : window.location = 'https://nyt.com'


// let flag = 0;
// while (!flag) {
//     let number = Number(prompt('Please enter an integer: '));    
//     if (number) {
//         flag = 1;
//         let modulo = number % 2;
//         modulo ? alert('Es ist eine ungerade Zahl.') : alert('Es ist schon eine gerade Zahl');        
//     } else {
//         alert('Bitte geben Sie noch mal eine gültige Nummer.');
//     }
// }


// // Ask for age
// // If invalid or negative, notify, and do nothing else
// // If over 21, greet and congratulate
// // If even, tell
// let age = Number(prompt('Please enter your age: '));
// age < 0 ? alert('Age not valid')
//     : (age > 21) ? alert('Welcome and congratulations!') : {};
// !(age % 2) ? alert('Your age is an even number, you must be some kind of mason.') : {};


// let a = 12;
// let b = 
//     a == '10'
//     ? 'diez'
//     : a == '11'
//     ? 'once'
//     : a == '12'
//     ? 'doce'
//     : 'ni idea gurí.'
// console.log(`b = ${b}.`);  // prints: 'b = doce.'


let secretNumber = Math.round(Math.random()*10);
let userGuess;
flag = 1;

while (flag) {
    userGuess = Number(prompt('Please guess a number from 0 to 10: '));
    userGuess == secretNumber
    ? alert("That's the correct number! Welcome!")
    : userGuess < secretNumber
    ? alert('Your number is smaller than the secret number.')
    : userGuess > secretNumber
    ? alert('Your number is bigger than the secret number')
    : {};
    flag = 
        userGuess == secretNumber
        ?  0
        : {};
}

