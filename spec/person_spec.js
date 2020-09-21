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

  it('checks if hello() contains a message', function() {
    expect(person.hello()).toEqual(
      'Hello, my name is Ryan and I am 30 Years old male. My interests are being a hardarse, agile and ssd hard drives.'
    );
  });

//   it('Records the age', function() {
//     const mudi = new Person('Mudi', 30, 'male', [
//       'being a hardarse',
//       'agile',
//       'ssd hard drives',
//     ]);

//     expect(mudi.age).toEqual(30);
//   });

// it('Records the age', function() {
//     const ryan = new Person('Ryan', 30, 'male', [
//       'being a hardarse',
//       'agile',
//       'ssd hard drives',
//     ]);

//     expect(ryan.age).toEqual(30);
//   });

//   it('checks if hello() contains a message', function() {
//     const ryan = new Person('Ryan', 30, 'male', [
//       'being a hardarse',
//       'agile',
//       'ssd hard drives',
//     ]);

//     expect(ryan.hello()).toEqual(
//       'Hello, my name is Ryan and I am 30 Years old male. My interests are being a hardarse, agile and ssd hard drives.'
//     );
//   });
});
