function notify(message) {

  const divElement=document.getElementById('notification');

  divElement.style.display='block';
  divElement.textContent=message;

  divElement.addEventListener('click',(e)=>{

    e.target.style.display='none';

  });

}