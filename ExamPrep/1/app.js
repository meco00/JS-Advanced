function solve(){

   const authorField=document.getElementById('creator');
   const titleField =document.getElementById('title');
   const categoryField=document.getElementById('category');
   const contentField= document.getElementById('content');

   const fields=[authorField,titleField,categoryField,contentField];

   const postsSection=document.querySelector('.site-content section');
   const archiveSection=document.querySelector('.archive-section ol');
   const archiveElements=[];

   const addBlogBtn=document.getElementsByClassName('btn create')[0];

     addBlogBtn.addEventListener('click',add);

     function add(ev)
     {
        ev.preventDefault();

        const author=authorField.value.trim();
        const title=titleField.value.trim();
        const category=categoryField.value.trim();
        const content=contentField.value.trim();


        const deleteBtn=el('button',{class: 'btn delete'},'Delete');

        const archiveBtn=el('button',{class: 'btn archive'},'Archive');

        const buttonsDiv=el('div',{class: 'buttons'},
           deleteBtn,
           archiveBtn
        );


        const blog=e('article',
          e('h1',title),
          e('p','Category:',
             e('strong',category)),
          e('p','Creator:',
              e('strong',author)),
          e('p',content),
          buttonsDiv
        );

        postsSection.appendChild(blog);


        fields.forEach(f=> f.value='');

        archiveBtn.addEventListener('click',archive);

        function archive()
        {
           const liElement=e('li',title);
           archiveElements.push(
              {
                 element : liElement  ,
                 title
              }
              );

           if(archiveElements.length==1)
           {
            archiveSection.appendChild(
               liElement
               );

           }
           else{

              archiveSection.innerHTML='';

              archiveElements.sort((a,b)=> a.title.localeCompare(b.title)).forEach(e=>{
                 archiveSection.appendChild(e.element);
              });

           }

           

              blog.remove();

        }


        deleteBtn.addEventListener('click',() => blog.remove());


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
