function extensibleObject() { 
    
    return{
        extend: function(template) {

            let objPrototype=Object.getPrototypeOf(this);

            let entries=Object.entries(template);

            for (const [key,value] of entries) {
                if(typeof value == 'function')
                {
                    objPrototype[key]=value;
                }
                else{
                    this[key]=value;
                }
            }

        }
    }
  } 
    const template = { 
        extensionMethod: function () {}, 
        extensionProperty: 'someString' 
      } 

      const myObj = extensibleObject(); 

      myObj.extend(template); 
      
   console.log(myObj.toString()); 