//Global context

//console.log(this)    //window

// var Movies = ["Pushpa", "Julai", "Happy"]
// var Directors = ["Sukumar", "Trivikram", "Bhaskar"]
// var getMovieDetails = function(){
//     return Directors;
// }
// console.log(getMovieDetails());


// console.log(this);

// //directly adding the variables using this keyword in global scope

// this.Movies = ["Pushpa", "Julai", "Happy"]
// this.Directors = ["Sukumar", "Trivikram", "Bhaskar"]
// this.getMovieDetails = function(){
//     return Directors;
// }
// let awards = ["Filmfare", "SIMA", "NationalAward"];  //we can't see the output because let  is block level scope
// console.log(this);

// //object context
let Name ="Sravani"
let JoinDate = 'May 7 1999'
var Player = {
    Name : "MS DHONI",
    DateOfBirth : "July 7, 1983",
    Matches : ["test", "IPL", "T20"],
    Achievements : ["player of the Match", "Man Of the Match"],
    getPlayerAwards : function(){
        console.log(this);
        // console.log("Name:", Name);
        // console.log("JoinDate:", this.JoinDate);
        //console.log(this.getPlayerAwards)
         },
    }
// console.log(Name);
// console.log(Player)
    

Player.getPlayerAwards();