function diagonalSum(input)
{
    let leftDiagonalSum=0;
    let rightDiagonalSum=0;

    let leftDiagonalIndex=0;
    let rightDiagonalIndex=input.length-1;

    input.forEach(array => {

        leftDiagonalSum+=array[leftDiagonalIndex++];
        rightDiagonalSum+=array[rightDiagonalIndex--];
        
    });

    // // for(let i=0;i<array.length;i++)
    // {
    //     leftDiagonalSum+=input[i][leftDiagonalIndex++];
    //     rightDiagonalSum+=input[i][rightDiagonalIndex--];
    // }

    return leftDiagonalSum+' '+rightDiagonalSum;

}

console.log(diagonalSum([[20, 40],
    [10, 60]]));

    console.log(diagonalSum([[3, 5, 17],
        [-1, 7, 14],
        [1, -8, 89]]
       ));