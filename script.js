/* Create a function that takes two arguments. Both arguments are
integers, a and b. Return true if one of them is 10 or if their sum is 10. */

function makeTen(num1, num2){

    var sum = num1 + num2

    if (num1 == 10 || num2 == 10){
        return true
    }
    else if (sum == 10){
        return true
    }
    else{
        return false
    }
}

console.log(makeTen(1,2))

