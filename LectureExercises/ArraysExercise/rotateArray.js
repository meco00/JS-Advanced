function solve(input,numberOfRotations)
{
    let realRotations=numberOfRotations % input.length;

    for(let i=0;i<realRotations;i++)
    {
        const element=input.pop();

        input.unshift(element);
    }
  
    return input.join(' ');
}

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));

console.log(solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15));

