
var SalesEmployee = require('./salesemployee');
class SalesManager extends SalesEmployee {

  //initialize the sales manager object
  constructor(id, name, basicSalary, hra, tax, commission, bonus) {
    super(id, name, basicSalary, hra, tax, commission);
    this.bonus = bonus;
  }

  //override the computePay method
  computePay() {
    return super.computePay() + this.bonus;
  }

  //implement the doWork method
  doWork() {
    console.log("SalesManager is working.");
  }
 

    conductTraining() {
        console.log("SalesManager conducting training session.");
    }
    conductHandsOnSession() {
        console.log("SalesManager conducting hands-on session.");
    }
}

module.exports = SalesManager;