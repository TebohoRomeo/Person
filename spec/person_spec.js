let person = require("../src/person")

const myPerson = new person("Ryan",30,"male",["being a hardarse","agile", "ssd hard drives"])
// console.log(p.name) 
describe("Person class", function(){

    it("checks if hello() contains a message", function(){
        expect(myPerson.hello()).toEqual("Hello, my name is Ryan and I am 30 Years old male. interests are  being a hardarse,agile,ssd hard drives");
    })
})