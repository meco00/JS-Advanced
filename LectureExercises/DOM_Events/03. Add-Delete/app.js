function addItem() {

    const input=document.getElementById('newItemText');

    const liElement=document.createElement('li');
    liElement.textContent=input.value;

    const link=document.createElement('a');
    link.textContent='[Delete]';
    link.href='#';

    liElement.appendChild(link);

    const list =  document.getElementById('items');

   list.appendChild(liElement);

    input.value='';

    list.addEventListener('click',click);

    function click(e)
    {
        if(e.target.tagName=='A' && e.target.textContent=='[Delete]')
        {
            e.target.parentNode.remove();
        }
    }


}