//call method
let TeamDetails = {
    name: "Chennai Super Kings",
    Captain: "MS DHONI",
    getTeaminfo : function(coach, TotalTeamCount){
        console.log(this.name)
        console.log(this.Captain)
        console.log(this)
        console.log(coach)
        console.log(TotalTeamCount)
        console.log(`${this.Captain} is the Captain of ${this.name}. ${coach} is very dedicated and the team has totla members of ${TotalTeamCount} `)
        console.log(`PlayerName: ${this.name}, Captain: ${this.Captain}, coach:${coach}, Teamcount:${TotalTeamCount}`)
    }
}

let Team2Details = {
    name: "Gujarat Titans",
    Captain: "Subhman Gill",
    getTeam2info : function(){

    }

}

//TeamDetails.getTeaminfo("Hssain", '500');
//TeamDetails.getTeaminfo.call(Team2Details)  // in o/p, we get the details of Team2Details because we are calling that object
//TeamDetails.getTeaminfo.call(Team2Details, "Ashish Nehra", '200') //we can pass individual arguments as well apart from calling te object

//apply method --> It is same like call method but here we pass arguments in the form of array
//TeamDetails.getTeaminfo.apply(Team2Details, ["Ashish Nehra", '200']) 

//bind method --> It creates a new function with 'this' set to the specified value and arguments present if provided
//console.log(TeamDetails.getTeaminfo.bind(Team2Details, ["Ashish Nehra", '200']))

 let newTeamDetails = TeamDetails.getTeaminfo.bind(Team2Details, "Ashish Nehra", '200') 
// //here when we use bind, a new function i.e. newTeamDetails(here) is created
newTeamDetails();






