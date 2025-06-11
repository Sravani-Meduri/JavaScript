class Person {
    constructor(name){
        this.name = name;

    }
    act(){
        console.log(`${this.name} performs support activities `)
    }
}
class OfficeGoer extends Person{
    act(){
        console.log(`${this.name} goes to office everyday and does his office activities`)
    }


}

class GoestoMarket extends Person{
    act(){
        console.log(`${this.name} goes to market and buys vegetables every sunday`)
    }
}

let PersonName = "Sravani"
let Person1 = new Person(PersonName)
Person1.act()
let Person2 = new OfficeGoer(PersonName)
Person2.act()
