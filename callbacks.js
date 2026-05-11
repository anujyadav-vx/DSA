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