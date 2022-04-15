function createFigures()
{

class Figure{
    constructor(unit='cm')
    {
        this.unit=unit;
        this.units={
            mm : 10,
            cm: 1,
            m : 0.1
        };
    }
    changeUnits(value)
    {
        this.unit=value;

    }

    get area()
    {
       
    }

    toString()
    {
        return `Figures units: ${this.unit}`;
    }
}


class Circle extends Figure{
    constructor(radius)
    {
        super();
        this._radius=radius;
    }

    get radius()
    {
        return this._radius * this.units[this.unit];

    }

    get area()
    {
        return   Math.PI * this.radius * this.radius ;
    }

    toString()
    {
        return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`;
    }

}
class Rectangle extends Figure{
    constructor(width, height,units)
    {
        super(units);
        this._width=width;
        this._height=height;
    }
    get width()
    {
        return this._width * this.units[this.unit];

    }
    get height()
    {
        return this._height * this.units[this.unit];

    }

    get area()
    {
        return this.width * this.height;
    }

    toString()
    {
        return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
}

return{
    Figure,
    Circle,
    Rectangle
}

}



let classes = createFigures();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('m');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) 

