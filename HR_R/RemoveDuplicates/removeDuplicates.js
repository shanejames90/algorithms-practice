const a = [0, 0, 1, 1, 2, 2, 3, 3]

function removeDuplicates(array) {

    let i = 0 
    for (j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++
            array[i] = array[j]
            // console.log(array[i])
        }
    }
    return i + 1
}

console.log(removeDuplicates(a))