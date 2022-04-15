function addItem() {

    const optionText=document.getElementById('newItemText');
    const optionValue=document.getElementById('newItemValue');

    const optionElement=document.createElement('option');
    optionElement.textContent=optionText.value;
    optionElement.value=optionValue.value;

    document.getElementById('menu').appendChild(optionElement);

    optionText.value='';
    optionValue.value='';
}