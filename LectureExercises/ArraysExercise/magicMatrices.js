function IsMatriceMagic(input)
{
    let MagicSum=Number.MIN_SAFE_INTEGER;

    for(let i=0;i<input.length;i++)
    {
        let currentArraySum=input[i].reduce((acc,el)=> acc+el);

        if(MagicSum === Number.MIN_SAFE_INTEGER)
        {
            MagicSum=currentArraySum;
        }
        else if(MagicSum !== currentArraySum)
        {
            return false;
        }

    }
    
    for(let row=0;row<input.length;row++)
    {
        let currentColumnSum = 0;

        for(let coll=0;coll<input.length;coll++)
        {
            currentColumnSum+=input[coll][row];
        }
        
        if(currentColumnSum !== MagicSum)
        {
            return false;
        }
    }
   return true;
}

console.log(IsMatriceMagic([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));


console.log(IsMatriceMagic([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));

   console.log(IsMatriceMagic([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));


