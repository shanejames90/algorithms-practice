function reverseString(str) {
    if (str.length === 1) {
        return str
    } else {
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}

console.log(reverseString('yoyo master'))


// iterative 

function reverseStringIterative(str) {
    let arrayStr = str.split('')
    let reversedArray = []

    function addToArray(array) {
        if (array.length > 0) {
            reversedArray.push(array.pop())
            addToArray(array)
        }
        return
    }
    addToArray(arrayStr)
    return reversedArray.join('')
}