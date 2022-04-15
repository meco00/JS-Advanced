const {expect}=require('chai');
const {mathEnforcer}=require('./app.js');
const PaymentPackage = require('./PaymentPackage');

describe('mathEnforcer should work correctly',() => {

    describe('addFive method',() => {
        it('should return undefined if input is not number',()=>{
             expect(mathEnforcer.addFive('a')).to.be.undefined;
             expect(mathEnforcer.addFive([])).to.be.undefined;
             expect(mathEnforcer.addFive({})).to.be.undefined;
        });
        it('should add 5 to valid input',()=>{
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(1.25)).to.be.closeTo(6.25,0.01);
       });
    });
    describe('subtractTen method',() => {
        it('should return undefined if input is not number',()=>{
             expect(mathEnforcer.subtractTen('a')).to.be.undefined;
             expect(mathEnforcer.subtractTen([])).to.be.undefined;
             expect(mathEnforcer.subtractTen({})).to.be.undefined;
        });
        it('should subtract 10 from valid input',()=>{
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
            expect(mathEnforcer.subtractTen(9.50)).to.be.closeTo(-0.50,0.01);
       });
    });
    describe('sum method',() => {
        it('should return undefined if first param is not number',()=>{
             expect(mathEnforcer.sum('a',1)).to.be.undefined;
             expect(mathEnforcer.sum([],1)).to.be.undefined;
             expect(mathEnforcer.sum({},1)).to.be.undefined;
        });
        it('should return undefined if second param is not number',()=>{
            expect(mathEnforcer.sum(5,'a')).to.be.undefined;
            expect(mathEnforcer.sum(5,[])).to.be.undefined;
            expect(mathEnforcer.sum(5,{})).to.be.undefined;
       });
       it('should work correctly',()=>{
        expect(mathEnforcer.sum(5,5)).to.be.equal(10);
        expect(mathEnforcer.sum(5,-1)).to.be.equal(4);
        expect(mathEnforcer.sum(5,1.25)).to.be.closeTo(6.25,0.01);
        expect(mathEnforcer.sum(5.25,1.25)).to.be.closeTo(6.50,0.01);
        });
    });

 });

