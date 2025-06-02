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


function fetchData(callback) {
  console.log("Fetching data...");
 
  setTimeout(() => {
    console.log("Data fetched.");
    callback();  // call callback after 2 seconds
  }, 2000);
}
 
function processData() {
  console.log("Processing data...");
}
 
fetchData(processData);
 
// Output:
// Fetching data...
// (wait 2 seconds)
// Data fetched.
// Processing data...'






