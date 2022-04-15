function createComputerHierarchy() {
    class Keyboard{

        constructor(manufacturer,responseTime)
        {
            this.manufacturer=manufacturer;
            this.responseTime=responseTime;
        }
    
    
    }
    
    class Monitor{
        constructor(manufacturer,width,height)
        {
            this.manufacturer=manufacturer;
            this.width=width;
            this.height=height;
        }
    }
    
    class Battery{
        constructor(manufacturer,expectedLife)
        {
            this.manufacturer=manufacturer;
            this.expectedLife =expectedLife ;
        }
    
    }
    
    class Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace)
        {
            if (this.constructor == Computer) {
                throw new Error("Abstract classes can't be instantiated.");
            }
            this.manufacturer=manufacturer;
            this.processorSpeed =processorSpeed ;
            this.ram =ram ;
            this.hardDiskSpace=hardDiskSpace;
        }
    
    }
    
    class Laptop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,weight,color,battery)
        {
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.weight=weight;
            this.color=color;
            if(battery == undefined || battery.constructor.name !='Battery'){
                throw new TypeError('Object is not Battery')
            }
            this._battery=battery;
    
        }
    
        get battery()
        {
            return this._battery;
        }
    
        set battery(obj)
        {
            if(obj == undefined || obj.constructor.name !='Battery'){
                throw new TypeError('Object is not Battery')
            }
    
            this._battery=obj;
        }
    
    }
    
    
    class Desktop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,keyboard,monitor)
        {
            
           super(manufacturer,processorSpeed,ram,hardDiskSpace);
    
            if(keyboard == undefined || keyboard.constructor.name !='Keyboard'){
                throw new TypeError('Object is not Keyboard')
            }
            this._keyboard=keyboard;
            if(monitor == undefined ||monitor.constructor.name !='Monitor'){
                throw new TypeError('Object is not Monitor')
            }
            this._monitor=monitor;
        }
    
        get keyboard()
        {
            return this._keyboard;
        }
        set keyboard(obj)
        {
            if(obj == undefined ||obj.constructor.name !='Keyboard'){
                throw new TypeError('Object is not Keyboard')
            }
    
            this._keyboard=obj;
        }
    
        get monitor()
        {
            return this._monitor;
        }
    
        set monitor(obj)
        {
            if(obj == undefined ||obj.constructor.name !='Monitor'){
                throw new TypeError('Object is not Monitor')
            }
    
            this._monitor=obj;
    
        }
    
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}


let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);


let keyboard=new Keyboard('DELL',0.9);
let monitor=new Monitor('Asus',5,15);

let desktop = new Desktop("Hewlett Packard", 2.4, 4, 0.5,keyboard,monitor);

desktop.keyboard= new Keyboard('Intel',5);



console.log(desktop.keyboard);
console.log(desktop.monitor);
