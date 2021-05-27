distances = [5, 25, 15, 10, 15]
fuel = [1, 2, 1, 0, 3]
mpg = 10


// function validStartingCity(distances, fuel, mpg) {
//     // 1. multiply mpg by fuel return in range matrix 
//     // 2. subtract range[i] - distance[i] return in deficit/surplus matrix 
//     // 3. grab index of largest surplus 
//     const range = fuel.map(x => x * mpg)
//     const surplusDefecit = []
//     for (let i = 0; i < distances.length; i++) {
//         let dte = range[i] - distances[i]
//         surplusDefecit.push(dte)
//     }
//     return surplusDefecit.indexOf(Math.max(...surplusDefecit))
// }

// console.log(validStartingCity(distances, fuel, mpg))

function validStartingCity(distances, fuel, mpg) {
    const numberOfCities = distances.length
    let milesRemaining = 0 

    let indexOfStartingCityCandidate = 0 
    let milesRemainingAtStartingCityCandidate = 0 

    for (let cityIdx = 1; cityIdx < numberOfCities; cityIdx++) {
        const distanceFromPreviousCity = distances[cityIdx - 1]
        const fuelFromPreviousCity = fuel[cityIdx - 1]
        milesRemaining += fuelFromPreviousCity * mpg - distanceFromPreviousCity
        
        if (milesRemaining < milesRemainingAtStartingCityCandidate) {
            milesRemainingAtStartingCityCandidate = milesRemaining
            indexOfStartingCityCandidate = cityIdx
        }
    }
    return indexOfStartingCityCandidate
}
