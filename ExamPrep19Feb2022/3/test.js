const flowerShop = require('./flowerShop.js');
const {expect} = require('chai');


describe("Flower Shop functionality", function() {
    describe("calcPriceOfFlowers functionality", function() {
        it("should work with valid input parameters", function() {
            const flower='Edelvays';

            const price=2;
            const quantity=3;

            const sum=(price*quantity).toFixed(2);

            expect(flowerShop.calcPriceOfFlowers(flower,price,quantity)).to.be.equals(`You need $${sum} to buy ${flower}!`);
        });
        it("should throw error when flower is not string", function() {

            const price=2;
            const quantity=3;

            expect(()=>flowerShop.calcPriceOfFlowers(1,price,quantity)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers({},price,quantity)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers([],price,quantity)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(1.25,price,quantity)).to.throw();
        });
        it("should throw error when price is not integer", function() {

            const flower='Edelvays';
            const quantity=3;

            expect(()=>flowerShop.calcPriceOfFlowers(flower,1.25,quantity)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,1.5,quantity)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,'',quantity)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,'a',quantity)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,{},quantity)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,[],quantity)).to.throw();
        });
        it("should throw error when quantity is not integer", function() {

            const flower='Edelvays';
            const price=3;

            expect(()=>flowerShop.calcPriceOfFlowers(flower,price,1.25)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,price,1.5)).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,price,'')).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,price,'a')).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,price,{})).to.throw();
            expect(()=>flowerShop.calcPriceOfFlowers(flower,price,[])).to.throw();
        });

     });
     describe("checkFlowersAvailable functionality", function() {
        it("should return flower available when garden includes flower", function() {
            const flower='Lily';

            const garden=['Rose', 'Lily', 'Orchid'];


            expect(flowerShop.checkFlowersAvailable(flower,garden)).to.be.equals(`The ${flower} are available!`);
        });
        it("should return flower sold when garden does not include flower", function() {
            const flower='Edelvays';

            const garden=['Rose', 'Lily', 'Orchid'];


            expect(flowerShop.checkFlowersAvailable(flower,garden)).to.be.equals(`The ${flower} are sold! You need to purchase more!`);
        });
    });
    describe("sellFlowers functionality", function() {
        it("should return changed array of flowers with valid input", function() {
            const space= 2 ;

            const garden=['Rose', 'Lily', 'Orchid'];

            const remainingFlowers=['Rose', 'Lily'];

            expect(flowerShop.sellFlowers(garden,space)).to.be.equals(remainingFlowers.join(' \/ '));
            expect(flowerShop.sellFlowers(remainingFlowers,0)).to.be.equals('Lily');
        });
        it("should throw error when garden is not array", function() {
            const space= 2 ;

            expect(()=>flowerShop.sellFlowers('',space)).to.throw();
            expect(()=>flowerShop.sellFlowers('a',space)).to.throw();
            expect(()=>flowerShop.sellFlowers(1,space)).to.throw();
            expect(()=>flowerShop.sellFlowers(1.25,space)).to.throw();
            expect(()=>flowerShop.sellFlowers({},space)).to.throw();
        });
        it("should throw error when space is not integer", function() {
            const garden=['Rose', 'Lily', 'Orchid'];

            expect(()=>flowerShop.sellFlowers(garden,1.25)).to.throw();
            expect(()=>flowerShop.sellFlowers(garden,1.2)).to.throw();
            expect(()=>flowerShop.sellFlowers(garden,'')).to.throw();
            expect(()=>flowerShop.sellFlowers(garden,'a')).to.throw();
            expect(()=>flowerShop.sellFlowers(garden,[])).to.throw();
            expect(()=>flowerShop.sellFlowers(garden,{})).to.throw();
        });
        it("should throw error when space is less than 0", function() {
            const garden=['Rose', 'Lily', 'Orchid'];

            expect(()=>flowerShop.sellFlowers(garden,-1)).to.throw();
        });
        it("should throw error when space is equal or greater than garden flowers count", function() {
            const garden=['Rose', 'Lily', 'Orchid'];

            expect(()=>flowerShop.sellFlowers(garden,3)).to.throw();
            expect(()=>flowerShop.sellFlowers(garden,4)).to.throw();
        });
    });

});
