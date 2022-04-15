class Restaurant{
    constructor(budget)
    {
        this.budgetMoney=budget;
        this.menu={};
        this.stockProducts ={};
        this.history=[];

    }

    loadProducts(products)
    {
        products.forEach(element => {
            
            let [product,quantity,price]=element.split(' ');

            quantity=Number(quantity);
            price=Number(price);

            if(price <= this.budgetMoney)
            {

                this.budgetMoney-=price;

                    
                if(!this.stockProducts[product])
                {
                    this.stockProducts[product]=0;
                }

                this.stockProducts[product]+=quantity;

                this.history.push(`Successfully loaded ${quantity} ${product}`);

            }
            else{
                this.history.push(`There was not enough money to load ${quantity} ${product}`);
            }
            

        });

        return this.history.join('\n');
    } 


    addToMenu(meal,neededProducts,price)
    {
        if(!this.menu[meal])
        {
            this.menu[meal]={
                products: {},
                price: price
            };

            neededProducts.forEach(el=>{
                const [product,quantity]=el.split(' ');
    
                this.menu[meal].products[product]=Number(quantity);
    
            });



            let mealsCount=Object.keys(this.menu).length;

            if(mealsCount==1)
            {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }
            else{
                return `Great idea! Now with the ${meal} we have ${mealsCount} meals in the menu, other ideas?`;
            }

        } 
        else{
             
            return `The ${meal} is already in the our menu, try something different.`;

        }

    }

    showTheMenu()
    {
        let mealsCount=Object.keys(this.menu).length;

        let result=[];

        if(mealsCount > 0)
        {
           for (const prop in this.menu) {
               result.push(`${prop} - $ ${this.menu[prop]['price']}`);
               
           }
        }
        else{
            result.push(`Our menu is not ready yet, please come later...`);
        }


        return result.join('\n');

    }

    makeTheOrder(meal)
    {
        if(!Object.keys(this.menu).some(m=> m == meal))
        {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }

        let remainingProducts=Object.assign({},this.stockProducts);

        let menuProducts=this.menu[meal].products;
        for (const prop in menuProducts) {

            remainingProducts[prop]-= menuProducts[prop];

            if(Number.isNaN(remainingProducts[prop]) || remainingProducts[prop] < 0)
            {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

        }

        Object.assign(this.stockProducts,remainingProducts);

        const menuPrice=this.menu[meal].price

        this.budgetMoney +=  menuPrice;

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${menuPrice}.`;



    }


}


let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurte 1', 'Honey 5', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
