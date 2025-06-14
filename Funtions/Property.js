//by using property, we can control the value

//--------------------------------------------------------------------------

// class Product {

//     constructor(name, price) {

//         this._name = name;

//         this._price = price;

//     }

//     get price() {

//         return this._price;

//     }

//     set price(value) {

//         if (value < 0) {

//             console.log("Invalid price!");

//         } else {

//             this._price = value;

//         }

//     }

// }

// let p = new Product("Phone", 500);

// console.log(p.price); // 500

// p.price = -100;       // Invalid price!

//------------------------------------------------------------------------------------

// let person = {
//     FirstName: "Sravani",
//     LastName: "Meduri",

//     get fullname(){
//         return this.FirstName + " " + this.LastName 
//     },
//     set fullname(Name){
//         [this.FirstName, this.LastName] = Name.split(" ")

//     }
// }
// console.log(person.fullname)
// person.fullname = "Meduri Rohith"
// console.log(person.FirstName)

//------------------------------------------------------------------------------------


// class Office {
//     oname = "abc company";
//     oID = "12345"
// }

// let officedetails = new Office();
// console.log(officedetails.oname)  //abc company
// console.log(officedetails.oID) //  12345

// officedetails.oID = "98765";    //98765 will be reassigned to officedetails.oID
// //officedetails.oID = "Sravani" --> if we put like that, this is not valid data as id should be number but not string. there comes the topic of properties which is combination of get and set methods


// setTimeout(() => {
// console.log(`%cOffice ID is ${officedetails.oID}`, 'color:blue')    //98765
// },5000)

//-------------------------------------------------------------------------------------------

// class Office {
//     oname = "abc company";
//     _oID = 12345

//     get oID(){
//         return this._oID;
//     }

//     set oID(value){
//         if(typeof value === "number"){
//             this._oID = value;
//         }
//         else{
//             console.log("Please enter only number for Office ID details!!!")
//         }
//     }
// }

// let officedetails = new Office();
// console.log(officedetails.oname)  //abc company
// console.log(officedetails.oID) //  12345

// //officedetails.oID = "98765";    //98765 will be reassigned to officedetails.oID
// officedetails.oID = "Sravani" //--> //if we put like that, this is not valid data as id should be number but not string. there comes the topic of properties which is combination of get and set methods


// // setTimeout(() => {
// // console.log(`%cOffice ID is ${officedetails.oID}`, 'color:blue')    //98765
// // },5000)

//-----------------------------------------------------------------------------------------

//get and set methdo by using constructor

class Hotel {
    _hname;
    hbill;

    constructor(name, bill){
        this._hname = name;
        this.hbill = bill;

    
    }
    get hname(){
        return this._hname;
    }

    set hname(value){
        if(typeof value === "string"){
            return this ._hname = value;
        }
        else{
            console.log(`Please enter string not ${value}`)
        }
    }
}

let hotel1 = new Hotel("Usha Grand", '3500')
//hotel1.hname = 678
hotel1.hname = "Food Forest"
console.log(hotel1.hname)
// console.log(hotel1.hname)
// console.log(hotel1.hbill)










