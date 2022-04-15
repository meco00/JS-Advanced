function solve() {

    const form=document.querySelector(".wrapper form");

    const addBtn=form.querySelector("#add");

    addBtn.addEventListener('click',addExam);

    let exams=[];


    const openedSection= document.getElementsByTagName('section')[1].children[1];
    const inProgressExamsSection=document.querySelector('#in-progress');
    const finishededExamsSection=document.getElementsByTagName('section')[2].children[1];

    function addExam(e)
    {
        e.preventDefault();

        const task=form.querySelector('input[name="task"]');

        const description=form.querySelector('textarea');

        const date=form.querySelector('input[name="date"]');

        if(task.value==='' && description.value ==='' && task.value ==='' )
        {
            return;

        }

        const articleElement=document.createElement('article');

        const h3Element=document.createElement('h3');
        h3Element.textContent=task.value;

        const descElement=document.createElement('p');
        descElement.textContent=`Description: ${description.value}`;

        const dateElement=document.createElement('p');
        dateElement.textContent=`Due Date: ${date.value}`;


        articleElement.appendChild(h3Element);
        articleElement.appendChild(descElement);
        articleElement.appendChild(dateElement);

    

        const divElement=document.createElement('div');
        divElement.classList.add('flex');

        const startBtn=document.createElement('button');
        startBtn.textContent='Start';
        startBtn.classList.add('green');

        const deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.classList.add('red');

        divElement.appendChild(startBtn);
        divElement.appendChild(deleteBtn);

        articleElement.appendChild(divElement);

        exams.push({
            name: task.value,
            item: articleElement
        });

        openedSection.appendChild(articleElement);
        
        task.value='';
        description.value='';
        date.value='';

    }
    function deleteExam(e)
    {
        if(e.target.tagName=='BUTTON' && e.target.classList.contains('red'))
        {
            e.target.parentElement.parentElement.remove();
        }
    }

    openedSection.addEventListener('click',startExam);
    openedSection.addEventListener('click',deleteExam);

    function startExam(e)
    {

        if(e.target.tagName=='BUTTON' && e.target.classList.contains('green'))
        {
            const parent=e.target.parentElement.parentElement;
          const examName=parent.children[0].textContent;

        const exam=exams.find(e=> e.name == examName);

        const section= exam.item;

        const divElement= section.querySelector('div');
        divElement.innerHTML='';

        const deleteBtn=document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.classList.add('red');

        const finishBtn=document.createElement('button');
        finishBtn.textContent='Finish';
        finishBtn.classList.add('orange');

        divElement.appendChild(deleteBtn);

        divElement.appendChild(finishBtn);


       inProgressExamsSection.appendChild(section);

     }

    }


    inProgressExamsSection.addEventListener('click',deleteExam);
    inProgressExamsSection.addEventListener('click',finishExam);

    function finishExam(e)
    {   
         if(e.target.tagName=='BUTTON' && e.target.classList.contains('orange'))
    {
        const parent=e.target.parentElement.parentElement;
        const examName=parent.children[0].textContent;

        const exam=exams.find(e=> e.name == examName);

        const section= exam.item;

       const divElement= section.querySelector('div');
       divElement.innerHTML='';

       finishededExamsSection.appendChild(section);


    }
}

}