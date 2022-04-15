function solution() {
    const nameField=document.querySelector('.card input[type="text"]');

    const listOfGifts=document.querySelector('.card ul');

    const addCardBtn=document.querySelector('.card button');

    const sendedGiftsList=document.getElementsByClassName('card')[2].querySelector('ul');

    const discardedGiftsList=document.getElementsByClassName('card')[3].querySelector('ul');

    addCardBtn.addEventListener('click',addGift)

    const gifts=[];

    function addGift()
    {
        const name=nameField.value.trim();

        if(name=='')
        {
            return;
        }

        const sendBtn=el('button',{id:'sendButton'},'Send');
        const discardBtn=el('button',{id:'discardButton'},'Discard');

        const gift= el('li',{class: 'gift'},
         name,
         sendBtn,
         discardBtn
        );

        const giftObj={
            gift: gift,
            name: name
        };

        gifts.push(giftObj);

        if(gifts.length == 1)
        {
            listOfGifts.appendChild(gift);
        }
        else{

            listOfGifts.innerHTML='';

            gifts.sort((a,b)=> a.name.localeCompare(b.name)).forEach(g=>{

                listOfGifts.appendChild(g.gift);

            });

        }


        nameField.value='';


        sendBtn.addEventListener('click',send)

        function send()
        {
            
            removeGiftFromArray();
            
            sendBtn.remove();
            discardBtn.remove();

            sendedGiftsList.appendChild(gift);
            
        }


        discardBtn.addEventListener('click',discard)

        function discard()
        {
           
            removeGiftFromArray();
            
            sendBtn.remove();
            discardBtn.remove();

            discardedGiftsList.appendChild(gift);


        }


        function removeGiftFromArray()
        {
            const indexOfGift=gifts.indexOf(giftObj);
            
            gifts.splice(indexOfGift,1);
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

