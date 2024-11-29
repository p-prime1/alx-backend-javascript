const assert = require('assert')
const calculateNumber = require('./1-calcul')

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should returns sume of two numbers', () =>  {
            const result = calculateNumber('SUM', 4, 3);
            assert.equal(result, 7);
        });
        it('Rounds up and returns the sum', () => {
            assert.equal(calculateNumber('SUM', 4.2, 5.8), 10);
        });
        it('Rounds up Negative numbers', () => {
            assert.equal(calculateNumber('SUM', -3.2, -4.7), -8);
        });
        it('Rounds up properly', () => {
            assert.equal(calculateNumber('SUM', 1.5, 2.5), 5);
        });
        it('Input is zero', () => {
            assert.equal(calculateNumber('SUM', 0, 4.9), 5);
        });
    });
    describe('SUBTRACT', () => {
        it('should subtract two numbers', () =>  {
            const result = calculateNumber('SUBTRACT', 4, 3);
            assert.equal(result, 1);
        });
        it('Rounds up and returns the sub', () => {
            assert.equal(calculateNumber('SUBTRACT', 4.2, 5.8), -2);
        });
        it('Rounds up Negative numbers', () => {
            assert.equal(calculateNumber('SUBTRACT', 3.2, -4.7), 8);
        });
        it('Rounds up properly', () => {
            assert.equal(calculateNumber('SUBTRACT', 2.5, 1.5), 1);
        });
        it('Input is zero', () => {
            assert.equal(calculateNumber('SUBTRACT', 0, 4.9), -5);
        });
    });
    describe('DIVIDE', () => {
        it('divides two numbers', () =>  {
            const result = calculateNumber('DIVIDE', 4, 2);
                assert.equal(result, 2);
        });
        it('Rounds up and returns the quotient', () => {
                assert.equal(calculateNumber('DIVIDE', 10.2, 5.2), 2);
        });
        it('Rounds up Negative numbers', () => {
                assert.equal(calculateNumber('DIVIDE', -15.2, -4.7), 3);
        });
        it('Rounds up properly', () => {
                assert.equal(calculateNumber('DIVIDE', 5.5, 2.5), 2);
        });
        it('Input is zero', () => {
            assert.equal(calculateNumber('DIVIDE', 0, 4.9), 0);
        })
    });
});