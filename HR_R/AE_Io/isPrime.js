// function countPrimes(n) {
//     let nums = [...Array(n).keys()]

//     for (let i = 2; i * i < n; i++) {
//         if (nums[i] !== "1") {
//             for (let j = i * i; j < n; j += i) {
//                 nums[j] = "1"
//             }
//         }
//     }

//     let primes = []

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] > 1) {
//             primes.push(nums[i])
//         }
//     }
//     return primes.length
// }

function countPrimes(n) {
    const primes = {
        2: true,
        3: true,
    }

    for (let i = 4; i < n; i++ ) {
        if (i % 2 !== 0) {
            if (i % 3 !== 0) {
                primes[i] = true
            }
        }
    }
    const keys = Object.keys(primes)
    return keys
}

console.log(countPrimes(130))