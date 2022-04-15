function solve(input)
{
    input.sort((a,b)=>a.localeCompare(b));

    input.forEach((element,index) => {
        console.log(`${index+1}.${element}`);
    });

}

solve(["John", "Bob", "Christina", "Ema"]);