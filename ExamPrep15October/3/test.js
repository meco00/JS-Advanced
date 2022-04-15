const {expect}= require('chai');
const cinema=require('./cinema');



describe("Cinema ", function() {

    describe("showMovies functionality", function() {
        it("should work correctly", function() {
            let movies=['King Kong', 'The Tomorrow War', 'Joker'];
           expect(cinema.showMovies(movies)).to.be.equal(movies.join(', '));
           expect(cinema.showMovies(['King Kong'])).to.be.equal('King Kong');
        });
        it("if length of movies is zero should return string", function() {
           expect(cinema.showMovies([])).to.be.equal('There are currently no movies to show.');
        });

     });
     describe("ticketPrice functionality", function() {
        it("should work correctly", function() {

           expect(cinema.ticketPrice('Premiere')).to.be.equal(12.00);
           expect(cinema.ticketPrice('Normal')).to.be.equal(7.50);
           expect(cinema.ticketPrice('Discount')).to.be.equal(5.50);
        });
        it("invalid input", function() {

            expect(()=> cinema.ticketPrice('invalid')).to.throw('Invalid projection type.');
            expect(()=> cinema.ticketPrice('')).to.throw('Invalid projection type.');

        });
        
     });
     describe("swapSeatsInHall functionality", function() {
        it("should work correctly", function() {

           expect(cinema.swapSeatsInHall(5,10)).to.be.equal('Successful change of seats in the hall.');
           
           expect(cinema.swapSeatsInHall(1,20)).to.be.equal('Successful change of seats in the hall.');  
           
           
        });
        it("when first param is invalid should return unsuccesfully", function() {

            expect(cinema.swapSeatsInHall('1','1')).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.25,5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(25,5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5,5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0,5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5,5)).to.be.equal('Unsuccessful change of seats in the hall.');        
            expect(cinema.swapSeatsInHall('',20)).to.be.equal('Unsuccessful change of seats in the hall.');

        });
        it("when second param is invalid should return unsuccesfully", function() {

            expect(cinema.swapSeatsInHall(1,21)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,1.25)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5,-5)).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,'movie')).to.be.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1,'')).to.be.equal('Unsuccessful change of seats in the hall.');  

        });

    
        
     });
});
