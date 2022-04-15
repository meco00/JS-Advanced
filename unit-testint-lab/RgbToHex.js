const {expect}=require('chai');
const {rgbToHexColor}=require('./app');


describe('RgbToHex checker',()=>{

    it('Should work with valid input',()=>
    {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF');
        expect(rgbToHexColor(1,1,1)).to.be.equal('#010101');
        expect(rgbToHexColor(1,2,3)).to.be.equal('#010203');

    });

    it('Should return undefined if all params are not in range',()=>{
      
        expect(rgbToHexColor(-1,-1,-1)).to.be.undefined;
        expect(rgbToHexColor(256,256,256)).to.be.undefined;

    });

    it('Should return undefined if first param is not in range',()=>{
      
        expect(rgbToHexColor(-1,0,0)).to.be.undefined;
        expect(rgbToHexColor(256,0,0)).to.be.undefined;

    });

    it('Should return undefined if second param is not in range',()=>{
      
        expect(rgbToHexColor(0,-1,0)).to.be.undefined;
        expect(rgbToHexColor(0,256,0)).to.be.undefined;

    });

    it('Should return undefined if third param is not in range',()=>{
      
        expect(rgbToHexColor(0,0,-1)).to.be.undefined;
        expect(rgbToHexColor(0,0,256)).to.be.undefined;

    });

    it('Should return undefined if params are not number',()=>{
      
        expect(rgbToHexColor('A',0,0)).to.be.undefined;
        expect(rgbToHexColor(0,'A',0)).to.be.undefined;
        expect(rgbToHexColor(0,0,'A')).to.be.undefined;

    });

    it('Should return undefined if input is invalid type and empty',()=>{
      
        expect(rgbToHexColor()).to.be.undefined;
        expect(rgbToHexColor('test')).to.be.undefined;

    });
  


});