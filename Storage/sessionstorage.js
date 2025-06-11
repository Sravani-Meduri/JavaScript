//sessionstorage data temporarily cleared when the tab or browser is closed
 
sessionStorage.setItem("Movie", "AlaVaikuntapuramlo...");
 
sessionStorage.setItem("Director" , "Trivikram");
 
//sessionStorage.removeItem("Director");
 
//sessionStorage.clear();
 
 
let Moviedetails = sessionStorage.getItem("Movie")
document.writeln(`${Moviedetails} is one of the best films in the year 2020`);