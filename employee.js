// class Employee{
//     setEmployee(eid,name,dept,salary){
//         this.eid=eid;
//         this.name=name;
//         this.dept=dept;
//         this.salary=salary;
//     }
//     displayDetails(){
//         console.log(this.eid,this.name,this.dept);
//     }
// }

// var emp=new Employee()
// emp.setEmployee(100,"hari","hr",25000)
// emp.displayDetails()

//constructor

// class Employee{
//     constructor(eid,name,dept,salary){
//         this.eid=eid;
//         this.name=name;
//         this.dept=dept;
//         this.salary=salary;
//     }
//     displayDetails(){
//         console.log(this.eid,this.name,this.dept);
//     }
// }

// var emp=new Employee(100,"hari","hr",2500)
// emp.displayDetails()

//inheritance
class parent{
    m1(){
        console.log("inside parent");
    }
}
class Employee extends parent{
    constructor(eid,name,dept,salary){
        super().m1()
        this.eid=eid;
        this.name=name;
        this.dept=dept;
        this.salary=salary;
    }
    displayDetails(){
        console.log(this.eid,this.name,this.dept);
    }
}

var emp=new Employee(100,"hari","hr",2500)
emp.displayDetails()
emp.m1()