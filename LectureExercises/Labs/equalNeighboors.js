function equalNeighbors(input)
{
    let equalNeighborsCount=0;

    for(let row=0;row<input.length;row++)
    {
        for(let coll=0;coll< input[row].length;coll++)
        {
            let currentElement=input[row][coll];
            

            if(coll+1<input[row].length)
            {
                 let rightElement=input[row][coll+1];
                 compareTwoElements(currentElement,rightElement);
            }
            if(row+1<input.length)
            {
                let nextRowElement=input[row+1][coll];
                compareTwoElements(currentElement,nextRowElement);
                
            }


        }

    }

    function compareTwoElements(firstElement,secondElement){

        if(firstElement==secondElement){
         equalNeighborsCount++;
        }

    }

    return equalNeighborsCount;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));
