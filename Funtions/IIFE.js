//simple IIFE function without parameters

(
    function(){
        let a = 1
        console.log(`JavaScript is no.${a} language`);
        console.log(45);
    }
)();

//IIFE using parameters

(
    function(MovieName, HeroName, Collection){
        //console.log("MovieName:", MovieName+ " "+ "HeroName:", HeroName+" "+ "Collection:", Collection);
        console.log("MovieName:" +MovieName+ " "+ "HeroName:" +HeroName+" "+ "Collection:" + Collection);

    }
)("Pushpa", "AlluArjun", '1500000');

//callback functions without parameters - In callback function, we pass the argument type as function

function StudentDetails(callbackfn){
    callbackfn();

}
StudentDetails(function(){
    console.log("Sravani");
});

//callback function with parameters

function playerDetails(callbackfn){
    callbackfn("Virat Kohli", "Sachin Tendulkar")

}
playerDetails(function(Player1,Player2){
    console.log("MS DHONI");
    console.log(Player1);
    console.log(Player2);
})

//using predefined functions in anonymous functions

//predefined function used here is setTimeout()  ---> it prints the o/p after specific time

setTimeout(function(){
    console.log("Sravani");
},3000);

