function cityRecord(name,population,treasury){
const city={
    name : name,
    population : population,
    treasury : treasury
};
    return city;
}

console.log(cityRecord('Tortuga',
7000,
15000
))






// let city= {
//     firstName : 'Kardzhali',
//     Population : 1000,
//     taxRate : 10,
//     calculateTax(){
//         return this.Population * this.taxRate;
//     }
// }

// console.log(city);

// console.log(city.calculateTax());
