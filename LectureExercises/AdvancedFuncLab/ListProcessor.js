

function  solve(input) {
    
    const list=processor();
    for (const element of input) {
        
        const [method,value]=element.split(' ');

        list[method](value);

    }

    function processor() {
        let list=[];
    
        function add(item) {
            list.push(item);
        }
        function remove(item) {
           list = list.filter(el=> el != item);
        }
        function print() {
            
         console.log(list.join(','));
    
        }
    
        return {
            add,
            remove,
            print
        }
        
    }
}




solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);