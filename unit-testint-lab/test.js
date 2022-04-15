const {expect}=require('chai');
const {sum}=require('./app');

describe('Sum should work correctly',() => {

   it('works with valid array',() => {
       expect(sum([1,2,3])).to.equal(6);
   });

   it('should return 0 if enter empty array',() => {
    expect(sum([])).to.equal(0);
});

});