// function callDetails(callbackfn){
//     callbackfn("Hello");
 
// }
// callDetails((message)=>{      //here we are giving arrow function as argument to the function
//     console.log(message);
// });

//-------------------------------------------------------------------------------------------------


function playerDetails(callbackfn){
    callbackfn("Virat Kohli", "Sachin Tendulkar")

}
playerDetails((Player1,Player2) => {
    console.log("MS DHONI");
    console.log(Player1);
    console.log(Player2);
})