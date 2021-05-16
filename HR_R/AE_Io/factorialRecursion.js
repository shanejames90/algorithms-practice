
// O(n) time 
function findFactorialRecursive(number) {
    if (number === 2) {
        return 2
    }
        return number * findFactorialRecursive(number - 1)
    
}


// O(n) - time 
function findFactorialIterative(number) {
    let answer = 1
    if (number === 2) {
        answer = 2
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i
    }
    return answer
}