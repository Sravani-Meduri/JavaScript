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

let person = {
    FirstName: "Sravani",
    LastName: "Meduri",

    get fullname(){
        return this.FirstName + " " + this.LastName 
    },
    set fullname(Name){
        [this.FirstName, this.LastName] = Name.split(" ")

    }
}
console.log(person.fullname)
person.fullname = "Meduri Rohith"
console.log(person.FirstName)





