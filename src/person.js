// Author: Teboho Romeo Lekhalo
// Date: 13 January 2020.
'use strict'

class Person {

    constructor(name, age,gender, interest){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
    }

    hello(){
        let greet = "Hello, my name is" + " " + this.name + " " + "and I am" + " " + this.age + " " + "Years old" + " " + this.gender + "." + " My interests are ";

        for (let i = 0; i < this.interest.length; i++){
            if (i == this.interest.length - 2){
                greet += this.interest[i] + " and ";
            }
            else if (i == this.interest.length - 1){
                greet += this.interest[i] + ".";
            }
            else {
                greet += this.interest[i] + ", ";
            }
        }
        return greet;
        
        // For loop for interest array...
    }
    
}


let person = new Person('Ryan', 30,'male',['being a hardarse', ' agile', ' ssd hard drives']);

let greeting = person.hello();
// console.log(greeting);

module.exports = Person;
