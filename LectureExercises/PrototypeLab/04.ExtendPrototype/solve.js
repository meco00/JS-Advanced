function extendProrotype(classToExtend) {
    
    classToExtend.prototype.species='Human';

    classToExtend.prototype.toSpeciesString = function() {
        return `I am a ${this.species}. ${this.toString()}`;
    }


}

class Person
{
    constructor(name,email)
    {
       this.name=name;
       this.email=email;
    }

    toString()
    {
        const constructorName=this.constructor.name;

        return `${constructorName} (name: ${this.name}, email: ${this.email})`
    }
 
}

extendProrotype(Person);
let person = new Person("Peter", "Ivanov");

console.log(person.species); 
console.log(person.toSpeciesString()); 