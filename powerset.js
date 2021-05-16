function powerset(array) {
    // Write your code here.
    if (array.length === 0) {
        return [ [] ]
    }
    const prev = powerset(array.slice(1))
    const next = prev.map(el => [...el, arr[0]])
    return [...prev, ...next]
}

// Do not edit the line below.
exports.powerset = powerset;
