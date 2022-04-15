const {expect}=require('chai');
const {isSymmetric}=require('./app');

describe('Tests for IsSymetric Func',()=>
{
    it('Func should return true with array of numbers',()=>
    {
        expect(isSymmetric([1,2,2,1])).to.be.equal(true);

    });

    it('Func should return true with array of strings',()=>
    {
        expect(isSymmetric(['A','B','B','A'])).to.be.equal(true);
    });

    it('Func should return true with array of strings and numbers',()=>
    {
        expect(isSymmetric(['A',1,1,'A'])).to.be.equal(true);

    });


    it('Func should return false if array is non-symetric',()=>
    {
        expect(isSymmetric([1,2,3,4])).to.be.equal(false);
        expect(isSymmetric([1,2,3])).to.be.equal(false);
        expect(isSymmetric([1,2,'1'])).to.be.equal(false);
        expect(isSymmetric(['A','B','c'])).to.be.equal(false);
        expect(isSymmetric(['A',1,0,'A'])).to.be.equal(false);
        expect(isSymmetric(['A','B',1])).to.be.equal(false);

    });
   
    it('Func should return false when invalid input',()=>
    {
        expect(isSymmetric('alabala')).to.be.equal(false);
        expect(isSymmetric(5)).to.be.equal(false);

    });


})