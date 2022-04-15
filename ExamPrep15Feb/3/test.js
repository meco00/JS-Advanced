const dealership = require('./dealership');
const {expect} = require('chai');



describe("Dealership tests", function() {
    describe("newCarCost functionality", function() {

        it("should work correctly", function() {
           expect(dealership.newCarCost('BMW M3',15000)).to.be.equal(15000);
        });
        it("should work correctly with discount", function() {
            expect(dealership.newCarCost('Audi A4 B8',16000)).to.be.equal(1000);
            expect(dealership.newCarCost('Audi A6 4K',21000)).to.be.equal(1000);
            expect(dealership.newCarCost('Audi A8 D5',26000)).to.be.equal(1000);
            expect(dealership.newCarCost('Audi TT 8J',15000)).to.be.equal(1000);
         });
     });
     describe("carEquipment functionality", function() {

        it("should work correctly", function() {
            const extras =['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            const indexes= [0, 3];

           expect(dealership.carEquipment(extras,indexes)).to.deep.equal(['heated seats','navigation']);
           expect(dealership.carEquipment(extras,[0])).to.deep.equal(['heated seats']);
        });
        it("should return empty array if indexes are invalid", function() {
            

            expect(dealership.carEquipment('',[])).to.deep.equals([]);
            expect(dealership.carEquipment(['heated seats'],[1])).to.deep.equals([undefined]);
         });
     });
     describe("euroCategory functionality", function() {

        it("should work correctly", function() {
           expect(dealership.euroCategory(4)).to.be.equal('We have added 5% discount to the final price: 14250.');
           expect(dealership.euroCategory(5)).to.be.equal('We have added 5% discount to the final price: 14250.');
        });
        it("should return low  category", function() {
            expect(dealership.euroCategory(3)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(2)).to.be.equal('Your euro category is low, so there is no discount from the final price!');
         });

     });

});
