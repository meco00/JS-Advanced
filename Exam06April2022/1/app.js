window.addEventListener("load", solve);

function solve() {

  const reviewList=document.querySelector('#review-list');
  const publishedList=document.querySelector('#published-list');

  const titleField=document.querySelector('#post-title');
  const categoryField=document.querySelector('#post-category');
  const contentField=document.querySelector('#post-content');

  const fieldsCollection=[titleField,categoryField,contentField];

  const clearBtn=document.querySelector('#clear-btn');

  const publishBtn=document.querySelector('#publish-btn');

  publishBtn.addEventListener('click',publish);

  function publish(ev)
  {
    ev.preventDefault();

    if(fieldsCollection.map(f=>f.value.trim()).some(v=>v==''))
    {
      return;
    }

    const title=titleField.value.trim();
    const category=categoryField.value.trim();
    const content=contentField.value.trim();

    const editBtn=el('button',{class:'action-btn edit'},'Edit');
    const approveBtn=el('button',{class:'action-btn approve'},'Approve');


    const post= el('li',{class:'rpost'},
      e('article',
        e('h4',title),
        e('p',`Category: ${category}`),
        e('p',`Content: ${content}`)),
        editBtn,
        approveBtn
    );

    reviewList.appendChild(post);

    fieldsCollection.forEach(f=>f.value='');


    editBtn.addEventListener('click',()=>{

      post.remove();

      titleField.value=title;
      categoryField.value=category;
      contentField.value=content;
    });

    approveBtn.addEventListener('click',()=>{

      editBtn.remove();
      approveBtn.remove();

      publishedList.appendChild(post);


    })

  }

  clearBtn.addEventListener('click',()=>
  {
    publishedList.innerHTML='';

  });


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
