function pieceOfPie(array,firstPiece,secondPiece)
{
    let firstPieceIndex=array.indexOf(firstPiece);
    let secondPieceIndex=array.indexOf(secondPiece);

    let pieces=array.slice(firstPieceIndex,secondPieceIndex+1);

    return pieces;
}

console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));