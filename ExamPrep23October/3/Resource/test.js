const library=require('./library');
const {expect}=require('chai');



describe("Library tests", function() {

    describe("calcPriceOfBook functionality", function() {

        it("should work correctly", function() {
            const nameOfBook='HarryPoter';
            price=20;

            expect(library.calcPriceOfBook(nameOfBook,1981)).to.be.equal(`Price of ${nameOfBook} is ${price.toFixed(2)}`);
        });
        it("should work correctly and have discound on price if book is before or equal 1980", function() {
            const nameOfBook='Poter';
            price=20;

            expect(library.calcPriceOfBook(nameOfBook,1980)).to.be.equal(`Price of ${nameOfBook} is ${(price*0.5).toFixed(2)}`);
            expect(library.calcPriceOfBook(nameOfBook,1979)).to.be.equal(`Price of ${nameOfBook} is ${(price*0.5).toFixed(2)}`);
        });
        it("should throw error if book name is not string", function() {

            expect(()=> library.calcPriceOfBook(5,1981)).to.throw('Invalid input');
            expect(()=> library.calcPriceOfBook([],1981)).to.throw('Invalid input');
            expect(()=> library.calcPriceOfBook({},1981)).to.throw('Invalid input');
            expect(()=> library.calcPriceOfBook(1.5,1981)).to.throw('Invalid input');
            expect(()=> library.calcPriceOfBook(-2,1981)).to.throw('Invalid input');
        });

        it("should throw error if year is not integer", function() {

            expect(()=> library.calcPriceOfBook('HarryPoter','invalid')).to.throw('Invalid input');
            expect(()=> library.calcPriceOfBook('HarryPoter','')).to.throw('Invalid input');
            expect(()=> library.calcPriceOfBook('HarryPoter',1.50)).to.throw('Invalid input');
            expect(()=> library.calcPriceOfBook('HarryPoter',-1.50)).to.throw('Invalid input');
            expect(()=> library.calcPriceOfBook('HarryPoter',[])).to.throw('Invalid input');
            expect(()=> library.calcPriceOfBook('HarryPoter',{})).to.throw('Invalid input');
        });

     });


         describe("findBook functionality", function() {
        it("should work correctly", function() {
            const books=['Troy', 'Life Style', 'Torronto'];
            expect(library.findBook(books,'Troy')).to.be.equal(`We found the book you want.`);
            expect(library.findBook(books,'HarryPotter')).to.be.equal(`The book you are looking for is not here!`);
        });
        it("should throw error if array length is 0", function() {
            expect(()=> library.findBook([],'Troy')).to.throw(`No books currently available`);
        });

     });

     describe("Arange books functionality", function() {
        it("should return string if shelves are more than book count", function() {
            expect(library.arrangeTheBooks(40)).to.be.equal(`Great job, the books are arranged.`);
            expect(library.arrangeTheBooks(39)).to.be.equal(`Great job, the books are arranged.`);     
            expect(library.arrangeTheBooks(0)).to.be.equal(`Great job, the books are arranged.`);
        });
        it("should return string if shelves are less than book count", function() {
            expect(library.arrangeTheBooks(41)).to.be.equal(`Insufficient space, more shelves need to be purchased.`);
            expect(library.arrangeTheBooks(42)).to.be.equal(`Insufficient space, more shelves need to be purchased.`);
        });
        it("should throw error if book count is not integer", function() {
            expect(()=>library.arrangeTheBooks('')).to.throw('Invalid input');
            expect(()=>library.arrangeTheBooks('test')).to.throw('Invalid input');
            expect(()=>library.arrangeTheBooks([])).to.throw('Invalid input');
            expect(()=>library.arrangeTheBooks({})).to.throw('Invalid input');
            expect(()=>library.arrangeTheBooks(1.55)).to.throw('Invalid input');
        });
        it("should throw error if book count is negative integer", function() {
            expect(()=>library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });
     });


});
