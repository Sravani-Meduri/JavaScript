//return function
function getStudentDetails(StudentName, Marks) {
            let studentDetails = ""
            studentDetails = "Student Name:" + StudentName +  "  " + "Marks:" + Marks
            return studentDetails;

        }
        console.log(getStudentDetails("Sravani", '98'));
        let getstudentmessage = getStudentDetails("Sravani", '98');
        console.log(getstudentmessage);

//return function
function getMovieDetails(HeroName, HeroineName, Budget){
    let MovieDetails = "HeroName:" +HeroName + " " + "HeroineName:" +HeroineName;
    return MovieDetails;
   // console.log(HeroName)

}
console.log(getMovieDetails("AlluArjun", "Rashmika", '1000000'));
//getMovieDetails("AlluArjun", "Rashmika", '1000000');

 
 //non-return function

 function getMovieDetails(HeroName, HeroineName, Budget){
   let MovieDetails = "HeroName:" + HeroName + " " + "HeroineName:" +HeroineName;

}
console.log(getMovieDetails("AlluArjun", "Rashmika", '1000000'));

