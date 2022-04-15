function solve(input)
{
    const factory=CarFactory();

    input.forEach(entry=>{

        const [method,name,key,value]=entry.split(' ');

        factory[method](name,key,value);

    })

    
function CarFactory() {

    let cars={};

    function create(name,inherits,parentName) {

        cars[name] = inherits ? Object.create(cars[parentName]):{};
        
    }

    function set(name,key,value) {
        cars[name][key]=value;
        
    }

    function print(name) {

        const result=[];

        const currentCar=cars[name];

        for (const prop in currentCar) {

            result.push(`${prop}:${currentCar[prop]}`);
            
        }

        console.log(result.join(','));

       
    }
    return{
        create,
        set,
        print
    };
    
}


}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);
