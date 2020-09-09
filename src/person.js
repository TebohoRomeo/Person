// Author: Teboho Romeo Lekhalo
// Date: 13 January 2020.
'use strict';

class Person {
  constructor(name, age, gender, interest) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }

  hello() {
    let greet = `Hello, my name is ${this.name} and I am ${this
      .age} Years old ${this.gender}. My interests are ${this
      .interest[0]}, ${this.interest[1]} and ${this.interest[2]}.`;

    return greet;
  }
}

let person = new Person('Ryan', 30, 'male', [
  'being a hardarse',
  'agile',
  'ssd hard drives',
]);

let greeting = person.hello();
console.log(greeting);

module.exports = Person;
