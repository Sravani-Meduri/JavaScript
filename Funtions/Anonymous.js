//define anonymous function --. It is nothig but anonymous function as a "function expression"
var ShowPlayerDetails = function(){
    let PlayerName="Dhoni";
    console.log(PlayerName);
}
//calling the function
ShowPlayerDetails();

//anonyaamous function by passing arguments

var ShowFoodDetails = function(FoodItem, Cost, Taste){
    console.log("FoodItem:", FoodItem);
    console.log(Cost);
    console.log(Taste);


}
ShowFoodDetails("Biryani", '150', "Average")

var getEmployeeDetails = function(EmployeeName, EmployeeID, Designation){
    Designation = Designation || "Software Engineer"
    console.log(EmployeeName + " " + EmployeeID);
    console.log(Designation);
    

}
getEmployeeDetails("Srujana", '34567')


