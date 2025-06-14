//this keyword in constructor

//first take normal function and check the scope(It will be in global)
// function getStudentDetails(){
//     console.log(this)
// }
// getStudentDetails();

//now let's place new keyword in the function. Then it will create a new object

function getStudentDetails(){
    this.name ="Sravani"
    this.Rank = '1'
    this.subjects = ["Science, Maths"]
    this.friends = ["Mounica", "Hari", "Rohith"]
    console.log(this)
    
}

new getStudentDetails();

// //this key using paramaeters in constructor

// function getStudentDetails(StudentName, Subjectlist){
//     this.name = StudentName
//     this.Rank = '1'
//     this.subjects = Subjectlist
//     this.friends = ["Mounica", "Hari"]
//      console.log(this)
    
//  }

//  new getStudentDetails("Sravani", ["Science, Maths"]);


 //this keyword in Arrow function --> these don't have this keyword on their own. They inherit from the parent scope at the time they are defined.

// var Director = "RajaMouli" //here we declared director outside th object i.e. globally. So, in the o/p, we get this


//  var MovieDetail = {
//     Name : "Bahubali",
    
//     Actors :["Prabhas", "Anushka", "Nazar"],
//     Budget: '20000000',
//     getMovieDetails: () => {
//         console.log(this)   // we get in the window
//         console.log(this.Director) //no output will be retuened because it is inside object and doesnot have parent
//     }
//  }

//  MovieDetail.getMovieDetails();




