function solve(array)
{
    const products={};

    const result={};

    array.forEach(element => {
        
        const [key,value]=element.split(' => ');

        if(!products[key])
        {
            products[key]=0;
        }
        products[key]+=Number(value);


        const producedBottles=Math.floor(products[key]/1000);
        
        if(producedBottles > 0 )
        {
            if(!result[key])
            {
                result[key]=0;
            }
            result[key]+=producedBottles;
            products[key]= products[key]%1000;
            
        }


    });

    return Object.entries(result)
    .map((p)=> `${p[0]} => ${p[1]}`)
    .join('\n');

}

console.log(solve(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
));