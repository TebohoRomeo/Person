let person = require('../src/person');

describe('Person class', function() {
// Test for Romeo
  it('Records the age', function() {
    const romeo = new person('Romeo', 30, 'male', [
      'being a hardarse',
      'agile',
      'ssd hard drives',
    ]);

    expect(romeo.age).toEqual(30);
  });

  it('checks if hello() contains a message', function() {
    const romeo = new person('Romeo', 22, 'male', [
      'being a hardarse',
      'agile',
      'ssd hard drives',
    ]);

    expect(romeo.hello()).toEqual(
      'Hello, my name is Romeo and I am 22 Years old male. My interests are being a hardarse, agile and ssd hard drives.'
    );
  });

//   Test for Mudi

  it('checks if hello() contains a message', function() {
    const mudi = new person('Mudi', 30, 'male', [
      'being a hardarse',
      'nerdy',
      'ssd hard drives',
    ]);

    expect(mudi.hello()).toEqual(
      'Hello, my name is Mudi and I am 30 Years old male. My interests are being a hardarse, nerdy and ssd hard drives.'
    );
  });

  it('Records the age', function() {
    const mudi = new person('Mudi', 30, 'male', [
      'being a hardarse',
      'agile',
      'ssd hard drives',
    ]);

    expect(mudi.age).toEqual(30);
  });

//   Test for Ryan

it('Records the age', function() {
    const ryan = new person('Ryan', 30, 'male', [
      'being a hardarse',
      'agile',
      'ssd hard drives',
    ]);

    expect(ryan.age).toEqual(30);
  });

  it('checks if hello() contains a message', function() {
    const ryan = new person('Ryan', 30, 'male', [
      'being a hardarse',
      'agile',
      'ssd hard drives',
    ]);

    expect(ryan.hello()).toEqual(
      'Hello, my name is Ryan and I am 30 Years old male. My interests are being a hardarse, agile and ssd hard drives.'
    );
  });
});
