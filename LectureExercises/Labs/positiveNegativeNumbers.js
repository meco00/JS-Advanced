function solve(array)
{
    let newArray=[];

    for(let i=0;i<array.length;i++)
    {
        let number=array[i];

        if(number<0)
        {
            newArray.unshift(number);
        }
        else{
            newArray.push(number);
        }
    }

    return newArray;
}

console.log(solve([7, -2, 8, 9]));

console.log(solve([3, -2, 0, -1]));