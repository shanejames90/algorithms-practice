function fibonacciMaster() {
    let cache = {}
    return function fib(n) {
        if (n in cache) {
            return cache[n]
        } else {
            if (n < 2) {
                return n
            } else {
                cache[n] = fib(n - 1) + fib(n - 2)
                return cache[n]
            }
        }
    }
}

function fibonacciMaster2(n) {
    let answer = [0, 1]
    for (let i = 2; i <= n; i++) {
        answer.push(answer[i - 2] + answer[i - 1])
    }
    return answer.pop()
}