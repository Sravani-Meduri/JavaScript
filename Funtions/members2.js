//Members of function

// function SubjectDetails(Subject1, Subject2){
//     console.log(SubjectDetails.name)   // name function returns the name of the funtion in o/p by default
//     console.log(SubjectDetails.length) //length returns the no. of parameters in teh function

// }
// SubjectDetails();

//understanding prototype

// function Player(){
//     console.log("Player")
//     console.log(this)

// }
// //prototype

// Player.prototype.getPlayerinfo = function(){
//     console.log("MS Dhoni is pride of Indian Cricket")
//  }

// let newPlayer= new Player()
// newPlayer.getPlayerinfo()

//prototpye using this keyword

// function Player(){
//     console.log("Player")
//     this.name = "Dhoni"
//     this.age='40',
//     this.position = "Captain"
//     console.log(this)

// }

// Player.prototype.getPlayerinfo = function(){
//     console.log(`${this.name} is really great as he is playing at the age of ${this.age}`)

// Player.prototype.getCaptaininfo = function(){
//     console.log(`${this.name} is the ${this.position} of CSK`)
// }
// }

// let newPlayer = new Player()
// newPlayer.getPlayerinfo()
// newPlayer.getCaptaininfo()


// //prototype by passing arguments

function Player(PlayerName, PlayerAge, PlayerPosition){
    console.log("Player")
    this.name = PlayerName
    this.age=PlayerAge
    this.position = PlayerPosition
    console.log(this)

}
Player.prototype.getPlayerinfo = function(){
    console.log(`${this.name} is really great as he is playing at the age of ${this.age}`)

Player.prototype.getCaptaininfo = function(){
    console.log(`${this.name} is the ${this.position} of CSK`)
}
}


let newPlayer = new Player("Dhoni", '40', "Captain")
newPlayer.getPlayerinfo()
newPlayer.getCaptaininfo()

let anotherPlayer = new Player("Virat", '37', "Vice-Captain")
anotherPlayer.getPlayerinfo();
anotherPlayer.getCaptaininfo();




