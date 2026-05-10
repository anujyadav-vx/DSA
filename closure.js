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