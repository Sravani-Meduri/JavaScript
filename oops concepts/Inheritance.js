class Parent{
    constructor(character, color){
        this.character = character;
        this.color = color;
    }

    displayParentDetails(){
        console.log(`Father's character is ${this.character}`)
        console.log(`Father's color is ${this.color}`)

    }
}
// let Parent1 = new Parent("Angry", "Fair")
// Parent1.displayParentDetails();
class Kid extends Parent{
    constructor(character, color){
        super(character, color)  // by using this keyword, we can pass values to parent

    }
    
    displayKiddetails(){
        this.displayParentDetails()
    }

}
let kid1 = new Kid("Angry", "Fair")
//kid1.displayKiddetails()
kid1.displayParentDetails()

