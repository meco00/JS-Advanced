class List{
    constructor()
    {
        this.elements=[]
        this.size=0;
    }

    add(element)
    {
        this.elements.push(element);
        this.size++;
        this.elements.sort((a,b)=> a-b);
    }
    remove(index)
    {
        let elementToRemove=this.elements[index];
        if(elementToRemove != undefined)
        {
            this.elements = this.elements.filter(e=> e != elementToRemove);
            this.size--;
        }
        
    }

    get(index)
    {
        return this.elements[index];
    }

}

var myList = new List();

for (let i = 0; i < 5; i++) {
    myList.add(i);
}

myList.remove(0);

