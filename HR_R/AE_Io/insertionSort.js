
// O(n^2) time | O(1) space 
function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        const elementToInsert = array[i]

        let j = i - 1

        while (j >= 0 && array[j] > elementToInsert) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = elementToInsert
    }
    return array 
}

// Do not edit the line below.
exports.insertionSort = insertionSort;