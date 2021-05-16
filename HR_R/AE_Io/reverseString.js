function reverseString(string) {
    // check input
    if (!string) {
        return -1
    }
    if (string.length < 2) {
        return string
    }

    const backwards = []
    const totalItems = string.length - 1
    for (let i = totalItems; i >= 0; i--) {
        backwards.push(string[i])
    }
    return backwards.join('')
}

function reverse2(string) {
    return string.split('').reverse().join('')
}

const reverse3 = string => string.split('').reverse().join('')

console.log(reverseString('THis is cool!'))