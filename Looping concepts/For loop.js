// //looping mechanism
// //------------------

 
// //for loop syntax
// //for (initialization; Condition; increment/decrement){
// //code to be executed
// //}


// // for (step=0; step < 7; step=step+1){
// // console.log(`${step} is completed for circle`)
// // }

// //for..of loop - Iterates over elements of an iterable like array/string


// //for of loop (using arrays)
// var PlayerNames = ["MS Dhoni", "Rishabh Pant", "Shreyas Iyer"]

// for(var Player of PlayerNames){
//     //console.log(Player)
//     if(Player == "Rishabh Pant"){
//         console.log("Rishabh Pant plays for LSG")
//     }
// }

// //for.. in loop - Iterates over the properties of object

// //for..in loop (using objects)
// var MovieDetails = {
//     MovieName : "Ala Vaikuntapuramlo",
//     MovieReleaseDate: '14 January 2020',
//     MovieHero: "Allu Arjun",
//     MovieHeroine: "Pooja Hegde",
//     MovieTicketPrice: '250',
//     MovieTotalCollection: "1500000"
// }
// //here in the above example, //MovieNMame -> one of property in MovieDetails  object|| one of Index in MovieDetails object
// //one of Member in movieDetails object

// //console.log(MovieDetails.MovieHero)  //direct callig by using property
// //console.log(MovieDetails["MovieHeroine"]) //MovieDetails["MovieHeroine"];   //object index signature

//  for(var property in MovieDetails){
//      //console.log(MovieDetails[property])
//      if(MovieDetails[property] == "1500000"){
//         console.log(`${MovieDetails.MovieName} received highest collection in the year 2020`)
//      }
//  }





//for..of loop by taking different key values
// var games=[
//     {game1:"cricket"},
//     {game2:"chess"},
//     {game3:"football"}
// ]
// for(var IPL of games){
//     for(var key in IPL){

//         if(IPL[key] == "cricket"){

//         console.log("i want all games");
//         }
//         else if(IPL[key] == "football"){
//             console.log("I like football")
//         }

      

//     }
   
// }



//for.. in loop - Iterates over the properties of object

//for..in loop (using objects as well as array inside array)
var MovieDetails = {
    MovieName : "Ala Vaikuntapuramlo",
    MovieReleaseDate: '14 January 2020',
    MovieHero: "Allu Arjun",
    MovieHeroine: "Pooja Hegde",
    MovieTicketPrice: '250',
    MovieTotalCollection: "1500000",
    MovieTeam:["Rajendra prasad", "Tabu", "Sunil", "Sushanth"]
}
//here in the above example, //MovieNMame -> one of property in MovieDetails  object|| one of Index in MovieDetails object
//one of Member in movieDetails object

//console.log(MovieDetails.MovieHero)  //direct callig by using property
//console.log(MovieDetails["MovieHeroine"]) //MovieDetails["MovieHeroine"];   //object index signature

//  for(var property in MovieDetails){
//      //console.log(MovieDetails[property])
//      if(MovieDetails[property] == "1500000"){
//         console.log(`${MovieDetails.MovieName} received highest collection in the year 2020`)
//      }

         for (var Movie in MovieDetails){
        for(var person of MovieDetails.MovieTeam){
            console.log(person)
        }

        //     console.log(MovieDetails.MovieTeam)
        // }

        // }
        
            
    

         }
     
     













