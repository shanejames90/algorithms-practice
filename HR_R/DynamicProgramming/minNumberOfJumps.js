myArray = [3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3] // aray.length = 11

// array.length - (currentIdx + 1 )
distanceToEndMyArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

edgeArray = [2, 5, 1, 1, 1]
distToEnE = [4, 3, 2, 1, 0]
// function minNumberOfJumps(array) {
//    // need a variable to keey track of 'jumps'
//     // will return this at the end
//     // if array has length 1 then it takes 0 jumps
//     // let's build out an array with distances to end
//     const arrayOfDistanceToEnd = buildDistanceToEnd(array)
//     // console.log(arrayOfDistanceToEnd)
//     if (array.length === 1) return minJumpsToEnd = 0
//     let minJumpsToEnd = 1

//     for (let i = 0; i < array.length; i++) {
//         let nextToVisit = array[i]
//         let currentDistToE = arrayOfDistanceToEnd[i]
//         if (nextToVisit >= currentDistToE) {
//             return minJumpsToEnd
//         } else if (nextToVisit < currentDistToE) {
//             for (let indicesToCheck = i + 1; indicesToCheck <= nextToVisit; indicesToCheck++) {
//                 nextJumpValue = array[indicesToCheck]
//                 if (nextJumpValue <= arrayOfDistanceToEnd[indicesToCheck]) {
//                     minJumpsToEnd += 1
//                     return minJumpsToEnd
//                 }
//             }

//         }
//     }
//     return minJumpsToEnd
// }

// function buildDistanceToEnd (array) {
//     const result = []
//     for (let i = 0; i < array.length; i++) {
//         let fillNumber = array.length - (i + 1)
//         result.push(fillNumber)
//     }
//     return result
// }


// O(n) time | O(1) space 
function minNumberOfJumps(array) {
    if (array.length === 1) return 0
    let jumps = 0 
    let maxReach = array[0]
    let steps = array[0]
    for (let i = 1; i < array.length - 1; i++) {
        maxReach = Math.max(maxReach, i + array[i])
        steps--
        if (steps === 0) {
            jumps++
            steps = maxReach - i
        }
    }
    return jumps + 1
}

console.log(minNumberOfJumps(myArray))

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;