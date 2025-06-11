//Local Storage
//local storage is to store the value in local with no expiration and available after browser closed
 
localStorage.setItem("Player", "Rishabh Pant")
localStorage.setItem("Employee", "Sravani")
localStorage.setItem("Movie", "Bhairavam")
 
 
//if you want to remove one particular item from above list
//localStorage.removeItem("Player")

 
//if you want to clear
//localStorage.clear()

 
//if you want to you clear manually go to console->loaclstorage -> and click on circle with line
// localStorage.setItem("userName", "Mounica");
// localStorage.setItem("bankName", "HDFC Bank");
 
 
let userName = localStorage.getItem("Employee");
document.writeln(`Welcome ${userName}`);