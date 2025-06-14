{
    //block-1
    let fruit1 = "Apple";
    console.log("Scope-1:", fruit1);
    {
        //block-2
        let fruit2 = "Mango";
        console.log("Scope-2:", fruit1);    
        
        //console.log("Scope-3:", fruit3);
        {
            //block-3
            let fruit3 = "Kiwi"
            console.log("Scope-3:", fruit3);
            console.log("Scope-3:", fruit2);
            console.log("Scope-3:", fruit1);

        }
        
console.log("Scope-2:", fruit2);
    }
    
}

//scope chain using functions

// {
//     //Block-1
//     var day = "Sunday"
//     console.log("Today:", day);
//     {
//         //Block-2
//         let daydemo="Monday"
//         function getweekdays(day1, day2, day3){
            
//             //console.log(daydemo)
//             //console.log("Nextday:", day1);
//             console.log("Goodday:", day2);
//             console.log("Luckyday:", day3);
//             console.log("Today:", day);


//         }
//         getweekdays("Monday", "Tuesady", "Wednesday");

//         {
//             //Block-3
//             function getnextdays(day4, day5, day6){
//                 console.log("Superday:", day4);
//                 console.log("Niceday:", day5);
//                 console.log("Peacefulday:", day6);
            
//                 }
            
//             getnextdays("Thursday", "Friday", "Saturday");
//             console.log(daydemo)
            
            
//         }
//     }
//     console.log(day)
// }















