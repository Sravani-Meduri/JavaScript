//normal function with return type
// function getAuthorDetails(){
//     return "Rabindranath Tagore"
// }
// console.log(getAuthorDetails());   //output - Rabindranath Tagore

//async function --> it always returns promise in return type.
// async function getAuthorDetails(){
//     return "Rabindranath Tagore"
// }
// let AuthorPromise = getAuthorDetails();
// console.log(AuthorPromise)  // here it returns promise 
//since we know that it returns promise, let us subscribe the data using then and also create a new promise in the return type




async function getAuthorDetails(){
    return new Promise((resolve, reject) => {
        let author;
        if(author){
            resolve(author)
        }
        else{
            reject("Some error with Author, may be undefined")
        }
       
    })
}
let AuthorPromise = getAuthorDetails();
AuthorPromise.then((result) => {
    console.log("Author is: ", result)

}).catch((error) => {
console.log(error)
})



