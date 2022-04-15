class Garden
{
    constructor(spaceAvailable )
    {
        this.spaceAvailable=spaceAvailable;
        this.plants=[];
        this.storage=[];
        this.spaceFilled=0;
    }

    addPlant (plantName, spaceRequired)
    {
        let availableSpace= this.spaceAvailable - this.spaceFilled;
        if(availableSpace < spaceRequired )
        {
            throw Error('Not enough space in the garden.');
        }


        const plant = {
            plantName,
            spaceRequired,
            ripe:false,
            quantity:0
        };

        this.spaceFilled += spaceRequired;

        this.plants.push(plant);

        return `The ${plantName} has been successfully planted in the garden.`;

    }

    ripenPlant(plantName, quantity)
    {
        const plant=this.plants.find(p=>p.plantName==plantName);

        if(plant==undefined)
        {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if(plant.ripe==true)
        {
            throw Error(`The ${plantName} is already ripe.`);
        }
        if(quantity <=0)
        {
            throw Error(`The quantity cannot be zero or negative.`);
        }

        plant.quantity += quantity;

        plant.ripe=true;

        let result = '';

        if(quantity == 1)
        {
            result = `${quantity} ${plantName} has successfully ripened.`;
        }
        else{
            result = `${quantity} ${plantName}s have successfully ripened.`;
        }

        return result;
    }

    harvestPlant(plantName)
    {
        const plant=this.plants.find(p=>p.plantName==plantName);

        if(plant==undefined)
        {
            throw Error(`There is no ${plantName} in the garden.`);
        }
        if(plant.ripe==false)
        {
            throw Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        const indexOfPlant=this.plants.indexOf(plant);

        this.plants.splice(indexOfPlant,1);

        this.storage.push({
            plantName,
            quantity: plant.quantity
        });
        
        this.spaceFilled -= plant.spaceRequired;


        return `The ${plantName} has been successfully harvested.`;

    }

    generateReport()
    {
        const result = [`The garden has ${ this.spaceAvailable - this.spaceFilled } free space left.`];

        const plantNames= this.plants.map(p=> p.plantName).sort((a,b)=> a.localeCompare(b));

        //TODOl SORT PLANTS

        result.push(`Plants in the garden: ${plantNames.join(', ')}`);

        if(this.storage.length==0)
        {
            result.push('Plants in storage: The storage is empty.');
        }
        else{

            const storagePlants= this.storage.map(p=>`${p.plantName} (${p.quantity})`);

            result.push(`Plants in storage: ${storagePlants.join(', ')}`);

        }
        
        return result.join('\n');

    }




}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());






