let firstAPIAddress = "https://jsonplaceholder.typicode.com/users/2";

let SecondAPIAddress = "https://jsonplaceholder.typicode.com/users/3";

let AllAPIAddress = "https://jsonplaceholder.typicode.com/users"


fetch(firstAPIAddress).then((response) => {
    return response.json()
    //console.log(response)

}).then((data) => {
console.log("First API address", data);
})

fetch(SecondAPIAddress).then((response) => {
    return response.json()
    //console.log(response)

}).then((data) => {
console.log("Second API address", data);
})

fetch(AllAPIAddress).then((response) => {
    return response.json()
    //console.log(response)

}).then((data) => {
console.log("All API address", data);
})