function catalogue(array){

    let result={};

    array.forEach((el) => {
        
        const currentElement=el.split(" : ");
        const productName=currentElement[0];
        const productPrice=Number(currentElement[1]);

        if(!result[productName[0]])
        {
            result[productName[0]]={};
        }

        result[productName[0]][productName]=productPrice;

    });

    const sortedKeys = Object.keys(result).sort((a,b)=> a.localeCompare(b));

    for(const el of sortedKeys){

        const currentObject=Object.entries(result[el])
        .sort((a,b)=> a[0].localeCompare(b[0]));
        
          console.log(el);
          currentObject.forEach((el)=>{
            console.log(`  ${el[0]}: ${el[1]}`);
          });
      

    }

}


catalogue(['Banana : 2',
'Rubic\'s Cube : 5',
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);