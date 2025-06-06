// Promises using variable
// let myPromise = new Promise((resolve, reject) => {
//     let success = false;
//     if(success){
//         resolve("Success")
//     }
//     else{
//         reject("Fail")
//     }

// });

// myPromise.then((result) => {
//     console.log(result)
// }).catch((exception) => {
//     console.log(exception)
// })


// promises using functions
//-------------------------------------------------------------------------------------------------
// function myFirstpromise(){
//     return new Promise((resolve, reject) => {
//         let success = false
//         if(success){
//             resolve("Success Message")
//         }
//         else{
//             reject("Fail Message")
//         }

//     });

// }

// myFirstpromise().then((result) => {
//     console.log(result)
// }).catch((exception) => {
//     console.log(exception)
// })


//Multiple promises
//-------------------------------------------------------------------------------------------------
function getPlayer1Details(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
              console.log("Virat Kohli has won his first IPL cup")
            resolve("Virat Kohli")
        }, 4000)

    });
}


function getPlayer2Details(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
              console.log("MS Dhoni is the captain of CSK")
            resolve("MS Dhoni")
        }, 3000)

    });
}

function getPlayer3Details(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
              console.log("Shreyas Iyer is leading PBKS in this season")
            resolve("Shreyas Iyer")
        }, 7000)

    });
}

// getPlayer1Details().then((result) => {
//     // console.log(result)
//     return getPlayer2Details()
// }).then((result) => {
//     console.log(result)
//     return getPlayer3Details()
// }).then((result) => {
//     console.log(result)
// })

console.time("Time starts")

Promise.all([getPlayer1Details(), getPlayer2Details(), getPlayer3Details()]).then((notifications) => {
console.log(notifications);
console.timeEnd("Time starts")
})








