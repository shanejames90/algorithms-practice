
// tandemSpeed = max(speedA, speedB)
// write a function that returns the max possible total speed OR 
// the min possible total speed of ALL the tandem bicycles being ridden 
// based on one parameter: fastest. 

// if fastest = true, your function should return the max possible speed 
// if fastest = false, your function should return the min total speed 

// RSS = [5, 5, 3, 9, 2]  => RSS.sorted = [2, 3, 5, 5, 9]
// BSS = [3, 6, 7, 2, 1] => BSS.sorted (dec) = [7, 6, 3, 2, 1]
// rss.pop() + bss.pop() = pair => Repeat until pairs [] = rss.length

// total speed = Max[9, 1], [5, 2], [5, 3], [3, 6], [6, 7] = (9 + 5 + 5 + 6 + 7)
 
// redShirtSpeeds = [5, 5, 3, 9, 2]
// blueShirtSpeeds = [3, 6, 7, 2, 1]
// fastest = true

// function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
//     redShirtSpeeds.sort((a, b) => a - b)
//     blueShirtSpeeds.sort((a, b) => b - a)
//     pairs = []
//     while (pairs < redShirtSpeeds.length) {
//         let redSpeed = 0
//         let blueSpeed = 0
//         for (let i = redShirtSpeeds.length - 1; i = 0; i--) {
//             redSpeed = redShirtSpeeds.pop()
//             pairs.push(redSpeed)
//         }
//         for (let i = blueShirtSpeeds.length - 1; i = 0; i--) {
//             blueSpeed = blueShirtSpeeds.pop()
//         }
//         currentPairs = [redSpeed, blueSpeed]
//         pairs.push(currentPairs)
//         console.log(pairs)
//     }
//     console.log(pairs)
//     for (let i = 0; i < pairs.length; i++) {
//         totalSpeed = Math.max()
//     }
// }

// console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest))
// // Do not edit the line below.
// exports.tandemBicycle = tandemBicycle;


function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a, b) => a - b)
    blueShirtSpeeds.sort((a, b) => a - b)

    if (!fastest) reverseArrayInPlace(redShirtSpeeds)

    let totalSpeed = 0
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
        const rider1 = redShirtSpeeds[idx]
        const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - idx - 1]
        totalSpeed += Math.max(rider1, rider2)
    }
    return totalSpeed
}

function reverseArrayInPlace(array) {
    let start = 0 
    let end = array.length - 1
    while (start < end) {
        const temp = array[start]
        array[start] = array[end]
        array[end] = temp
        start++
        end--
    }
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;