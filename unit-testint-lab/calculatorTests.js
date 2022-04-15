const {expect}=require('chai');
const {createCalculator}=require('./app');

describe('Calculator checker',()=>{
     let instance=null;

    beforeEach(()=>{
       instance=createCalculator();
    });

    it('has all properties',()=>{
       expect(instance).to.have.ownProperty('get');
       expect(instance).to.have.ownProperty('add');
       expect(instance).to.have.ownProperty('subtract');
    });

    it('get should return 0 when dont added any number',()=>{
        expect(instance.get()).to.be.equal(0);
    });

    it('add should correctly add number to calculator',()=>{
        instance.add(1);
        expect(instance.get()).to.be.equal(1);
    });

    it('add should correctly when add multiple numbers to calculator',()=>{
        instance.add(1);
        instance.add(2);
        instance.add(2);
        expect(instance.get()).to.be.equal(5);
    });

    it('subtract should subtract number from calculator value',()=>{
        instance.subtract(1);
        expect(instance.get()).to.be.equal(-1);
    });

    it('subtract should subtract multiple numbers from calculator value',()=>{
        instance.subtract(1);
        instance.subtract(2);
        instance.subtract(2);
        expect(instance.get()).to.be.equal(-5);
    });

    it('subtract and add should work mutually',()=>{
        instance.add(1);
        instance.add(4);
        instance.subtract(1);
        expect(instance.get()).to.be.equal(4);
    });

    it('subtract and add should work mutually when params are string which contains number',()=>{
        instance.add('1');
        instance.add('2');
        instance.subtract('4');
        expect(instance.get()).to.be.equal(-1);
    });

    it('subtract and add should work mutually when add method params are string which contains number',()=>{
        instance.add('1');
        instance.add('2');
        instance.subtract(4);
        expect(instance.get()).to.be.equal(-1);
    });

    it('subtract and add should work mutually when subtract method params are string which contains number',()=>{
        instance.add(10);
        instance.subtract('5');
        instance.subtract('4');
        expect(instance.get()).to.be.equal(1);
    });




});