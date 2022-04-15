function solve(input)
{
    return input.reduce((acc,value)=>{
        if(acc.length===0||value >= acc[acc.length-1])
        {
            acc.push(value);
        }
         
        return acc;
        
    },[]);

}


console.log(solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));

    console.log(solve([1, 
        2, 
        3,
        4]        
        ));

console.log(solve([20, 
    3, 
    2, 
    15,
    6, 
    1]));