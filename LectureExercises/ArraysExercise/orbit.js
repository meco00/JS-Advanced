function solve(input)
{
    let rows=input[0];
    let colls=input[1];

    let startRow=input[2];
    let startColl=input[3];

    let matrix=Array(rows).fill().map(()=>Array(colls).fill());
    
    for(row=0;row<rows;row++)
    {
        for(let coll=0;coll<colls;coll++)
        {

            matrix[row][coll]=Math.max(Math.abs(row-startRow),Math.abs(coll - startColl)) + 1;

        }
    }
     
  matrix.forEach(array=> console.log(array.join(' ')));

    
}


    

// solve([5, 5, 2, 2]);

 solve([3, 3, 2, 2]);

// solve([4,4,0,0]);