function Person(firstName,lastName)
{
       this.firstName=firstName;
       this.lastName=lastName;
    

    Object.defineProperty(this, 'fullName', {
        get:function()
        {
            return this.firstName+' '+this.lastName;
        },
        set:function(value)
        {
            const [firstName,lastName]=value.split(' ');

            if(firstName==undefined||lastName==undefined)
            {
                return;
            }

            this.firstName=firstName;
            this.lastName=lastName

        }
      });
}