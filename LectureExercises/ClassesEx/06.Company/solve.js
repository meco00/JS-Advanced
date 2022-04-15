class Company{
    constructor()
    {
        this.departments={};
    }

    addEmployee(name, salary, position, department)
    {
        if([name, salary, position, department].some(e=> e == '' || e==null || e==undefined) 
        || salary < 0)
        {
            throw new Error('Invalid input!');
        }
          if(!this.departments[department])
          {
            this.departments[department]=[];
          }

        this.departments[department].push({
            name,
            salary, 
            position,
            department
        });

      return `New employee is hired. Name: ${name}. Position: ${position}`;
    
    }

    bestDepartment(){

        let bestDepartmentName='';
        let bestDepartmentAvgSalary=Number.MIN_SAFE_INTEGER;

        for (const department in this.departments) {

            let currentDepartmentSalaries=0;


            this.departments[department].forEach(employee=>{
             currentDepartmentSalaries+=employee.salary;
             });     
                
          currentDepartmentSalaries=currentDepartmentSalaries/this.departments[department].length;

          if(bestDepartmentAvgSalary < currentDepartmentSalaries)
          {
              bestDepartmentAvgSalary=currentDepartmentSalaries;
              bestDepartmentName=department;
          }

           
        }
            let textResult=[`Best Department is: ${bestDepartmentName}`];
            textResult.push(`Average salary: ${bestDepartmentAvgSalary.toFixed(2)}`);

           const sortEmployees= (a,b) => {

               const result = b.salary-a.salary;

               return result == 0 ? a.name.localeCompare(b.name) : result
           }

           this.departments[bestDepartmentName]
           .sort(sortEmployees)
           .forEach((employee)=>{

             textResult.push(`${employee.name} ${employee.salary} ${employee.position}`);

           });

           return textResult.join('\n');


        };


    }


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


