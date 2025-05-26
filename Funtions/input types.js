function getPlayerDetails(PlayerName, TeamName, Position, Centuries){
    console.log("PlayerName:", PlayerName);
    console.log("TeamName:", TeamName);
    console.log("Position:", Position);
    console.log("No. of Centuries:", Centuries);


}
getPlayerDetails("Dhoni", "CSK", "captain", '20');


//input types using arrays and objects
function getPlayerDetails(PlayerName, TeamName, Position, Centuries){
    let PlayerDetails=["virat", "Rahul", "Rishabh"]; 
    var Player1Details ={
        Name: "Rohith Sharma",
        Age:   37,
        Team:  "Mumbai Indians"
    }
    console.log("PlayerName:", PlayerName);
    console.log(PlayerDetails)
    console.log(PlayerDetails[2]);
   console.log(Player1Details)
    console.log(Player1Details.Age)
}

getPlayerDetails("Dhoni", "CSK", "captain", '20');