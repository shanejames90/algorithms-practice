// O(n) time | O(1) space
function getNthFib(n) {
  // have array that stores last two fib numbers
  const lastTwo = [0, 1]
  // next fib equal addition of last two 
  // after that toss first number in array, move second number to left and take 
  // next fib and store in array 
  // keep calculating next fib number 
  let counter = 3
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFib
    counter++
  }
  // edge case, if we call fib of 1 
  return n > 1 ? lastTwo[1] : lastTwo[0]
}


// O(n) time | O(n) space
// function getNthFib(n, memoize = {1: 0, 2: 1}) {
//   if (n in memoize) {
//     return memoize[n]
//   } else {
//     memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize)
//     return memoize[n]
//   }
// }


// O(2^n) time | O(n) space
// function getNthFib(n) {
//   if (n === 2) {
//     return 1
//   } else if (n === 1) {
//     return 0 
//   } else {
//     return getNthFib(n - 1) + getNthFib(n - 2)
//   }
// }



// Do not edit the line below.
exports.getNthFib = getNthFib;
