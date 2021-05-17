const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// function selectionSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         // set current index as minimum
//         let min = i
//         let temp = array[i]
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[min]) {
//                 // update minimum if current is smaller 
//                 min = j 
//             }
//         }
//         array[i] = array[min]
//         array[min] = temp 
//     }
//     return array 
// }

function selectionSort(array) {
   for (let i = 0; i < array.length - 1; i++) {
       firstNum = i
       for (let j = i + 1; j < array.length; j++) {
           if (array[j] < array[firstNum]) {
            firstNum = j
           }
       } 
       [array[i], array[firstNum]] = [array[firstNum], array[i]]
   }
   return array
}

selectionSort(numbers)
console.log(numbers)