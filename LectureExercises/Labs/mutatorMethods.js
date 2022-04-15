function poop(array){

    array.length=array.length-1;

}

let numbers=[10,20,30,40,50];

console.log(numbers);

poop(numbers);

console.log(numbers);


// console.log(numbers.length);
// let popedItem=numbers.pop();
// console.log(popedItem);
// console.log(numbers);


numbers.push(50);
console.log(numbers);

//Shift

function shift(array)
{
    let [shiftedItem,...newArray]=array;
    
    return newArray;
}


numbers= shift(numbers);

console.log(numbers);

//Unshift

function unshift(array,...numbers)
{
    for (let i=numbers.length-1;i>=0;i--) {
        
        

        array.splice(0,0,numbers[i]);

    }

    return array;
}


let newArray=unshift(numbers,10);

console.log(newArray);


