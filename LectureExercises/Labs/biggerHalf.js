function BiggerHalf(array)
{
    let newArray=[];

    array.sort((a,b)=>a-b);

    let half=Math.floor(array.length/2);

    for(let i=half;i<array.length;i++)
    {
        newArray.push(array[i]);
    }
    return newArray;
}

BiggerHalf([4, 7, 2, 5]);

BiggerHalf([3, 19, 14, 7, 2, 19, 6]);
