function helloMap() {
    let myMap = new Map
    myMap.set('arms', 2)
    myMap.set('legs', 2)
    myMap.set('fingers', 10)
    console.log(myMap)
    console.log(myMap.size)
}

console.log(helloMap())