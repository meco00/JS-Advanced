const rentCar = require('./rentCar.js');
const { expect } = require('chai');


describe("RentCar functionality", function() {
    describe("searchCar functionality", function() {
        it("should return string when model contains in shop", function() {
           
            const shop = ['Volkswagen', 'BMW', 'Audi','Audi'];
            const bmwModel='BMW';
            const audiModel='Audi';

            expect(rentCar.searchCar(shop,bmwModel)).to.be.equals(`There is ${1} car of model ${bmwModel} in the catalog!`);
            expect(rentCar.searchCar(shop,audiModel)).to.be.equals(`There is ${2} car of model ${audiModel} in the catalog!`);
        });
        it("should throw error when model not contains in shop", function() {
           
            const shop = ['Volkswagen', 'BMW', 'Audi','Audi'];
            const toyotaModel='Toyota';

            expect(()=>rentCar.searchCar(shop,toyotaModel)).to.throw('There are no such models in the catalog!');
        });
        it("should throw error when shop is not array", function() {
            const toyotaModel='Toyota';

            expect(()=> rentCar.searchCar('test',toyotaModel)).to.throw();
            expect(()=> rentCar.searchCar({},toyotaModel)).to.throw();
            expect(()=> rentCar.searchCar(5,toyotaModel)).to.throw();
        });
        it("should throw error when model is not string", function() {
            const shop = ['Volkswagen', 'BMW', 'Audi','Audi'];
            const toyotaModel='Toyota';

            expect(()=> rentCar.searchCar(shop,[])).to.throw();
            expect(()=> rentCar.searchCar(shop,{})).to.throw();
            expect(()=> rentCar.searchCar(shop,5)).to.throw();
        });



     });
     describe("calculatePriceOfCar functionality", function() {
        it("should work when model is in catalogue", function() {
            
            const bmwModel='BMW';
            const bmwCostPerDay=45;
            const days=2;

            expect(rentCar.calculatePriceOfCar(bmwModel,days)).to.be.equals(`You choose ${bmwModel} and it will cost $${90}!`);
            expect(rentCar.calculatePriceOfCar('Mercedes',days)).to.be.equals(`You choose ${'Mercedes'} and it will cost $${100}!`);
        });
        it("should throw error when model is in not catalogue", function() {
            

            expect(()=>rentCar.calculatePriceOfCar('Lada',1)).to.throw('No such model in the catalog!');
            expect(()=>rentCar.calculatePriceOfCar('Test',1)).to.throw('No such model in the catalog!');
            expect(()=>rentCar.calculatePriceOfCar('',1)).to.throw('No such model in the catalog!');
        });
        it("should throw error when model is not string", function() {
            

            expect(()=>rentCar.calculatePriceOfCar(1,1)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar([],1)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(1.55,1)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(1.50,1)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(-1.5,1)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar({},1)).to.throw('Invalid input!');
            
        });
        it("should throw error when days is not integer", function() {
            
            const bmwModel='BMW';

            expect(()=>rentCar.calculatePriceOfCar(bmwModel,'A')).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(bmwModel,1.25)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(bmwModel,1.20)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(bmwModel,1.2)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(bmwModel,{})).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(bmwModel,[])).to.throw('Invalid input!');
            
        });
        it("should throw error when model is not string and days is not integer ", function() {
            
            expect(()=>rentCar.calculatePriceOfCar(5,'A')).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar(5.50,1.25)).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar({},{})).to.throw('Invalid input!');
            expect(()=>rentCar.calculatePriceOfCar([],[])).to.throw('Invalid input!');
            
        });
     });
     describe("checkBudget functionality", function() {
        it("should return string when budget is bigger or equal", function() {
            
            expect(rentCar.checkBudget(10,1,20)).to.be.equals('You rent a car!');
            expect(rentCar.checkBudget(10,1,10)).to.be.equals('You rent a car!');
        });
        it("should return string when budget is less", function() {
            
            expect(rentCar.checkBudget(10,3,20)).to.be.equals('You need a bigger budget!');
            expect(rentCar.checkBudget(10,3,10)).to.be.equals('You need a bigger budget!');
        });
        it("should  throw when costPerDay is not int", function() {
            
            expect(()=>rentCar.checkBudget(10.50,3,20)).to.throw();
            expect(()=>rentCar.checkBudget({},3,10)).to.throw();
            expect(()=>rentCar.checkBudget([],3,10)).to.throw();
            expect(()=>rentCar.checkBudget('a',3,10)).to.throw();
        });
        it("should  throw when days is not int", function() {
            
            expect(()=>rentCar.checkBudget(10,3.50,20)).to.throw();
            expect(()=>rentCar.checkBudget(10,3.5,20)).to.throw();
            expect(()=>rentCar.checkBudget(10,'a',20)).to.throw();
            expect(()=>rentCar.checkBudget(10,[],20)).to.throw();
            expect(()=>rentCar.checkBudget(10,{},20)).to.throw();
        });
        it("should  throw when budget is not int", function() {
            
            expect(()=>rentCar.checkBudget(10,3,20.50)).to.throw();
            expect(()=>rentCar.checkBudget(10,3,20.5)).to.throw();
            expect(()=>rentCar.checkBudget(10,3,'a')).to.throw();
            expect(()=>rentCar.checkBudget(10,3,[])).to.throw();
            expect(()=>rentCar.checkBudget(10,3,{})).to.throw();
        });
       
     });
     // TODO: …
});
