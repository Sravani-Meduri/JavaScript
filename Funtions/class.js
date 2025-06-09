 // Members - constructor -> properties -> Methods = function
    //Constructor member

    //fields;  // hold the value
      //Eg: sName = "John";
//-----------------------------------------------------------------------------------------

// class Player {
//    constructor(PlayerName, PlayerID){
//         console.log(`${PlayerName} is the former captain for India` )
//     }
//     enrollPlayer(){
//          let PlayerName = "Virat Kohli"
//          let PlayerID = '2'
        
//         console.log(`We have player 2 as ${PlayerName} and his ID is ${PlayerID}`)
// }
// }
// new Player("MS Dhoni", "1").enrollPlayer()

//-----------------------------------------------------------------------------------------

class Players {
    PlayerName; 
    PlayerID;
   constructor(PlayerName, PlayerID){
        console.log(`${PlayerName} is the former captain for India`)
        this.sName = PlayerName;
        this.sID = PlayerID;

    }
    enrollPlayer(){
        
        console.log(`We have player  as ${this.sName} and his ID is ${this.sID}`)
}
getPlayerDetails(){
    return ["Rishabh", "Jadeja", "Shreyas"]
}
}
new Players("MS Dhoni", "1").enrollPlayer()
new Players("MS Dhoni", "1").getPlayerDetails();