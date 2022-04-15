function factory(object)
{

    let car={
       model: object.model,
       engine:createEngine(object.power),
       carriage: {
           type: object.carriage,
           color: object.color
       },
       wheels: Array(4).fill(object.wheelsize % 2 ==0 ? object.wheelsize-1 : object.wheelsize)

    }
    
    function createEngine(horsePower){

        let volume;
    
        if(horsePower>90 && horsePower <=120)
       {
           horsePower=120;
           volume=2400;
       }
       else if(horsePower>120 && horsePower <=200)
       {
           horsePower=200;
           volume=3500;
       }
       else{
            horsePower=90;
            volume=1800;
       }
    
       return {power:horsePower,volume:volume};
    
    }


   return car;
}





console.log(factory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }

));