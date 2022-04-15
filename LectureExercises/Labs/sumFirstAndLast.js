function SumFirstAndLast(array)
{
    let sum=0;

    if(array.length==0){
      return
    }


    let firstElement=Number(array[0]);
    let lastElement=Number(array[array.length-1]);

    return firstElement+lastElement;



}

let array=['20', '30', '40']

console.log(SumFirstAndLast(array));

console.log(SumFirstAndLast(['5', '10']));


function SecondSolution(array)
{
    return Number(array.pop())+Number(array.shift());
}

console.log(SecondSolution(array));

console.log(array);

console.log(SecondSolution(['5', '10']));


