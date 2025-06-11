//defining class wihtout argumnets
//------------------------------------------------------------------------------
// class School {
//   //Members - constructor, Methods=function, Properties
//   //function designed inside the class ---> then it is called method
//   //constructor member
//   constructor(){
//     console.log("Student name is Sravani")
//   }
//   //Method member
//   enrollStudent(){
//     console.log("Student name is Sravani and his enrolled ID is 12345")

//   }
// }
// //new School().enrollStudent()
// const mySchool = new School();   //instance of the object
// mySchool.enrollStudent();

//------------------------------------------------------------------------------

class School {
  //Members - constructor, Methods=function, Properties
  //function designed inside the class ---> then it is called method
  //constructor member --> We can only declare one constructor in a class
  //fields - which holds the value
  //sname = "Sravani"; 
   sname;
   sID;   //need not use let keyword if you declare filed  outside the member
  constructor(name, ID){
    console.log(`Student name is ${name}`)
    this.sname = name;
    this.sID= ID;
  }
  //Method member
  enrollStudent(){
    console.log(`Student name is ${this.sname} and his enrolled ID is ${this.sID}`)

  }
  getStudentdetails(){
    return  ["Sravani", "Mounica", "Bhavya", "Rohith"]
  }
}
//new School().enrollStudent()
const mySchool = new School("Sravani", "23456");   //instance of the object
mySchool.enrollStudent();
let studentdetails = mySchool.getStudentdetails();
console.log(studentdetails)