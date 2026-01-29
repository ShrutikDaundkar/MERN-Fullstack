class Employee {

  //initialize the employee object
  //in javascript we have only one constructor allowed per class

  constructor(id, name, basicSalary,hra,tax) {

    //this refers to current object

    //here we delcare and initialize the member variables
    this.id = id;
    this.name = name;
    this.basicSalary = basicSalary;
    this.hra = hra;
    this.tax = tax;
  }

  //act as virtual function to compute pay
  //virtual method  does have body (implementation)

  //business logic to compute pay
  computePay() {
    return this.basicSalary + this.hra - this.tax;
  }

  //act as abstract function to perform work
  //but this method does not have body (implementation)
  //It is used for enforcing derived classes to implement this method
  doWork() {
    throw new Error('Method "doWork()" must be implemented.');
  }
}


module.exports = Employee;
