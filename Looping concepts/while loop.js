//while loop --. Repeats a block of code a particular no.of times.
//while(condition){
//code 
 //}
//while(target) -> you are doing some work

// var Movies = 0
// var MoviesList = [
//     {MovieID:0, MovieName:"Salaar", MovieReleaseDate:'20 June 2023', Totalcollection:"125 crores"},
//     {MovieID:1, MovieName:"Godavari", MovieReleaseDate:'2 March 2004', Totalcollection:"90 crores"},
//     {MovieID:2, MovieName:"RRR", MovieReleaseDate:'17 March 2022', Totalcollection:"250 crores"},
//     {MovieID:3, MovieName:"Magadheera", MovieReleaseDate:'13 July 2007', Totalcollection:"50 crores"},
//     {MovieID:4, MovieName:"Yashodha", MovieReleaseDate:'09 September 2023', Totalcollection:"23 crores"},
//     {MovieID:5, MovieName:"Parugu", MovieReleaseDate:'28 August 2011', Totalcollection:"12 crores"},
//     {MovieID:6, MovieName:"Mahanati", MovieReleaseDate:'23 April 2019', Totalcollection:"100 crores"}
//     ]

//     while(Movies<5){
//         console.log(MoviesList[Movies].MovieName);
//         let favMovie = MoviesList[Movies].MovieName 
//         if(favMovie=="Magadheera"){
//             console.log("Magadheera is my favourite film in childhood")
//         }
//         Movies=Movies+1;
//     }


    //do - while loop --> Similar to while loop but the block of code runs atleast once
    // do {
    //     //code
    // }while(condition);


var Movies = 0
var MoviesList = [
    {MovieID:0, MovieName:"Salaar", MovieReleaseDate:'20 June 2023', Totalcollection:"125 crores"},
    {MovieID:1, MovieName:"Godavari", MovieReleaseDate:'2 March 2004', Totalcollection:"90 crores"},
    {MovieID:2, MovieName:"RRR", MovieReleaseDate:'17 March 2022', Totalcollection:"250 crores"},
    {MovieID:3, MovieName:"Magadheera", MovieReleaseDate:'13 July 2007', Totalcollection:"50 crores"},
    {MovieID:4, MovieName:"Yashodha", MovieReleaseDate:'09 September 2023', Totalcollection:"23 crores"},
    {MovieID:5, MovieName:"Parugu", MovieReleaseDate:'28 August 2011', Totalcollection:"12 crores"},
    {MovieID:6, MovieName:"Mahanati", MovieReleaseDate:'23 April 2019', Totalcollection:"100 crores"}
    ]

    do {
        console.log(MoviesList[Movies].MovieReleaseDate)
        
         if(MoviesList[Movies].MovieID==2){
             console.log("RRR is the best film in Ram Charan's entire career")
         }
         Movies=Movies+1;
        


    }while(Movies<6)

