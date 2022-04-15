class VegetableStore{

    constructor(owner,location)
    {
        this.owner=owner;
        this.location=location;
        this.availableProducts=[];
    }

    loadingVegetables (vegetables)
    {
        const result=[];

        vegetables.forEach(element => {
            
            let [type,quantity,price]=element.split(' ');

            let product = this.availableProducts.find(p=>p.type==type);

            if(product==undefined)
            {
                product= {
                    type,
                    quantity:0,
                    price:Number(price)
                };

                this.availableProducts.push(product);
            }

            product.quantity+=Number(quantity);

            price=Number(price);

            if(price > product.price)
            {
                product.price = price
            }

            result.push(type);

        });

        return `Successfully added ${[...new Set(result)].join(', ')}`;


    }
    buyingVegetables (selectedProducts)
    {
        let totalPrice=0;
        selectedProducts.forEach(p=>{
            let [type,quantity]=p.split(' ');

            quantity=Number(quantity);

            const product=this.availableProducts.find(p=>p.type==type);

            if(product==undefined)
            {
                throw Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            if(quantity > product.quantity)
            {
                throw Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            const sum = product.price * quantity;

            product.quantity -= quantity;

            totalPrice +=sum;

        })

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;

    }
    rottingVegetable (type, quantity)
    {
        const product=this.availableProducts.find(p=>p.type==type);

        if(product==undefined)
        {
            throw Error(`${type} is not available in the store.`);
        }

        if(quantity > product.quantity)
        {
            product.quantity = 0;

            return `The entire quantity of the ${type} has been removed.`;
        }

            product.quantity -= quantity;

            return `Some quantity of the ${type} has been removed.`;
        }

        revision()
        {
            const result= ['Available vegetables:'];

            const sortedProducts=this.availableProducts.sort((a,b)=>a.price - b.price);

            for (const product of sortedProducts) {

                result.push(`${product.type}-${product.quantity}-$${product.price}`);
            }

            result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

            return result.join('\n');
            
        }

}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());


