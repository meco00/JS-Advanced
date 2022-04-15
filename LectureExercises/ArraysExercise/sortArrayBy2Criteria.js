function sortArray(input)
{
   input.sort(function(a,b){

    let compareResult=a.length - b.length;

    if(compareResult===0)
    {
       return a.localeCompare(b)
    }

    return compareResult;

   });

   console.log(input.join('\r\n'));
}


sortArray(['alpha', 
'beta', 
'gamma']
);


sortArray(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);



sortArray(['test', 
'Deny', 
'omen', 
'Default']
);