function lowestPrices(array)
{
    let result={};

    array.forEach(element => {
        
        let [townName,product,price]=element.split(" | ");

        if(!result[product]){
           result[product]={};
        }

        result[product][townName]=Number(price);


    });

 

    for(const el in result){


        const sortedProduct=Object.entries(result[el]).sort((a,b)=> a[1]-b[1]);

        console.log(`${el} -> ${sortedProduct[0][1]} (${sortedProduct[0][0]})`);
    }


}

lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);