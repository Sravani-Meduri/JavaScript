//predefined function as callback function
//------------------------------------------------------------------------------------
// function myName(){
//   console.log("My name is Sravani")
// }
// //myName();

// setTimeout(myName, 5000)   //executes myName() funciton after 5000ms 
// //setTimeout is the built in function in JS.


//simple call back function withut parameters
//------------------------------------------------------------------------------------
// function setmyName(callbackfn){
//   callbackfn();

// }
// function myName(){
//   console.log("My Name is Sravani and my favourite food is Biryani")
// }
// setmyName(myName) // here we passed a named function as an argument to setmyName

//call back function by passing  anonymous function as an argument withput parameters
//------------------------------------------------------------------------------------

// function setmyName(callbackfn){
//   callbackfn();

// }
// setmyName(function myName(){
//   console.log("My favourite player is MS Dhoni")
// })

//call back function by passing arrow function as an argument withput parameters
//------------------------------------------------------------------------------------
// function setmyName(callbackfn){
//   //callbackfn();
//   setTimeout(callbackfn, 5000);

// }
// setmyName(() => {
//   console.log("I am learning JavaScript")
// })

//callback function by passing argumnets tot eh callback function
//------------------------------------------------------------------------------------
// function MovieDetails(callbackfn){
//   callbackfn("Godavari", "Seetharamam", "Khaleja");

// }
// MovieDetails((Movie1, Movie2, Movie3) => {
//   console.log(`My favourite Movie among the three is ${Movie1}`);
//   console.log(`${Movie2} is the debut film for Mrunal Thakur`);
//   console.log(`The re-release of ${Movie3} got better response than it's previous release`)
// })
//------------------------------------------------------------------------------------


//callback function having two parameters 
function getEmployeeDetails(EmployeeName, callbackfn){
  callbackfn(EmployeeName, "Mounica",);

}
getEmployeeDetails("Sravani", (Employee1, Employee2) => {
  console.log(`${Employee1} is very dedicated towards work`)
  console.log(`I will reach out to ${Employee2} for the issue related details`)
})





// function add(a,b){
//     console.log("Addition:", a+b)
// }

// function subtract(a,b){
//     console.log("Subtraction:", a-b)

// }
// function multiply(a,b){
//     console.log("Multiplication:", a*b)

// }
// function divide(a,b){
//     console.log("Division:", a/b)

// }

// function operation(x,y,callback){ 
//     callback(x,y);

// }
// operation(3,5,add);
// operation(3,5,multiply);



// function greet(name, callback) {
//   console.log("Hello, " + name + "!");
//   callback();
// }
 
// function sayGoodbye() {
//   console.log("Goodbye!");
// }
 
// // Pass sayGoodbye as a callback to greet
// greet("Alice", sayGoodbye);


// function fetchData(callback) {
//   console.log("Fetching data...");
 
//   setTimeout(() => {
//     console.log("Data fetched.");
//     callback();  // call callback after 2 seconds
//   }, 2000);
// }
 
// function processData() {
//   console.log("Processing data...");
// }
 
// fetchData(processData);
 
// Output:
// Fetching data...
// (wait 2 seconds)
// Data fetched.
// Processing data...'











