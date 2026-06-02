// Closure Definition
// "A closure is a function that remembers variables from its outer scope even after the outer function has finished execution."


// Simple Definition
// "Closure = Function + Remembered Memory"
// The function carries its outer variables with it.

// Real-Life Analogy

// Imagine:
// You cook food in your kitchen and pack it into a lunch box.
// Then you leave your home and go to office.
// Even though:
// kitchen is left behind
// home is closed
// You still have the food because it was packed with you.

// In JavaScript
// Outer function = Home/Kitchen
// Variables = Food
// Inner function = Person carrying lunch box
// Closure = Lunch box memory

// So even after outer function finishes,
// inner function still carries the variables.





function bank(){
    let myBalance = 10000

    return{
        deposite(amount){
            myBalance += amount
            console.log(myBalance)
        },
        withdrawl(amount){
            myBalance -= amount
            console.log(myBalance)
        }
    }
}
let currentBalance = bank()
currentBalance.deposite(10000)
currentBalance.withdrawl(1)




function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count)
    }
    return inner;
}
let counts = outer()
counts()
counts()





function display(){
    let work = "Done! Great work"

    setTimeout(() => {
        console.log(work)
    }, 1000)
}
display()




function counter(){
    let count = 0 

    return{
        increment(){
            count++
            console.log(count)
        },
        decrement(){
            count--;
            console.log(count)
        },
        reset(){
            count = 0;
            console.log()
        }
    }
}
let i = counter()
i.increment()
i.increment()
i.increment()
i.decrement()
i.decrement()
i.reset()



function multiply(x){
    return function(y){
        return x * y;
    }
}

let mul = multiply(5)
console.log(mul(10))



function addition(x){
    return function(y){
        return x + y
    }
}
let add = addition(10)
console.log(add(11))



function subtraction(x){
    return function(y){
        return x - y
    }
}
let sub = subtraction(44)
console.log(sub(55))


function division(x){
    return function(y){
        return x/y
    }
}
let div = division(22)

console.log(sub(100))