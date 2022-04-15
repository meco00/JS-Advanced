function solve() {

  const [generateBtn,buyBtn]=document.querySelectorAll('button');

  generateBtn.addEventListener('click',onClick)

   function onClick(e)
   {
        const textArea=e.target.parentElement.querySelector('textarea');

        const records=JSON.parse(textArea.value);

        textArea.value='';


       for (const record of records) {
         
        const row=document.createElement('tr');

        const imgCell=createCell('img',{src:record.img});

        const nameCell=createCell('p',{},record.name);
        
        const priceCell=createCell('p',{},record.price);

        const decFactorCell=createCell('p',{},record.decFactor);

        const inputCell=createCell('input',{type:'checkbox'});

        row.appendChild(imgCell);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(decFactorCell);
        row.appendChild(inputCell);

        document.querySelector('tbody').appendChild(row);
       }


   }

   function createCell(nestedTag,props,content)
   {
    const cell=document.createElement('td');
    const nested=document.createElement(nestedTag);
    for (const prop in props) {
      nested[prop]=props[prop];
    }

    if(content)
    {
      nested.textContent=content;
    }

    cell.appendChild(nested);

    return cell;

   }



   buyBtn.addEventListener('click',onBuyClick);

   function onBuyClick()
   {
      const checkedInputs=document.querySelectorAll('input[type="checkbox"]:checked');
      const outputArea=document.querySelectorAll('textarea')[1];

      outputArea.textContent='';
    
      const outputObj={
        names:[],
        totalPrice:0,
        totalDecFac:0,
        avgDec(){
           return this.totalDecFac/this.names.length
        }
      }

      for (const input of checkedInputs) {

        const elements=input.parentElement.parentElement.children;
            
         outputObj.names.push(elements[1].textContent);

         outputObj.totalPrice+=Number(elements[2].textContent);

         outputObj.totalDecFac+=Number(elements[3].textContent);

        
      }


      outputArea.textContent+=`Bought furniture: ${outputObj.names.join(', ')}\n`;
      outputArea.textContent+=`Total price: ${outputObj.totalPrice.toFixed(2)}\n`;
      outputArea.textContent+=`Average decoration factor: ${outputObj.avgDec()}`;

   }

}