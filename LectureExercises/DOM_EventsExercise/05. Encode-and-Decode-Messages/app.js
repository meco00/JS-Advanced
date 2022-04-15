function encodeAndDecodeMessages() {
    
    const senderBtn=document.querySelector('button');

    senderBtn.addEventListener('click',onSenderClick);

    function onSenderClick(e)
    {
        const parent=e.target.parentElement;

        const senderMessage=parent.querySelector('textarea');

        const text=senderMessage.value;

        const encodedText = text.split('').map(encode);

        senderMessage.value='';

        parent.parentElement.querySelector('textarea[placeholder="No messages..."]')
        .textContent=encodedText.join('');

    }


    const receiverBtn=document.querySelectorAll('button')[1];

    receiverBtn.addEventListener('click',onReceiverClick);



    function onReceiverClick(e)
    {
        const parent=e.target.parentElement;

        const senderMessage=parent.querySelector('textarea');

        const text=senderMessage.value;

        const decodedText = text.split('').map(decode);

        parent.querySelector('textarea')
        .textContent=decodedText.join('');

    }





    function encode (a) 
    {
    const el = Number(a.charCodeAt(0)) + 1;

     return String.fromCharCode(el);
    }

    function decode(a)
    {
        const el = Number(a.charCodeAt(0)) - 1;

        return String.fromCharCode(el);
    }




}