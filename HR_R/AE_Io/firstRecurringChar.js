// given array = [2,5,1,2,3,5,1,2,4]
// should return 2 


function firstRecurringChar(array) {
    let map = {}
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] !== undefined) {
        
            return array[i]
            
        } else {
            map[array[i]] = i
            console.log(map[array[i]])
        }
    }
    return undefined
}

console.log(firstRecurringChar([2, 5, 1, 5, 3, 2, 1, 2, 4]))