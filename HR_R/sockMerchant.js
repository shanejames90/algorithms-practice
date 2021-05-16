function sockMerchant(n, ar) {
    // Write your code here
    let colors = {}
    let pairs = 0
    for (let i = 0; i < n; i++) {
        if (colors.hasOwnProperty(ar[i])) {
            pairs++
            delete colors[ar[i]]
        } else {
            colors[ar[i]] = 0
        }
    }
    return pairs
}
