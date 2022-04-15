function solve(array,start,end)
{
    if(!Array.isArray(array))
    {
        return NaN;
    }
    if(start < 0)
    {
        start=0
    };

    if(end> array.length-1)
    {
        end=array.length-1;
    }

        
   return array
   .slice(start,end+1)
   .map(x=>Number(x))
   .reduce((a,x)=> a+x ,0);

}


console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));
console.log(solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(solve([10, 'twenty', 30, 40], 0, 2));
console.log(solve([], 1, 2));
console.log(solve('text', 0, 2));
