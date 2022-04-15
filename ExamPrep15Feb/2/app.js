class ChristmasDinner {

    constructor(budget)
    {
        if(budget < 0)
        {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget=budget;
        this.dishes=[];
        this.products=[];
        this.guests={};

    }

    get budget()
    {
        return this._budget;
    }
    set budget(value)
    {
        if(value < 0)
        {
            throw new Error("The budget cannot be a negative number");
        }

        this._budget=value;
    }


    shopping(product)
    {
        let [name,price]=product;


        if(price > this._budget)
        {
            throw new Error('Not enough money to buy this product');
        }

        this._budget-=price;

        this.products.push(name);

        return `You have successfully bought ${name}!`;

    }
    recipes(recipe)
    {
        const  {productsList}  = recipe;
        const  {recipeName} = recipe;

        productsList.forEach(product => {
            if(this.products.includes(product)==false)
            {
                throw new Error('We do not have this product');
            }
            
        });

        this.dishes.push({recipeName,productsList});

        return `${recipeName} has been successfully cooked!`;
    }
    inviteGuests(name, dish)
    {
        const currentDish= this.dishes.find(d=> d.recipeName==dish);

        if(currentDish==undefined)
        {
            throw new Error('We do not have this dish');
        }

        if(Object.keys(this.guests).some(g=> g == name))
        {
            throw new Error('This guest has already been invited');
        }

        this.guests[name] = dish ;


        return `You have successfully invited ${name}!`;


    }

    showAttendance()
    {
        let result=[];
        

        for (const guest in this.guests) {
            
            const recipeName=this.guests[guest];
             
            const currentDish = this.dishes.find(d=> d.recipeName == recipeName );
              
            result.push(`${guest} will eat ${currentDish.recipeName}, which consists of ${currentDish.productsList.join(', ')}`);


            
        }

        return result.join('\n');

    }

}


let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());