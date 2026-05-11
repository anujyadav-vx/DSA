

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