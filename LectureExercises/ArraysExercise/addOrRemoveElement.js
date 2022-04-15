function solve(input)
{
    let array=[];

    let element=1;

    for (const command of input) {
         if(command==='add')
         {
             array.push(element); 
         }
         else
         {       
                 array.pop();    
         }

         element+=1;
    }

    if(array.length==0)
    {
        console.log('Empty');
    }
    else{
        console.log(array.join('\r\n'));
    }


}

// solve(['add', 
// 'add', 
// 'add', 
// 'add']
// );

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']

);