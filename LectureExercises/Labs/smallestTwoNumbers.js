function smallestTwoNumbers(array)
{
    array.sort((a,b)=>a-b);

    return array.slice(0,2);
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));

console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));