window.addEventListener('load', solve);

function solve() {

   const genreField=document.getElementById('genre');
    const nameField=document.getElementById('name');
   const authorField=document.getElementById('author');
    const dateField=document.getElementById('date');

   const fields=[genreField,nameField,authorField,dateField];

    const allHitsContainer=document.querySelector('.all-hits-container');
    const savedSongsContainer=document.querySelector('.saved-container');

    const totalLikes=document.querySelector('.likes p');

    addSongBtn=document.getElementById('add-btn');

    addSongBtn.addEventListener('click',add)

    function add(ev)
    {
        ev.preventDefault();

        if(fields.some(f=> f.value.trim()==''))
        {
            return;
        }

        const genre=genreField.value.trim();
        const name=nameField.value.trim();
        const author=authorField.value.trim();
        const date=dateField.value.trim();


        const saveButton= el('button',{class:'save-btn'},'Save song');
        const likeButton= el('button',{class:'like-btn'},'Like song');
        const deleteButton= el('button',{class:'delete-btn'},'Delete');


        const song= el('div',{class: 'hits-info'}, 
         el('img',{src:'./static/img/img.png' }),
         e('h2',`Genre: ${genre}`),
         e('h2',`Name: ${name}`),
         e('h2',`Author: ${author}`),
         e('h3',`Date: ${date}`),
         saveButton,
         likeButton,
         deleteButton
        );

        allHitsContainer.appendChild(song);

        fields.forEach(f=> f.value = '');


        likeButton.addEventListener('click',like)

        function like()
        {

            let [text,likes]=totalLikes.textContent.split(': ');

            likes=Number(likes)+1;

            totalLikes.textContent= [text,likes].join(': ');

            likeButton.disabled=true;

        }


        saveButton.addEventListener('click',save);

        function save()
        {
            likeButton.remove();
            saveButton.remove();

            savedSongsContainer.appendChild(song);

        }


        deleteButton.addEventListener('click',remove.bind(null,song));



    }


    function remove(song)
    {
        song.remove();

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