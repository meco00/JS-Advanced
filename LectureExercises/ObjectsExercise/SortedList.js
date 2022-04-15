function createSortedList()
{
    const sortedList={
        items: new Array(),
        size:0,
        add(element){
            this.items.push(element);
            this.size++;
            this.sort();
        },
        remove(index)
        {
            if(index>=0&& index < this.items.length){
           
                this.items.splice(index,1);
                this.size--;
            }

            return;
           
        },
        get(index)
        {
            if(index>=0&& index < this.items.length){
           
                return this.items[index];
            
            }

            return;
           

        },
        sort(){
            this.items=this.items.sort((a,b)=> a - b);
        }
        
    };
    
    
        

    return sortedList;

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
list.add(1);
list.add(15);
list.add(13);
list.add(62);
list.add(2);

console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

console.log(list.size);

console.log(list.items);
