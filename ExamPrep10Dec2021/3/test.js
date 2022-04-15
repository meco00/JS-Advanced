const companyAdministration = require('./companyAdministration');
const {expect} = require('chai');

describe("companyAdministration functionality", function() {
    describe("hiringEmployee functionality", function() {
        it("should return string (was succesfully hired) when position is programmer and with 3 and above year of experience", 
        function() {
            const name='Ivan';
            const position='Programmer';
            const yearExperience=3;

         expect(companyAdministration.hiringEmployee(name,position,yearExperience)).to.be.equals(`${name} was successfully hired for the position ${position}.`);
         expect(companyAdministration.hiringEmployee(name,position,4)).to.be.equals(`${name} was successfully hired for the position ${position}.`);
        });
        it("should return string (is not approved) when position is programmer and with less than 3 year of experience", 
        function() {
            const name='Ivan';
            const position='Programmer';
            const yearExperience=2;

         expect(companyAdministration.hiringEmployee(name,position,yearExperience)).to.be.equals(`${name} is not approved for this position.`);
        });
        it("should throw error when position is not programmer ", 
        function() {
            const name='Ivan';
            const position='Waiter';
            const yearExperience=2;

         expect(()=>companyAdministration.hiringEmployee(name,position,yearExperience)).to.throw();
        });
     });
     describe("calculating salary functionality", function() {
        it("should return number with valid input", 
        function() {

            expect(companyAdministration.calculateSalary(10)).to.be.equals(150);
            expect(companyAdministration.calculateSalary(160)).to.be.equals(2400);
        });
        it("should return number and add bonus to it when working hours are more than 160  with valid input", 
        function() {
            expect(companyAdministration.calculateSalary(161)).to.be.equals(3415);
        });
        it("should throw when input is not number", 
        function() {
             expect(()=> companyAdministration.calculateSalary('')).to.throw();
             expect(()=> companyAdministration.calculateSalary('a')).to.throw();
             expect(()=> companyAdministration.calculateSalary([])).to.throw();
             expect(()=> companyAdministration.calculateSalary({})).to.throw();
        });
        it("should throw when input is not negative number", 
        function() {
             expect(()=> companyAdministration.calculateSalary(-1)).to.throw();
             expect(()=> companyAdministration.calculateSalary(-1.55)).to.throw();
             expect(()=> companyAdministration.calculateSalary(-1.2)).to.throw();
        });

    });
    describe("firedEmployee functionality", function() {
        it("should return remaining employees when enter valid array and index", 
        function() {
            const employees=['Petar', 'Ivan', 'George'];

            const index=0;

            const remainingEmployees=['Ivan', 'George'];

            expect(companyAdministration.firedEmployee(employees,index)).to.be.equals(remainingEmployees.join(", "));
            expect(companyAdministration.firedEmployee(employees,2)).to.be.equals(['Petar', 'Ivan'].join(", "));
        });
        it("should throw error when empoyees is not array", 
        function() {
            
            const index=0;

            expect(()=>companyAdministration.firedEmployee('',index)).to.throw();
            expect(()=>companyAdministration.firedEmployee('a',index)).to.throw();
            expect(()=>companyAdministration.firedEmployee(5,index)).to.throw();
            expect(()=>companyAdministration.firedEmployee(1.25,index)).to.throw();
            expect(()=>companyAdministration.firedEmployee({},index)).to.throw();
        });
        it("should throw error when index is not number", 
        function() {
            
            const employees=['Petar', 'Ivan', 'George'];

            expect(()=>companyAdministration.firedEmployee(employees,'')).to.throw();
            expect(()=>companyAdministration.firedEmployee(employees,'a')).to.throw();
            expect(()=>companyAdministration.firedEmployee(employees,1.5)).to.throw();
            expect(()=>companyAdministration.firedEmployee(employees,1.25)).to.throw();
            expect(()=>companyAdministration.firedEmployee(employees,[])).to.throw();
            expect(()=>companyAdministration.firedEmployee(employees,{})).to.throw();
        });
        it("should throw error when index is negative number", 
        function() {
            
            const employees=['Petar', 'Ivan', 'George'];

            expect(()=>companyAdministration.firedEmployee(employees,-1)).to.throw();
        });
        it("should throw error when index is out of array range", 
        function() {
            
            const employees=['Petar', 'Ivan', 'George'];

            expect(()=>companyAdministration.firedEmployee(employees,4)).to.throw();
            expect(()=>companyAdministration.firedEmployee(employees,3)).to.throw();
        });
        
    });

    
});
