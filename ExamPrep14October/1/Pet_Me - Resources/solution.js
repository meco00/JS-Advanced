function solve() {

    const fields=Array.from(document.querySelectorAll('#container input'));
    const addPetBtn=document.querySelector('#container button');

    const adoptions=document.querySelector('#adoption ul');
    const adopted=document.querySelector('#adopted ul');


    addPetBtn.addEventListener('click',create);

     function create(ev)
     {
         ev.preventDefault();

         const name=fields[0].value.trim();
         const age=Number(fields[1].value.trim());
         const kind=fields[2].value.trim();
         const owner=fields[3].value.trim();

         if(fields.some(i=> i.value.trim() == '') || Number.isNaN(age))
         {
             return;
         }


           let contactBtn = e('button',`Contact with owner`);

            const pet = e('li',
               e('p',
               e('strong',name),
               ' is a ',
               e('strong',age),
               ' year old ',
               e('strong',kind)
               ),
               e('span',`Owner: ${owner}`),
               contactBtn
              
            );


            adoptions.appendChild(pet);

            fields.forEach(i=> i.value='');


            contactBtn.addEventListener('click',contact);


            function contact()
            {
            
                const confirmationButton=e('button','Yes! I take it!');
                const confirmationInput=el('input',{placeholder:'Enter your names'});

                const confirmationDiv=e('div',
                     confirmationInput,
                     confirmationButton
                );

                pet.appendChild(confirmationDiv);

                contactBtn.remove();


                confirmationButton.addEventListener('click',adopt.bind(null,pet,confirmationInput));

            }

     }


     function adopt(pet,confirmationInput)
     {

        const inputValue=confirmationInput.value.trim();

        if(inputValue=='')
        {
            return;
        }

        pet.querySelector('div').remove();

        pet.querySelector('span').textContent=`New Owner: ${inputValue}`;

        const checkingButton=e('button','Checked');

        pet.appendChild(checkingButton);

        adopted.appendChild(pet);

        checkingButton.addEventListener('click',remove.bind(null,pet));


     }

    
     function remove(pet)
     {
        pet.remove();
     }

     function el(type , attr , ...content)
     {
         const element = document.createElement(type);
 
         for (const prop in attr) {
             element[prop]=attr[prop];
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

     function e(type,...content)
     {
         return el(type,{},...content);
     }




}
 
