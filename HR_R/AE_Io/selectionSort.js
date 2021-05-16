// function selectionSort(array) {
//    for (let i = 0; i < array.length - 1; i++) {
//        firstNum = i
//        for (let j = i + 1; j < array.length; j++) {
//            if (array[j] < array[firstNum]) {
//             firstNum = j
//            }
//        } 
//        [array[i], array[firstNum]] = [array[firstNum], array[i]]
//    }
//    return array
// }

function selectionSort(array) {
   let startIdx = 0
   while (startIdx < array.length - 1) {
       let smallestIdx = startIdx
       for(let i = startIdx + 1; i < array.length; i++) {
           if (array[smallestIdx] > array[i]) smallestIdx = 1
       }
       swap(startIdx, smallestIdx, array)
       startIdx++
   }
   return array 
}

function swap(i, j, array) {
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp 
}

// Do not edit the line below.
exports.selectionSort = selectionSort;