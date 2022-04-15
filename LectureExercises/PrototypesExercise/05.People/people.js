function solution()
{

class Employee{

    #currentTaskCounter;

    constructor(name,age)
    {
        this.name=name;
        this.age=age;
        this.salary=0;
        this.dividend=0;
        this.#currentTaskCounter=0
        this.tasks=[];
    }

    collectSalary()
    {
        console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
    }

    work()
    {
        if(this.#currentTaskCounter >= this.tasks.length)
        {
           this.#currentTaskCounter = 0;
        }

        console.log(this.tasks[this.#currentTaskCounter++]);

    }
}

class Junior extends Employee{
    constructor(name,age)
    {
        super(name,age);

        this.tasks.push(`${this.name} is working on a simple task.`);
    }
}


class Senior extends Employee{
    constructor(name,age)
    {
        super(name,age);

        this.tasks.push(`${this.name} is working on a complicated task.`);
        this.tasks.push(`${this.name} is taking time off work.`);
        this.tasks.push(`${this.name} is supervising junior workers.`);
    }
}

class Manager extends Employee{
    constructor(name,age)
    {
        super(name,age);
        this.tasks.push(`${this.name} scheduled a meeting.`);
        this.tasks.push(`${this.name} is preparing a quarterly report.`);
    }

}

return {
    Employee,
    Junior,
    Senior,
    Manager
};

};


const classes = solution (); 
const junior = new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior = new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager = new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();  

console.log(manager.hasOwnProperty('dividend'));
