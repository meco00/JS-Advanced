function fromJSONtoHtml(input)
{
    const result = JSON.parse(input);

    const openingheader='<table>';
    const closingheader='</table>';

    const openingTrHeader='<tr>';
    const closingTrHeader='</tr>';

    const openingTdHeader='<td>';
    const closingTdHeader='</td>';

    let htmlResult='';

    htmlResult+= openingheader + '\n';
    htmlResult+= result.length > 0 ? openingTrHeader : '';

    for(const element in result[0])
    {
        // <tr><th>Name</th><th>Score</th></tr>
        htmlResult+='<th>' + escapeHtml(element) + '</th>';


    }
     
    htmlResult+= result.length > 0 ?  closingTrHeader+'\n' : '';


    for(const entry in result)
    {
        const currentObject=result[entry];

        htmlResult+= openingTrHeader;

        for(const currentElement in currentObject){
            htmlResult+=openingTdHeader + escapeHtml(currentObject[currentElement]) + closingTdHeader;       
        }
        // <tr><th>Name</th><th>Score</th></tr>
        // htmlResult+='<th>' + element + '<th>';
        htmlResult+= closingTrHeader + '\n';  
        ;


    }


   

  

    htmlResult+= closingheader + '\n';

    //console.log(result);

    console.log(htmlResult);
    
    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}



 fromJSONtoHtml(`[{"Name":"Pesho",
 "Score":4,
 " Grade":8},
{"Name":"Gosho",
 "Score":5,
 " Grade":8},
{"Name":"Angel",
 "Score":5.50,
 " Grade":10}]`

);