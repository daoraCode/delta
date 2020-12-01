console.log('test')

function sayHello(name) {
    if (typeof name === 'undefined') {
        name = '?'
    }
    console.log(`hello ${name}`)
}
sayHello();




function sayHello2(name = '?') {
    console.log(`hello ${name}`)
}
sayHello2(); // hello ?
sayHello2('Theophile'); // hello Theophile



// fonction anonyme
const calculate = function(number1 = 0, number2 = 0) {
    return number1 + number2;
}
console.log(calculate(2, 22)); // 24


// fonction fléchée
const calculate2 = (number1 = 15, number2 = 15) => number1 + number2;
console.log(calculate2(2, 22)); // 24


// iife immediatly invoked function expression
// c'est une fonction qui se lanece elle même
// methods
(function soren() {
    console.log(`hello soren`) // hello soren
})(); 

(function anne(name) {
    console.log(`hello ${name}`)
})('anne')

