function solve(array)
{
    const company={};


    array.forEach(element => {
        const [brand,model,produced]=element.split(' | ');

        if(!company[brand])
        {
           company[brand]={};
        }
         if(!company[brand][model])
        {
          company[brand][model]=0;
        }

        company[brand][model]+=Number(produced);
        
    });


    for (const brand in company) {

         console.log(brand);
        Object.entries(company[brand]).forEach((car)=>{
         console.log(`###${car[0]} -> ${car[1]}`);
        })

    }

}


solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)