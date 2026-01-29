var employee = require('./employee');
class SalesEmployee extends employee {

  //initialize the sales employee object
  constructor(id, name, basicSalary, hra, tax, commission) {
    super(id, name, basicSalary, hra, tax);
    this.commission = commission;
  }

  //override the computePay method
  computePay() {
    return super.computePay() + this.commission;
  }

  //implement the doWork method
  doWork() {
    console.log("SalesEmployee is working.");
  }


    conductTraining() {
        console.log("SalesEmployee conducting training session.");
    }
    conductHandsOnSession() {
        console.log("SalesEmployee conducting hands-on session.");
    }

}
module.exports = SalesEmployee;