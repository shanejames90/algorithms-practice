// exmaple "abcdcaf" output = 1 
// if no non repeat char exists return "-1"

// 1. create hash table 
// 2. traverse string with a pointer 
// 3. increase count of char in hash map 
// 4. travers string ahain and check whether the current char has frequency = 1
// 5. if frequency > 1 continue traversal 
// 6. else break break loop and return current char 

function firstNonRepeatingCharacter(string) {
    let hash = {}
    for (i in string) {
        hash[string[i]] ? hash[string[i]] += 1 : hash[string[i]] = 1
    }
    for (i in string) {
        if (hash[string[i]] === 1) {
            return parseInt(i)
        }
    }
    return -1
}
// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
