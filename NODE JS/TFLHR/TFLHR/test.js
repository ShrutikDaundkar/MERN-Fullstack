import Employee from './employee.js';
import SalesEmployee from './salesemployee.js';
import SalesManager from './salesmanager.js';
import IAppraisable from './Interfaces/IApprisable.js';
import ITrainer from './Interfaces/ITrainer.js';


var emptype=typeof Employee;
console.log(emptype);

var salesemptype=typeof SalesEmployee;
console.log(salesemptype);

var salesmanagertype=typeof SalesManager;
console.log(salesmanagertype);

//Reflection:
//RTTI (Run Time Type Information)
//Metadata about types available at runtime
//reflection using typeof operator
//typeof operator returns 'function' for classes
//because classes are special functions in javascript

var emp = new Employee(1, "John Doe", 50000, 10000, 5000);
console.log(`Employee Pay: ${emp.computePay()}`);
//emp.doWork(); //it is abstract method, will throw error
emp.computePay(); //it is virtual method, will work

var salesEmp = new SalesEmployee(2, "Jane Smith", 60000, 12000, 6000, 5000);
console.log(`Sales Employee Pay: ${salesEmp.computePay()}`);
salesEmp.doWork(); //it is overridden method, will work
salesEmp.computePay(); //it is overridden method, will work


//Overriding
//changing the implementation of base class method in derived class

var salesMgr = new SalesManager(3, "Alice Johnson", 70000, 14000, 7000, 8000, 10000);
console.log(`Sales Manager Pay: ${salesMgr.computePay()}`);
salesMgr.doWork();


// The role of Object.assign is to copy the methods from the interface prototypes
//Enforce SalesManager to implement IAppraisable and ITrainer interfaces
Object.assign(SalesManager.prototype, IAppraisable.prototype);
Object.assign(SalesManager.prototype, ITrainer.prototype);

const staff = [
                new SalesEmployee(1, "Amit", 25000, 5000),
                new SalesManager(2, "Neha", 40000, 8000, 10000)
];

//Polymorphic behavior
for (const trainer   of staff) {
    console.log(`Employee ID: ${trainer.id}, Name: ${trainer.name}, Pay: ${trainer.computePay()}`);
    trainer.conductTraining(); //optional chaining to call if method exists
}