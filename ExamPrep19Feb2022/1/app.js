function solve() {

    const fnameField=document.querySelector('#fname');
    const lnameField=document.querySelector('#lname');
    const emailField=document.querySelector('#email');
    const birthField=document.querySelector('#birth');
    const positionField=document.querySelector('#position');
    const salaryField=document.querySelector('#salary');

    const fieldsCollection=[fnameField,lnameField,emailField,birthField,positionField,salaryField];

    const addBtn=document.querySelector('#add-worker');

    const workerTable=document.querySelector('#tbody');

    const budgetForSalary=document.querySelector('#sum');

    addBtn.addEventListener('click',addWorker)

    function addWorker(ev)
    {
        ev.preventDefault();

        const workerSalary=Number(salaryField.value.trim());

        if(fieldsCollection.map(f=>f.value.trim()).some(v=>v=='') || Number.isNaN(workerSalary) || workerSalary <=0 )
        {
            return;
        }

        const fname=fnameField.value.trim();
        const lname=lnameField.value.trim();
        const email=emailField.value.trim();
        const birth=birthField.value.trim();
        const position=positionField.value.trim();

        const firedBtn=el('button',{class:'fired'},'Fired');
        const editBtn=el('button',{class:'edit'},'Edit');


        const worker = e('tr',
          e('td',fname),
          e('td',lname),
          e('td',email),
          e('td',birth),
          e('td',position),
          e('td',workerSalary),
          e('td',
            firedBtn,
            editBtn)
          );

          workerTable.appendChild(worker);

          const currentSalaryBudget= Number(budgetForSalary.textContent);

          budgetForSalary.textContent = (currentSalaryBudget + workerSalary).toFixed(2);

          fieldsCollection.forEach(f=> f.value = '');

          firedBtn.addEventListener('click',fire.bind(null,worker,workerSalary));

          editBtn.addEventListener('click',()=>{

            removeWorker.bind(null,worker,workerSalary)();

            fnameField.value=fname;
            lnameField.value=lname;
            emailField.value=email;
            birthField.value=birth;
            positionField.value=position;
            salaryField.value=workerSalary;
          });
    }

    function fire(worker,workerSalary)
    {
        removeWorker.bind(null,worker,workerSalary)();
    }

    function removeWorker(worker,workerSalary)
    {
        worker.remove();

        const currentSalaryBudget= Number(budgetForSalary.textContent);

        budgetForSalary.textContent = (currentSalaryBudget - workerSalary).toFixed(2);
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
solve()