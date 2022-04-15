class Stringer{
    constructor(state,length)
    {
        this.innerString =state;
        this.innerLength=length;
    }

    increase(length)
    {
       this.innerLength+=length;
    }
    
    decrease(length)
    {
        this.innerLength-=length;
        if(this.innerLength < 0)
        {
            this.length=0;
        }
    }

    toString()
    {
        const extension= this.innerLength < this.innerString.length ? '...':'';

        return this.innerString .slice(0,this.innerLength) + extension;
    }
}

let s = new Stringer("Viktor", 6);
s.decrease(3);

console.log(s.toString());
