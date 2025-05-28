//members of object
//Memebers refers to property and Methdod

var Student = {
    name        : "Sravani",
    DateOfBirth : "May 24, 1999",
    subjects    :  ["Mathematics", "Science", "Social"],
    getTotalMarks : function(){
        console.log("Total Marks for Sravani in all subjects are 598");
    }
};

console.log(Student.name);
console.log(Student.DateOfBirth);
console.log(Student.subjects);
Student.getTotalMarks();


//Members of Array
var PlayerDetails=["Dhoni", "Virat", "Sachin"];

console.log(PlayerDetails.length); //3 property
console.log(PlayerDetails.reverse());  //reverse is predefined

console.log(PlayerDetails.pop());  //pop printsonly the last value of the array
console.log("latest PlayerDetails;", PlayerDetails);
console.log(PlayerDetails.length);

