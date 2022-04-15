function solve() {
    const recipientNameField=document.querySelector('#recipientName');
    const titleField=document.querySelector('#title');
    const messageField=document.querySelector('#message');

    const fields=[recipientNameField,titleField,messageField];

    const addBtn=document.querySelector('.action #add');
    const resetBtn=document.querySelector('.action #reset');

    const listUl = document.querySelector('#list');
    const sentListUl=document.querySelector('.sent-list');
    const deleteListUl=document.querySelector('.delete-list');

    addBtn.addEventListener('click',addMail);
  
    function addMail(ev)
    {
        ev.preventDefault();

        if(fields.map(f=>f.value.trim()).some(x=> x==''))
        {
            return;
        }

        const name = recipientNameField.value.trim();
        const title = titleField.value.trim();
        const message = messageField.value.trim();

        const titleElement= e('h4',`Title: ${title}`);
        const nameElement=  e('h4',`Recipient Name: ${name}`);
        const messageSpan= e('span',message);
        const sendBtn=el('button',{type:'submit',id:'send'},'Send');
        const deleteBtn=el('button',{type:'submit',id:'delete'},'Delete');

        const listActionDiv= el('div',{ id:'list-action'},
        sendBtn,
        deleteBtn);


        const mail=e('li',
          titleElement,
          nameElement,
           messageSpan,
           listActionDiv
            );


            listUl.appendChild(mail);
            resetFields();

            sendBtn.addEventListener('click',()=>{

                messageSpan.remove();
                listActionDiv.remove();

                deleteBtn.removeAttribute('id');
                deleteBtn.className='delete';

                mail.appendChild(
                    el('div',{class:'btn'},deleteBtn)
                    );

                    sentListUl.appendChild(mail);


            })

            deleteBtn.addEventListener('click',deleteMail.bind(null,mail,name,title));



    }

    function deleteMail(mail,name,title)
    {
         mail.remove();

         mail=e('li',
            e('span',`Title: ${title}`),
            e('span',`Recipient Name: ${name}`));

         deleteListUl.appendChild(mail);
    }

    resetBtn.addEventListener('click',resetFields);

    function resetFields()
    {
        fields.forEach(f=>f.value = '');
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
solve()