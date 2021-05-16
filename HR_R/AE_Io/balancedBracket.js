
// add bracket to stack as we loop
// check what last bracket was, to make sure it corresponds 
// if it doesn't match type then we are unbalanced 
// at end of loop, we need to check that stack is empty before we 
// return true 
// O(n) time | O(n) Space 
function balancedBrackets(string) {
    // string of all of opening brackets, check if char is opening bracket
    const openingBrackets = '([{'
    // string of all closing brackets 
    const closingBrackets = ')]}'
    // hash table that maps all closing brackets to all opening brackets 
    const matchingBrackets = {')': '(', ']': '[', '}': '{'}
    // stack is empty array 
    const stack = []
    for (const char of string) {
        if (openingBrackets.includes(char)) {
            stack.push(char)
        } else if (closingBrackets.includes(char)) {
            if (stack.length == 0) {
                // no possible opening brackets to match 
                return false
            }
            // if last value of stack is matching then we pop it
            if (stack[stack.length - 1] === matchingBrackets[char]) {
                stack.pop()
            } else {
                // otherwis it's not a matching bracket and we return false 
                return false
            }
        }
    }
    // if the stack is empty we are good, if not the string is unbalanced 
    return stack.length === 0 
}

// Do not edit the line below.
exports.balancedBrackets = balancedBrackets;