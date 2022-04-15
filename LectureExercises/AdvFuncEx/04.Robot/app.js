function solution(){

    const library={
        apple : {carbohydrate:1,flavour:2},
        lemonade : {carbohydrate:10,flavour:20} ,
        burger : {carbohydrate:5,fat:7,flavour:3} ,
        eggs : {protein:5,fat:1,flavour:1},
        turkey : {protein:10,carbohydrate:10,fat:10,flavour:10}
    };

    let ingredients={
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0
    };

    function restock(element,quantity)
    {
        ingredients[element]+=Number(quantity);

        return 'Success';
    }
    function prepare(recipe,quantity)
    {
        const productEntries= Object.entries(library[recipe]);

        let remainingIngredients=Object.assign({},ingredients);

        for (const el of productEntries) {

          remainingIngredients[el[0]]= remainingIngredients[el[0]] - el[1]*quantity;

            if(remainingIngredients[el[0]] < 0 )
            {
                return `Error: not enough ${el[0]} in stock`;
            }

        }
        Object.assign(ingredients,remainingIngredients)

        return 'Success';
    }
    function report(){
       
      return Object.entries(ingredients).map(i=> `${i[0]}=${i[1]}`).join(' ');

    }


    function solve(input)
    {
        let [method,recipe,quantity]=input.split(' ');

        switch(method)
        {
            case 'report':
                return report();
            case'restock':
                return restock(recipe,quantity);
            case 'prepare':
                return prepare(recipe,quantity);
        }
            
    }

    return solve;

}

let manager = solution (); 
console.log (manager ("restock flavour 50")); 
console.log (manager ("prepare lemonade 4"));