let request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/users')
request.send()
request.onload = () => {
    console.log(request)
    if (request.status === 200) {
        // by default the response comes in the string format, we need to parse the data into
        // JSON
        console.log(JSON.parse(request.response))
    } else {
        console.log(`error ${request.status} ${request.statusText}`)
    }
 }
