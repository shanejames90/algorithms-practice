function memoizedAddTo80() {
    let cache = {}
    // using closure here so that cache isn't reset everytime 
    // function is run 
    // basically calling the function within itself 
    return function(n) {
        if (n in cache) {
            return cache[n]
        } else {
            cache[n] = n + 80
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80()