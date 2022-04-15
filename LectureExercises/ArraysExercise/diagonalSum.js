function solve(input)
{
  

    let array=input.reduce((acc,element)=>{

        let valueToAdd = element.split(' ').map(x=> Number(x));

        acc.push(valueToAdd);

        return acc;

    },[])

    let DiagonalSum=DiagonalsSum(array);

    if(DiagonalSum !== Number.MIN_SAFE_INTEGER)
    {
        let leftDiagonalIndex=0;
        let rightDiagonalIndex=array.length-1;

        for(let i=0;i<array.length;i++)
        {
            array[i]=array[i].map((element,index)=>{

                if(index!== leftDiagonalIndex && index !==rightDiagonalIndex)
                {
                    element=DiagonalSum;
                }

                return element;

            });

            leftDiagonalIndex++;
            rightDiagonalIndex--;

        }


    }

    function DiagonalsSum(input)
    {
        let leftDiagonalSum=0;
        let leftDiagonalIndex=0;

        let rightDiagonalSum=0;
        let rightDiagonalIndex=input.length-1;

        input.forEach(element => {

            leftDiagonalSum+=element[leftDiagonalIndex++];
            rightDiagonalSum+=element[rightDiagonalIndex--];
        });

        if(leftDiagonalSum === rightDiagonalSum)
        {
            return leftDiagonalSum;
        }

        return Number.MIN_SAFE_INTEGER;
    }

    function PrintMatrice(input)
    {
        for(let i=0;i<input.length;i++)
        {
            console.log(input[i].join(' '));
        }
    }

    PrintMatrice(array);
   
}


// solve(['5 3 12 3 1',
// '11 4 23 2 5',
// '101 12 3 21 10',
// '1 4 5 2 2',
// '5 22 33 11 1']
// )

solve(['1 1 1',
'1 1 1',
'1 1 0']
);