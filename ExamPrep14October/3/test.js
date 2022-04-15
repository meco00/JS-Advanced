const testNumbers=require('./testNumbers');
const {expect}=require('chai');


describe("testNumbers", function() {

    describe("sumNumber functionality", function() {
        it("should work correctly", function() {
            expect( testNumbers.sumNumbers(2,3)).to.be.equals('5.00');
            expect( testNumbers.sumNumbers(-2,3)).to.be.equals('1.00');
            expect( testNumbers.sumNumbers(2,-3)).to.be.equals('-1.00');
            expect( testNumbers.sumNumbers(-2,-3)).to.be.equals('-5.00');
            expect( testNumbers.sumNumbers(2.559,3)).to.be.equals('5.56');
            expect( testNumbers.sumNumbers(2,3.557)).to.be.equals('5.56');
        });
        it('should return undefined if input is not number',function(){
            expect( testNumbers.sumNumbers(2,'3')).to.be.undefined;
            expect( testNumbers.sumNumbers('1',3)).to.be.undefined;
            expect( testNumbers.sumNumbers('1','3')).to.be.undefined;

        });
     });
     describe("numberChecker functionality", function() {
        it("should work correctly", function() {
            expect( testNumbers.numberChecker(1)).to.include('odd');
            expect( testNumbers.numberChecker('2')).to.include('even');
            expect( testNumbers.numberChecker('-1')).to.include('odd');
            expect( testNumbers.numberChecker(-2)).to.include('even');
            expect( testNumbers.numberChecker(2.22)).to.include('odd');
        });
        it('should throw error',function(){
             expect( ()=> testNumbers.numberChecker('a')).to.throw();
             expect( ()=> testNumbers.numberChecker({})).to.throw();
             expect( ()=> testNumbers.numberChecker(undefined)).to.throw();
        });
     });
     describe("averageSumArray functionality", function() {
        it("should work correctly", function() {
            expect( testNumbers.averageSumArray([10,3,2])).to.be.equal(5);
        });
     
     });
});
