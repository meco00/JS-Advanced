window.addEventListener('load', solve);

function solve() {

    const typeProductField=document.querySelector('#type-product');
    const descriptionField=document.querySelector('#description');
    const nameField=document.querySelector('#client-name');
    const phoneField=document.querySelector('#client-phone');

    const fieldsCollection = [typeProductField,descriptionField,nameField,phoneField];

    const typesProduct=[
        'Computer',
        'Phone'
    ];

    const receivedOrdersSection=document.querySelector('#received-orders');
    const completedOrdersSection=document.querySelector('#completed-orders');

    const clearBtn=document.querySelector('.clear-btn');

    

    const form=document.querySelector('form');

    form.addEventListener('submit',onSubmit)

    function onSubmit(ev)
    {
        ev.preventDefault();

        const productType=typeProductField.value;

        if(fieldsCollection.map(f=>f.value.trim()).some(v=>v=='') || typesProduct.includes(productType)==false)
        {
            return;
        }

        const description=descriptionField.value;
        const name=nameField.value;
        const phone=phoneField.value;

        const startBtn=el('button',{class:'start-btn'},'Start repair');
        const finishBtn=el('button',{class:'finish-btn',disabled:true},'Finish repair')


        const order=el('div',{class:'container'},
          e('h2',`Product type for repair: ${productType}`),
          e('h3',`Client information: ${name}, ${phone}`),
          e('h4',`Description of the problem: ${description}`),
          startBtn,
          finishBtn
        );

        receivedOrdersSection.appendChild(order);

        form.reset();


        startBtn.addEventListener('click',()=>
        {
            startBtn.disabled=true;
            finishBtn.disabled=false;

        });

        finishBtn.addEventListener('click',()=>{

            startBtn.remove();
            finishBtn.remove();
            
            completedOrdersSection.appendChild(order);
            
        })
        
    }
    
    clearBtn.addEventListener('click',clearOrders);

    function clearOrders()
    {
        const orders = Array.from(completedOrdersSection.querySelectorAll('.container'));

        orders.forEach(o=>o.remove());

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