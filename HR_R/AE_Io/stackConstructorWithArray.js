
class Stack {
    constructor() {
        this.array = []
    }
    peek() {
        return this.array[this.array.length - 1]
    }
    push(value) {
        this.array.push(value)
        return this
    }
    pop() {
        this.array.pop()
        return this
    }    
}

const myStack = new Stack()
myStack.push('grapes')
myStack.push('apples')
myStack.push('mangoes')
myStack.push('asparagus')
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.pop())