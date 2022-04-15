const bookSelection = require('./bookSelection.js');
const {expect} = require('chai');




describe("Book selection functionality", function() {
    describe("isGenreSuitable functionality", function() {

        it("should return the book is suitable", function() {

            expect(bookSelection.isGenreSuitable('Roman',13)).to.be.equals('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Roman',12)).to.be.equals('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Roman',11)).to.be.equals('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Thriller',13)).to.be.equals('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror',13)).to.be.equals('Those books are suitable');
        });
        it("should return the book is not suitable for kids", function() {

            const thrillerGenre='Thriller';
            const horrorGenre='Horror';


            expect(bookSelection.isGenreSuitable(thrillerGenre,12)).to.be.equals(`Books with ${thrillerGenre} genre are not suitable for kids at ${12} age`);
            expect(bookSelection.isGenreSuitable(thrillerGenre,11)).to.be.equals(`Books with ${thrillerGenre} genre are not suitable for kids at ${11} age`);
            expect(bookSelection.isGenreSuitable(horrorGenre,12)).to.be.equals(`Books with ${horrorGenre} genre are not suitable for kids at ${12} age`);
            expect(bookSelection.isGenreSuitable(horrorGenre,11)).to.be.equals(`Books with ${horrorGenre} genre are not suitable for kids at ${11} age`);
        });

     });
     describe("isItAffordable functionality", function() {

        it("should be able to buy book", function() {

            const budget=10;
            const price=10;

            const result=budget-price;

            expect(bookSelection.isItAffordable(price,budget)).to.be.equals(`Book bought. You have ${result}$ left`);
            expect(bookSelection.isItAffordable(10,11)).to.be.equals(`Book bought. You have ${1}$ left`);
            expect(bookSelection.isItAffordable(11.50,11.50)).to.be.equals(`Book bought. You have ${0}$ left`);
        });
        it("should not be able to buy book when budget is les than book price", function() {

            const budget=10;
            const price=11;

            expect(bookSelection.isItAffordable(price,budget)).to.be.equals('You don\'t have enough money');
        });
        it("should throw error when price is not number ", function() {

            const budget=10;

            expect(()=>bookSelection.isItAffordable('',budget)).to.throw();
            expect(()=>bookSelection.isItAffordable('a',budget)).to.throw();
            expect(()=>bookSelection.isItAffordable([],budget)).to.throw();
            expect(()=>bookSelection.isItAffordable({},budget)).to.throw();
        });
        it("should throw error when budget is not number ", function() {

            const price=11;

            expect(()=>bookSelection.isItAffordable(price,'')).to.throw();
            expect(()=>bookSelection.isItAffordable(price,'a')).to.throw();
            expect(()=>bookSelection.isItAffordable(price,[])).to.throw();
            expect(()=>bookSelection.isItAffordable(price,{})).to.throw();
        });


    });
    describe("suitableTitles functionality", function() {

        it("should return the book is suitable", function() {

            const daVinciCode={ title: 'The Da Vinci Code', genre: 'Thriller' };
            const podIgoto={title:'Pod Igoto', genre:'Roman'};
            const harryPotter={title:'Harry Potter', genre:'Thriller'};

            const books= [daVinciCode,podIgoto,harryPotter];



            expect(bookSelection.suitableTitles(books,'Thriller')).to.be.eql([daVinciCode.title,harryPotter.title]);
            expect(bookSelection.suitableTitles(books,'Roman')).to.be.eql([podIgoto.title]);
            expect(bookSelection.suitableTitles(books,'Horror')).to.be.eql([]);
            expect(bookSelection.suitableTitles([],'Roman')).to.be.eql([]);
        });
        
        it("should throw error when book is not array", function() {

            expect(()=>bookSelection.suitableTitles('','Thriller')).to.throw();
            expect(()=>bookSelection.suitableTitles('a','Thriller')).to.throw();
            expect(()=>bookSelection.suitableTitles(1,'Thriller')).to.throw();
            expect(()=>bookSelection.suitableTitles(1.25,'Thriller')).to.throw();
            expect(()=>bookSelection.suitableTitles({},'Thriller')).to.throw();
        });
        it("should throw error when genre is not string", function() {

            expect(()=>bookSelection.suitableTitles([],[])).to.throw();
            expect(()=>bookSelection.suitableTitles([],1)).to.throw();
            expect(()=>bookSelection.suitableTitles([],1.25)).to.throw();
            expect(()=>bookSelection.suitableTitles([],{})).to.throw();
        });

    });

     // TODO: …
});
