const chai  = require('chai');
const expect = chai.expect;
const calculateNumber= require('./2-calcul_chai.js');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return the sum of two numbers', () => {
            const result = calculateNumber('SUM', 4, 3);
            expect(result).to.equal(7);
        });

        it('Rounds up and returns the sum', () => {
            expect(calculateNumber('SUM', 4.2, 5.8)).to.equal(10);
        });

        it('Rounds up negative numbers', () => {
            expect(calculateNumber('SUM', -3.2, -4.7)).to.equal(-8);
        });

        it('Rounds up properly', () => {
            expect(calculateNumber('SUM', 1.5, 2.5)).to.equal(5);
        });

        it('Input is zero', () => {
            expect(calculateNumber('SUM', 0, 4.9)).to.equal(5);
        });
    });

    describe('SUBTRACT', () => {
        it('should subtract two numbers', () => {
            const result = calculateNumber('SUBTRACT', 4, 3);
            expect(result).to.equal(1);
        });

        it('Rounds up and returns the difference', () => {
            expect(calculateNumber('SUBTRACT', 4.2, 5.8)).to.equal(-2);
        });

        it('Rounds up negative numbers', () => {
            expect(calculateNumber('SUBTRACT', 3.2, -4.7)).to.equal(8);
        });

        it('Rounds up properly', () => {
            expect(calculateNumber('SUBTRACT', 2.5, 1.5)).to.equal(1);
        });

        it('Input is zero', () => {
            expect(calculateNumber('SUBTRACT', 0, 4.9)).to.equal(-5);
        });
    });

    describe('DIVIDE', () => {
        it('divides two numbers', () => {
            const result = calculateNumber('DIVIDE', 4, 2);
            expect(result).to.equal(2);
        });

        it('Rounds up and returns the quotient', () => {
            expect(calculateNumber('DIVIDE', 10.2, 5.2)).to.equal(2);
        });

        it('Rounds up negative numbers', () => {
            expect(calculateNumber('DIVIDE', -15.2, -4.7)).to.equal(3);
        });

        it('Rounds up properly', () => {
            expect(calculateNumber('DIVIDE', 5.5, 2.5)).to.equal(2);
        });

        it('Input is zero', () => {
            expect(calculateNumber('DIVIDE', 0, 4.9)).to.equal(0);
        });
        it('B is 0', () => {
            expect(calculateNumber('DIVIDE', 10, 0), 'Error');
        });
    });
});
