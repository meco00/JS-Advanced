const numberOperations=require('./03. Number Operations_Resources');
const {expect} = require('chai');



describe("numberOperations tests", function() {

    describe("powNumber functionality", function() {
        it("should work correctly", function() {
            expect(numberOperations.powNumber(2)).to.be.equal(4);
            expect(numberOperations.powNumber(3)).to.be.equal(9);
        });
     });
     describe("numberChecker functionality", function() {
        it("should work correctly with number less than 100", function() {
            expect(numberOperations.numberChecker(99)).to.be.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker(98)).to.be.equal('The number is lower than 100!');
        });
        it("should work correctly with number more or equal than 100", function() {
            expect(numberOperations.numberChecker(100)).to.be.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker(101)).to.be.equal('The number is greater or equal to 100!');
        });
        it("should throw if input is not number", function() {
             expect(() => numberOperations.numberChecker('test')).to.throw('The input is not a number!');
             expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
             expect(() => numberOperations.numberChecker({})).to.throw('The input is not a number!');
        });

     });
     describe("sumArrays functionality", function() {
        it("should work correctly", function() {
            expect(numberOperations.sumArrays([1,2,3],[1,2,3])).to.deep.equal([2,4,6]);
            expect(numberOperations.sumArrays([3,2],[2,3])).to.deep.equal([5,5]);
            expect(numberOperations.sumArrays([1],[2,3,4,5])).to.deep.equal([3,3,4,5]);
            expect(numberOperations.sumArrays([2,3,4,5],[1])).to.deep.equal([3,3,4,5]);
        });
     });

   
});
