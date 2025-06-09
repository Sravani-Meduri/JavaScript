class Product {

    constructor(name, price) {

        this._name = name;

        this._price = price;

    }

    get price() {

        return this._price;

    }

    set price(value) {

        if (value < 0) {

            console.log("Invalid price!");

        } else {

            this._price = value;

        }

    }

}

let p = new Product("Phone", 500);

console.log(p.price); // 500

p.price = -100;       // Invalid price!
