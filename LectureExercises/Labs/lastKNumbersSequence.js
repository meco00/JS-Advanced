function lastKNumbers(n,k)
{
    let array=[1];

    for(let i=1;i<n;i++)
    {
       let number=0;
       let nestedLoopIndex=i-1;
       for(let j=0;j<k;j++)
       {
           if(nestedLoopIndex<0)
           {
               continue;
           }

           number+=array[nestedLoopIndex];
           nestedLoopIndex--;

       }

       array.push(number);

    }


    return array;
}

lastKNumbers(6,3);
lastKNumbers(8,2);



//With Reduce
function lastKNumbersWithReduce(n,k)
{
    let array=[1];

    for(let i=1;i<n;i++)
    {
       
       let startIndex=Math.max(0,i-k);
       let number=array.slice(startIndex,startIndex+k).reduce((a,x)=>a+x,0);
      
       array.push(number);

    }


    return array;
}
console.log(lastKNumbersWithReduce(8,2));





