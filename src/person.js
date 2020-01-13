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
        return "Hello, my name is" + " " + this.name + " " + "and I am" + " " + this.age + " " + "Years old" + " "+ this.gender +"."+ " interests are " + " " + this.interest;
    }
}

let person = new Person('Ryan', 30,'male',['being a hardarse', ' agile', ' ssd hard drives']);

let greeting = person.hello();
console.log(greeting);

module.exports = Person;
