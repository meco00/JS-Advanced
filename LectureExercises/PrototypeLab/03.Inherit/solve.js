function toStringExtension() {
    class Person
    {
        constructor(name,email)
        {
           this.name=name;
           this.email=email;
        }
    
        toString()
        {
            const constructorName=this.constructor.name;
    
            return `${constructorName} (name: ${this.name}, email: ${this.email})`
        }
     
    }
    
    
    class Teacher extends Person{
        constructor(name,email,subject)
        {
            super(name,email);
            this.subject=subject;
        }
    
        toString()
        {
    
            return super.toString().slice(0,-1) +   `, subject: ${this.subject})`;
        }
    }
    
    class Student extends Person{
        constructor(name,email,course)
        {
            super(name,email);
            this.course=course;
        }
    
        toString()
        {
    
            return super.toString().slice(0,-1) +   `, course: ${this.course})`;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}



let person = new Person("Peter", "Ivanov");
console.log(person.toString()); 
let teacher = new Teacher("Ivan", "Merudiyski",'Math');
console.log(teacher.toString()); 
let student = new Student("Kiril", "Petkov",'JS Advanced');
console.log(student.toString()); 


