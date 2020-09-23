let Person = require('../src/person');



describe('Person class', function() {

  let person = new Person('Ryan', 30, 'male', [
    'being a hardarse',
    'agile',
    'ssd hard drives',
  ]);

  it('Should check if the name is Ryan', function(){
    expect(person.name).toBe('Ryan')
  })

  it('Records the age', function() {
    expect(person.age).toEqual(30);
  });

  it('Should check if gennder is Male' , function(){
    expect(person.gender).toBe('male')
  })

  it('Should check the interests', function(){
    expect(person.interest).toEqual( [
      'being a hardarse',
      'agile',
      'ssd hard drives',
    ])
  })

  it('Checks if the function is called', function(){
    spyOn(person, 'hello')
    person.hello()
    expect(person.hello).toHaveBeenCalled()
  })

  it('Should be called x times', function(){
    spyOn(person, 'hello')
    person.hello()
    person.hello()
    expect(person.hello).toHaveBeenCalledTimes(2)
  })

  it('Should be called x times', function(){
    spyOn(person, 'hello')
    person.hello()
    expect(person.hello).toHaveBeenCalledWith()
  })

  it('checks if hello() contains a message', function() {
    expect(person.hello()).toEqual(
      'Hello, my name is Ryan and I am 30 Years old male. My interests are being a hardarse, agile and ssd hard drives.'
    );
  });
});
