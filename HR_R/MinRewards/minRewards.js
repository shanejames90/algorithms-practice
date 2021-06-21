// rule 1: all strudents must receive at least one reward 
// rule 2a: any given student must receive strictly more rewards than an adjacent student with a lower score 
// rule 2b: any given student must receive strictly fewer reards than an adjacent student with a higher score 


// sample scores = [8, 4, 2, 1, 3, 6, 7, 9, 5] = [8, 4, 2, 1] [9, 7, 6, 5, 3]// [[8, 6, 4, 2],[9, 7, 5, 3, 1]]
// sampl rewards = [4, 3, 2, 1, 2, 3, 4, 5, 1]   [4, 3, 2, 1] [5, 4, 3, 2, 1]
// paritition the array in descending 

// scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]

// function minRewards(scores) {
//     // Write your code here.
//     // const scoresArray
//     const rewardsArray1 = []
//     const rewardsArray2 = []
//     const partitionedArray = partitionCall(scores, (n) => n % 2)
//     const sortedPartition1 = partitionedArray[0].sort((a, b) => b - a)
//     const sortedPartition2 = partitionedArray[1].sort((a, b) => b - a)
//     // console.log(sortedPartition1)
//     // console.log(sortedPartition2)
//     let rewardsTracker1 = sortedPartition1.length
//     for (let i = 0; i < sortedPartition1.length; i++) {
//         if (sortedPartition1[i] > 0) {
//             rewardsArray1.push(rewardsTracker1)
//             rewardsTracker1--
//         }
//     }
//     let rewardsTracker2 = sortedPartition2.length
//     for (let k = 0; k < sortedPartition2.length; k++) {
//         if (sortedPartition2[k] > 0) {
//             rewardsArray2.push(rewardsTracker2)
//             rewardsTracker2--
//         }
//         // console.log(rewardsArray2)
//     }
//     return rewardsArray1.concat(rewardsArray2).reduce((a, b) => a + b, 0)
// }

// function partitionCall(array, fn) {
//     const partitionArray = [[], []]
//     for (let item of array) {
//         if (fn(item)) partitionArray[1].push(item)
//         else partitionArray[0].push(item)
//     }
//     return partitionArray
// }

function minRewards(scores) {
    const rewards = scores.map(_ => 1) 
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1
    }
    for (let i = scores.length - 2; i >= 0; i--) {
        if (scores[i] > scores[i + 1]) rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1)
    }
    return rewards.reduce((a, b) => a + b)
}
console.log(minRewards(scores))

// Do not edit the line below.
exports.minRewards = minRewards;