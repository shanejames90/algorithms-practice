class MinMaxStack {
    constructor() {
        this.minMaxStack = []
        this.stack = []
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    pop() {
        // update min/max stack first 
        this.minMaxStack.pop()
        return this.stack.pop()
    }
    push(number) {
        // if this is only number in stack push it to both min and max
        const newMinMax = { min: number, max: number }
        // if stack has numbers then do checks
        if (this.minMaxStack.length) {
            const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1]
            newMinMax.min = Math.min(lastMinMax.min, number)
            newMinMax.max = Math.max(lastMinMax.max, number)
        }
        this.minMaxStack.push(newMinMax)
        this.stack.push(number)
    }
    getMin() {
        return this.minMaxStack[this.minMaxStack.length - 1].min
    }
    getMax() {
        return this.minMaxStack[this.minMaxStack.length - 1].max
    }
}

exports.MinMaxStack = MinMaxStack;