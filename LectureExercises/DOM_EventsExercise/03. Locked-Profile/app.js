function lockedProfile() {

   document.getElementById('main').addEventListener('click',onClick);

   function onClick(e)
   {
    const currentElement=e.target;
    const parent = currentElement.parentElement;

       if(currentElement.tagName=='BUTTON' && parent.classList.contains('profile'))
       {

         const isUnlocked=parent.querySelector('input[value="unlock"]').checked;

        if(isUnlocked)
        {
           
         const divElement = Array.from(parent.querySelectorAll('div'))
         .find(d=> d.id.includes('HiddenFields'));

         if(currentElement.textContent=='Show more')
         {
             divElement.style.display='block';
             currentElement.textContent='Hide it';

         }
         else{
             divElement.style.display='';
             currentElement.textContent='Show more';
         }

        }
    }

   }

}