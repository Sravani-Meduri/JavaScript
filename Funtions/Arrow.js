//Arrow function
//this is normal function
function ShowFoodDetails(){
    console.log("Manchurian")
}
ShowFoodDetails();

//let's convert this into arrow function
var ShowFoodItem = () => {
    console.log("Manchurian");
}
ShowFoodItem();

//converting functions with parameters to arrow functions

//normal function
function ShowPlayerDetails(PlayerName, TeamName, Centuries){
    console.log("PlayerName:", PlayerName);
    console.log("TeamName:", TeamName);
    console.log("Centuries:", Centuries);


}
ShowPlayerDetails("DHONI", "CSK", '70')

//convert this into arrow function
var ShowPlayerName = (PlayerName, TeamName, Centuries) => {
    console.log("PlayerName:", PlayerName);
    console.log("TeamName:", TeamName);
    console.log("Centuries:", Centuries);
}

ShowPlayerName("Virat", "RCB", '90');

//arrow functions using return

function getMovieDetails(MovieName, HeroName, HeroineName){
    let moviedetails = `MovieName: ${MovieName}, ${HeroName}, ${HeroineName}`
    return moviedetails;

}
console.log(getMovieDetails("Brundavanam", "NTR", "Kajal"));

//convert this into arrow

let  getMovieDetails = (MovieName, HeroName, HeroineName) => {
    let moviedetails = `MovieName: ${MovieName}, ${HeroName}, ${HeroineName}`
    return moviedetails;

}
console.log(getMovieDetails("Brundavanam", "NTR", "Kajal"));

//predefined functions with arrow functions

setTimeout(()=>{
    console.log("JavaScript")
}, 5000);





