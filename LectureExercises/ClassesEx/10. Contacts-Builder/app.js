class Contact{
    #divElement;
    constructor(firstName, lastName, phone, email)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.phone=phone;
        this.email=email;
        this._online=false;
    }

    render(id){
         const toAppend=document.getElementById(id);

         const articleElement=document.createElement('article');

         this.#divElement=document.createElement('div');
         this.#divElement.textContent=this.firstName+' '+this.lastName;
         this.#divElement.classList.add('title');
         if(this._online)
          {
            this.#divElement.classList.add('online');
          }

         const button=document.createElement('button');
         button.textContent='&#8505';
         this.#divElement.appendChild(button);


         const infoDiv=document.createElement('div');
         infoDiv.classList.add('info');
         infoDiv.style.display='none';

         const phoneSpan=document.createElement('span');
         phoneSpan.textContent=`&phone; ${this.phone}`;

         const emailSpan=document.createElement('span');
         emailSpan.textContent=`&#9993; ${this.email}`;

         infoDiv.appendChild(phoneSpan);
         infoDiv.appendChild(emailSpan);

         articleElement.appendChild(this.#divElement);
         articleElement.appendChild(infoDiv);

         toAppend.appendChild(articleElement);


         button.addEventListener('click',()=>{
            infoDiv.style.display= infoDiv.style.display == 'none' ? 'block':'none' ;
         });

    }

    set online(value)
    {
        if(this.#divElement)
        {
            if(value)
            {
                this.#divElement.classList.add('online');
            }
            else{
                this.#divElement.classList.remove('online');
            }
        }

        this._online=value;

    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
  ];
  contacts.forEach(c => c.render('main'));
  
  // After 1 second, change the online status to true
  setTimeout(() => contacts[1].online = true, 5000);

  setTimeout(() => contacts[1].online = false, 2000);
  