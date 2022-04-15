function solve(...args)
{
    let result={};

    args.forEach((el)=>{

        const type=(typeof el).toString();

        console.log(`${type}: ${el}`);

        if(result[type])
        {
            result[type]++;
        }
        else{
            result[type]=1;
        }


    })


    let sorted=Object.entries(result).sort((a,b)=> b[1]-a[1]);

    for (const prop of sorted) {
       
        console.log(`${prop[0]} = ${prop[1]}`);

    }

}

solve({ name: 'bob'}, 3.333, 9.999);