// Callback Definition
// A callback is a function passed as argument into another function to be executed later or after a task is completed.

// Simple Definition
// A function calling another function later.

// Real Life Analogy — Food Order 🍕
// Imagine:
// You order pizza at restaurant.
// You tell chef:
// "When pizza is ready,
// call me."
// That:
// "call me"
// is callback.

// Real Flow
// 1. You place order
// 2. Chef starts cooking
// 3. You do other things
// 4. Pizza ready
// 5. Chef calls you

// Exactly how callbacks work in JavaScript.


function orderFood(callme){
    console.log("Pizza is cooking")

    setTimeout(function() {
        console.log("Pizza is ready")
    }, 2000)
    callme()
}
function notifyCustomer(){
    console.log("customer notified")
}
orderFood(notifyCustomer)



function greet(name, callback){
    console.log("Hello " + name)
    callback()
}
function wellCome(){
    console.log("Wellcome to my World")
}
greet("Anuj", wellCome)



function calculate(a, b , operation){
    return operation(a, b)
}
function add(a, b){
    return a + b
}
function sub(a, b){
    return a - b
}
function mul(a, b){
    return a * b
}
function div(a, b){
    return a / b
}
function mod(a, b){
    return a % b
}
console.log(calculate(5,5, add))
console.log(calculate(5,5, sub))
console.log(calculate(5,5, mul))
console.log(calculate(5,5, div))
console.log(calculate(5,5, mod))