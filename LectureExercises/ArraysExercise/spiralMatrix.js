function solve(row,coll)
{
    let matrix=Array(row).fill().map(()=>Array(coll).fill());

    let rowIndex=0;
    let collIndex=0;

    let direction='right';

    for(let i=1;i<=row*coll;i++)
    {
        matrix[rowIndex][collIndex]=i;

        if(direction==='right'){

            if(collIndex + 1 < coll && matrix[rowIndex][collIndex+1] === undefined )
            { 
            collIndex++;
            }
            else if(rowIndex+1 < row && matrix[rowIndex+1][collIndex] === undefined)
            {
                rowIndex++;
                direction='down';
            }


        }
        else if(direction==='down')
        {
           if(rowIndex+1 < row && matrix[rowIndex+1][collIndex] === undefined)
           {   
            rowIndex++;
           }
           else if(collIndex-1 >= 0 && matrix[rowIndex][collIndex-1] === undefined)
           {
               collIndex--;
               direction='left';
           }

        }
        else if(direction==='left')
        {
            if(collIndex-1 >= 0 && matrix[rowIndex][collIndex-1] === undefined)
            {
            collIndex--;
            }
            else if(rowIndex-1 >= 0 && matrix[rowIndex-1][collIndex] === undefined)
            {
            rowIndex--;
            direction='up';
            }


        }
        else if(direction==='up')
        {
          if(rowIndex-1 >= 0 && matrix[rowIndex-1][collIndex] === undefined)
           {
            rowIndex--;
           }
          else if(collIndex + 1 < coll && matrix[rowIndex][collIndex+1] === undefined )
          { 
            collIndex++;
            direction='right'
          }

        }       

    }

    matrix.forEach(array=> console.log(array.join(' ')));
}

solve(3, 3);