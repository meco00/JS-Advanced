let numbers=[10,20,30,40,50];

function evenPositionElements(input)
{
    let result='';
    for(let i=0;i<input.length;i+=2)
    {
        result+=input[i]+' ';
    }

    console.log(result);
}

evenPositionElements(numbers);

let [a,b,...elements]=numbers;

console.log(a);
console.log(b);
console.log(elements);

//Shallow copy 

let [...shallowCopiedArray]=numbers;

console.log(shallowCopiedArray);

shallowCopiedArray[0]=undefined;

console.log(shallowCopiedArray);

console.log(numbers);



//Sorting

let numbersArray=[50,10,15,5,20,25,35,1];

numbersArray.sort();

console.log(numbersArray);


numbersArray.sort((a,b)=>a-b);

console.log(numbersArray);

let cars=['BMW','audi','VW','Alfa Romeo','Toyota'];

cars.sort((a,b)=>a.localeCompare(b));

console.log(cars);


//Splice

let nums=[1,2,3,4,5,6];

let el = nums.splice(1,2);

console.log(nums);

console.log(el);


//Fill
let newArr=nums.fill(0);

console.log(newArr);

//Reverse

numbersArray.reverse();

console.log(numbersArray);

//Join
console.log(cars.join('-'));

console.log(cars);

//Concat

const num1=[1,2,3];
const num2=[4,5,6];
const num3=[7,8,9];

const numbers1=num1.concat(num2,num3);

console.log(numbers1);

//Slice

let fruits=['Banana','Orange','Lemon','Apple','Mango'];

let citrus=fruits.slice(1,4);

let shallowCopyFruit=fruits.slice();

console.log(citrus);

console.log(shallowCopyFruit);

//Includes

console.log(fruits.includes('Banana',-2));










