function solve(input)
{
    input.sort((a,b) => a-b);

    let resultArray=[];

    while(input.length>0)
    {
        //let firstElement=input.shift();

        resultArray.push(input.shift(),input.pop());

        // if (input.length==0)
        // {
        //     break;
        // }

        // let secondElement=input.pop();

        // resultArray.push(secondElement);
    }

    return resultArray;
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));