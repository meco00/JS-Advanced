function create(words) {

   const content=document.getElementById('content');

   for (const word of words) {
      
      const div=document.createElement('div');

      const paragraph=document.createElement('p');
      paragraph.textContent=word;
      paragraph.style.display='none';

      div.appendChild(paragraph);


      content.appendChild(div);


   }

   content.addEventListener('click',onClick);


   function onClick(e)
   {
      if(e.target.tagName=='DIV'&&e.target!=content)
      {
         e.target.children[0].style.display='block';
      }

   }



}