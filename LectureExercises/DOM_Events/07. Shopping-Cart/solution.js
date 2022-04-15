function solve() {
   
   const cart = document.querySelector('.shopping-cart');
   cart.addEventListener('click', onClick ) ;

   let products=[];
   let checkOutEd=false;

   function onClick(e)
   {
      if(e.target.tagName=='BUTTON' && e.target.classList.contains('add-product')&&!checkOutEd)
      {
         const parent=e.target.parentNode.parentNode;

         const name=parent.children[1].children[0].textContent;

         const price=Number(parent.children[3].textContent);

         products.push({
            name,
            price
         });

         document.querySelector('textarea').textContent+=`Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }

   }

    const checkOutBtn=document.querySelector('.checkout');

    checkOutBtn.addEventListener('click',OnCheckOut);

    function OnCheckOut(e)
    {
      const namesUnique = [...new Set(products.map(item => item.name))];

      const totalPrice=products.reduce((a,el)=> a+el.price ,0);

       checkOutBtn.disabled=true;

       checkOutEd=true;

      document.querySelector('textarea').textContent+=`You bought ${namesUnique.join(', ')} for ${totalPrice.toFixed(2)}.`;

    }


}