function focused() {

  Array.from(document.querySelectorAll('input[type="text"]'))
       .forEach(i=> {
           i.addEventListener('focus',(event)=>  event.target.parentElement.classList.add('focused'));
           i.addEventListener('blur',(event)=>  event.target.parentElement.classList.remove('focused'));

       });
  
}