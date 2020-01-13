let erson = require("../src/person")

const myPerson = new erson("Ryan",30,"male",["being a hardarse","agile", "ssd hard drives"])


describe("Person class", function(){

    it("checks if hello() contains a message", function(){
        expect(myPerson.hello()).toEqual("Hello, my name is Ryan and I am 30 Years old male. interests are  being a hardarse,agile,ssd hard drives");
    })
})