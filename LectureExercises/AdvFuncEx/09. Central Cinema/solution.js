function solve() {
   
    const movies=[];

    const addMovieBtn=document.querySelector("#add-new button");


    addMovieBtn.addEventListener('click',createMovie);

    const moviesSection=document.querySelector("#movies ul");

    function createMovie(e)
    {
        e.preventDefault();
        const inputs=e.target.parentElement.children;

        const name=inputs[0].value;
        const hall=inputs[1].value;
        const ticketPrice=inputs[2].value;

        if(name!==''&&hall!==''&&!isNaN(Number(ticketPrice))&& ticketPrice !== '0')
        {
            const liElement=document.createElement('li');
            const spanElement=document.createElement('span');
            spanElement.textContent=name;

            const strongElement=document.createElement('strong');
            strongElement.textContent=`Hall: ${hall}`;

            const divElement=document.createElement('div');

            const divStrongElement=document.createElement('strong');
            divStrongElement.textContent=(Number(ticketPrice)).toFixed(2);
            const inputElement=document.createElement('input');
            inputElement.placeholder='Tickets Sold';
            const buttonElement=document.createElement('button');
            buttonElement.textContent='Archive';

            divElement.appendChild(divStrongElement);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);


            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);
            liElement.appendChild(divElement);

            moviesSection.appendChild(liElement);


            movies.push({
                'name':name,
                'hall':hall,
                'ticketPrice':Number(ticketPrice),
                 'input':inputElement,
            });


            inputs[0].value='';
            inputs[1].value='';
            inputs[2].value='';

        }

    }


    moviesSection.addEventListener('click',archieveMovie);

    const archieveSection=document.querySelector('#archive ul');

    function archieveMovie(e)
    {
        if(e.target.tagName=='BUTTON' && e.target.textContent=='Archive')
        {

            const movieName=e.target.parentElement.parentElement.children[0].textContent;

            const movie= movies.find(m=>m.name == movieName && m.input.value != '');

            const soldTickets=movie.input.value;

            if(isNaN(Number(soldTickets)))
            {
                return;
            }

            const liElement=document.createElement('li');
            const spanElement=document.createElement('span');
            spanElement.textContent=movieName;

            const strongElement=document.createElement('strong');
            const totalSum=movie.ticketPrice*Number(soldTickets);
            strongElement.textContent=`Total amount: ${totalSum.toFixed(2)}`;

            const buttonElement=document.createElement('button');
            buttonElement.textContent='Delete';

            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);
            liElement.appendChild(buttonElement);
            
            archieveSection.appendChild(liElement);

           e.target.parentElement.parentElement.remove();


        }

    }

    archieveSection.addEventListener('click',deleteArchive);

    function deleteArchive(e)
    {
        if(e.target.tagName=='BUTTON' && e.target.textContent=='Delete')
        {
            e.target.parentElement.remove();
        }
    }

    document.querySelector('#archive button').addEventListener('click',clearArchives);

    function clearArchives(e)
    {
        if(e.target.textContent=='Clear')
        {
            archieveSection.innerHTML='';
        }

    }

}