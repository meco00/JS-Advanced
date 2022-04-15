function townPopulation(input){

   const towns={};

    for(const element of input)
    {
        const word = element.split(' <-> ');

        var townName=word[0];
        var population=Number(word[1]);
        
        if(towns[townName])
        {
            population+= towns[townName];
        }

        towns[townName]=population;


    }


   for(const element in towns)
   {
       console.log(`${element} : ${towns[element]}`);

   }


}


townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);