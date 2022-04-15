window.addEventListener('load', solve);

function solve() {
   const nameField=document.getElementById('model');
   const yearField=document.getElementById('year');
   const descriptionField=document.getElementById('description');
   const priceField=document.getElementById('price');

   const fields=[nameField,yearField,descriptionField,priceField];

   const furnitureList=document.getElementById('furniture-list');

   const addFurnitureButton=document.getElementById('add');

   const totalPriceField=document.querySelector('.total-price');

   addFurnitureButton.addEventListener('click',add);

   function add(ev)
   {
       ev.preventDefault();

       const name=nameField.value.trim();
       const year=Number(yearField.value.trim());
       const description=descriptionField.value.trim();
       const price=Number(priceField.value.trim());

       if(fields.some(f=> f.value.trim()=='') ||
       Number.isNaN(year)||Number.isNaN(price) || 
       year < 0 || price < 0)
       {
           return;
       }

       const moreBtn= el('button',{class: 'moreBtn'},'More Info');
       const buyBtn= el('button',{class: 'buyBtn'},'Buy it');

      

       const furniture = el('tr', {class: 'info'},
         e('td',name),
         e('td',price.toFixed(2)),
         e('td',
          moreBtn,
          buyBtn
         )
       );

       const hideElement= el('tr',{class:'hide'},
         e('td',`Year: ${year}`),
         el('td',{colSpan : "3"},`Description: ${description}`)
       );




       furnitureList.appendChild(furniture);
       furnitureList.appendChild(hideElement);

       fields.forEach(f=> f.value = '');

       moreBtn.addEventListener('click',changeVisibility);

       function changeVisibility()
       {
           if(moreBtn.textContent == 'More Info')
           {
               hideElement.style.display='contents';
              
               moreBtn.textContent='Less Info';

           }
           else
           {
            hideElement.style.display='none';
              
            moreBtn.textContent='More Info';

           }

       }



       buyBtn.addEventListener('click',buy);

       function buy()
       {
           const totalPrice=Number(totalPriceField.textContent);

           totalPriceField.textContent=(totalPrice+price).toFixed(2);

           furniture.remove();
           hideElement.remove();


       }






   }

   function e(type , ...content)
   {
       return el(type,{},...content);
   }

   function el(type , attr , ...content)
   {
       const element = document.createElement(type);

       for (const prop in attr) {
           if(prop== 'class')
           {
              element.className=attr[prop];
           }
           else
           {
              element[prop]=attr[prop];

           }
       }

       for (let item of content) {

          if(typeof item == 'string' || typeof item == 'number')
          {
              item = document.createTextNode(item);
          }

          element.appendChild(item);
           
       }
       return element;
   }

}
