// var CricketerList=[
//     {PlayerIDinTeam:1, PlayerName: "Mahendra Singh Dhoni"},
//     {PlayerIDinTeam:2, PlayerName: "Virat Kohli"},
//     {PlayerIDinTeam:3, PlayerName: "Rohit Sharma"},
//     {PlayerIDinTeam:4, PlayerName: "Shreays Iyer"},
//     {PlayerIDinTeam:5, PlayerName: "Rishabh Pant"},
//     {PlayerIDinTeam:6, PlayerName: "Bhuvaneswar Kumar"},
//     {PlayerIDinTeam:7, PlayerName: "Deepak Chahar"},
//     {PlayerIDinTeam:8, PlayerName: "Priyansh Arya"},
//     {PlayerIDinTeam:9, PlayerName: "Ravindra Jadeja"}
// ]

// for(var Player of CricketerList){
//    //console.log(Player.PlayerIDinTeam)
//    //console.log(Player.PlayerName)
//    if(Player.PlayerIDinTeam==7){
//     console.log(`${Player.PlayerName} is a very good fast bowler`)
//    }
// }


//for loop - Repeats a block of code for a specific no.of times
//syntax: for(initialization; condition; increment/decrement){
//code
//}


// var CricketerList=[
//     {PlayerIDinTeam:1, PlayerName: "Mahendra Singh Dhoni"},
//     {PlayerIDinTeam:2, PlayerName: "Virat Kohli"},
//     {PlayerIDinTeam:3, PlayerName: "Rohit Sharma"},
//     {PlayerIDinTeam:4, PlayerName: "Shreays Iyer"},
//     {PlayerIDinTeam:5, PlayerName: "Rishabh Pant"},
//     {PlayerIDinTeam:6, PlayerName: "Bhuvaneswar Kumar"},
//     {PlayerIDinTeam:7, PlayerName: "Deepak Chahar"},
//     {PlayerIDinTeam:8, PlayerName: "Priyansh Arya"},
//     {PlayerIDinTeam:9, PlayerName: "Ravindra Jadeja"}
// ]

// for(var Player = 0; Player<9; Player=Player+1){
//     //console.log(CricketerList[Player]);
//     console.log(CricketerList[Player].PlayerName)
//     if (CricketerList[Player].PlayerIDinTeam == '2'){
//         console.log(`${CricketerList[Player].PlayerName} is the former Indian Captain`)
//     }
// }


for(var a = 0; a<=100; a=a+1){
    if(a%2==0){
        console.log(`${a} is an even number`)
    }
}
