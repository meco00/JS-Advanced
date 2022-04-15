class CarDealership {

    constructor(name,totalIncome=0)
    {
        this.name=name;
        this.availableCars =[];
        this.soldCars=[];
        this.totalIncome = totalIncome;
    }

    addCar(model, horsepower, price, mileage)
    {
        if(model == '' || horsepower < 0 || price < 0 || mileage < 0)
        {
            throw Error('Invalid input!');
        }

        const car = 
        {
            model,
            horsepower,
            price,
            mileage

        };

        this.availableCars.push(car);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    
    }

    sellCar (model, desiredMileage)
    {
        const currentCar= this.availableCars.find(c=> c.model == model);

        if(currentCar == undefined)
        {
            throw Error(`${model} was not found!`);
        }

        if(desiredMileage < currentCar.mileage)
        {
            const differenceOfMileage= Math.abs(currentCar.mileage - desiredMileage);
            if(differenceOfMileage <= 40000)
            {
                currentCar.price *= 0.95;
            }
            else 
            {
                currentCar.price *= 0.90;
            }
        }

        this.availableCars= this.availableCars.filter(c=> c.model != model);

        this.soldCars.push({

            model,
            horsepower: currentCar.horsepower,
            soldPrice: currentCar.price
        });

        this.totalIncome+=currentCar.price;

        return `${model} was sold for ${currentCar.price.toFixed(2)}$`;
    }

    currentCar()
    {
       const result =[];

       if(this.availableCars.length==0)
       {
           result.push('There are no available cars');
       }
       else{
           result.push('-Available cars:');

           for(const car of this.availableCars)
           {
               result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
           }
       }

       return result.join('\n');

    }

    salesReport (criteria)
    {
        const sortings={
            'horsepower': (a,b)=> b.horsepower - a.horsepower,
            'model':(a,b)=> a.model.localeCompare(b.model)
        };

        const currentSorting=sortings[criteria];

        if(currentSorting == undefined)
        {
            throw Error('Invalid criteria!');
        }

        this.soldCars = this.soldCars.sort(currentSorting);

        const result=[];

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);

        for (const car of this.soldCars) {
            
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);

        }


        return result.join('\n');


    }

    
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Mercedes C63', 110000);
dealership.sellCar('Audi A3', 230000);
console.log(dealership.salesReport('TEST'));



