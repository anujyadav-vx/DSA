// Maximum number 
function maxNum(arr){
    let max = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
console.log(maxNum([0,5,8,6,7,9,2,10,55]))


//Minimum number
function minNum(arr){

    let min = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}
console.log(minNum([5,6,1,3,7,,8]))


//Sum of array
function sumArr(arr){
    let sum = 0

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}
console.log(sumArr([1,2,3,4]))


//Reverse Array
function reverseArr(arr){
    const eArray = []
    arr.sort((a,b) => a - b)

    for(let i = arr.length - 1; i >= 0; i--){
        eArray.push(arr[i])
    }
    return eArray
}
console.log(reverseArr([1,9,7,3,5,8,2,4,6]))

//isSorted
function isSorted(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i - 1]){
            return false
        }
    }
    return true
}
console.log(isSorted([1,3,2]))


//Remove Duplicates

function removeDuplicates(arr){
    
    const emptyArray = []

    for(let  i = 0; i < arr.length; i++){
        if(!emptyArray.includes(arr[i])){
            emptyArray.push(arr[i])
        }
    }
    return emptyArray
}
console.log(removeDuplicates([1,2,1, 5]))



// move all zero to the end
const moveZeroTOEnd = function(arr){
    let index = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[index] = arr[i]
            index++;
        }
    }
    while(index < arr.length){
        arr[index] = 0;
        index++
    }
    return arr
}
console.log(moveZeroTOEnd([0,1,5,0,8]))


//Two sum
const twoSum =  function(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i, j]
            }
        }
    }
}

const arr = [1,2,3,4,5,6,7,8,9]
const target = 17

const sum = twoSum(arr, target)

console.log(sum)





//Kadane's Algorithm
function kadaneAlgorithm(arr){
    let maxSum = arr[0]                // This stores best answer
    let currentSum = arr[0]            // Start with first element

    for(let i = 1; i < arr.length; i++){
        currentSum = Math.max(arr[i], currentSum + arr[i])          // Decide: start new OR continue old subarray
        maxSum = Math.max(currentSum, maxSum)                       // Update global maximum
    }
    return maxSum
}
console.log(kadaneAlgorithm([1,2,8,7,5,6]))




//prifix Sum
function prifixSum(arr){
    let result = []
    let sum = 0

    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
        result.push(sum)
    }
    return result
}
console.log(prifixSum([1,4,1,7]))
