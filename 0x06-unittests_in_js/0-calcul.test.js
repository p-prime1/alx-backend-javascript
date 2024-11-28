const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should returns sume of two numbers', () =>  {
    const result = calculateNumber(4, 3);
    assert.equal(result, 7);
  });
  it('Rounds up and returns the sum', () => {
    assert.equal(calculateNumber(4.2, 5.8), 10);
  });
  it('Rounds up Negative numbers', () => {
    assert.equal(calculateNumber(-3.2, -4.7), -8);
  });
  it('Rounds up properly', () => {
    assert.equal(calculateNumber(1.5, 2.5), 5);
  });
  it('Input is zero', () => {
    assert.equal(calculateNumber(0, 4.9), 5);
  })
});
