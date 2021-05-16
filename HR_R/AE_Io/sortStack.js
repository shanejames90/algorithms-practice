// O(n^2) time | O(n) sapce - where n is the length of the stack
// removing all elements gives time complexity of O(n),
// inserting an element could take O(n) time 
function sortStack(stack) {
    // base case
    if (stack.length === 0) return stack 

    const top = stack.pop()
    // if stack not empty then call function on stack
    sortStack(stack)

    insertInSortedOrder(stack, top)
    
    return stack 
}

function insertInSortedOrder(stack, value) {
    if (stack.length === 0 || stack[stack.length - 1] <= value) {
        stack.push(value)
        return
    }

    const top = stack.pop()

    insertInSortedOrder(stack, value)

    stack.push(top)
}

// Do not edit the line below.
exports.sortStack = sortStack;