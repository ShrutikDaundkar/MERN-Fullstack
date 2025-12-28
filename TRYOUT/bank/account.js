var functions = require("./handler");
var events= require("events");
var emitter = new events.EventEmitter();


var Account = function(amount){
   var balance=amount;

    var getbalance = function(){
        return balance;
    };

    var withdraw= function(amount){
        balance= balance-amount;
        console.log("the amonunt after withdraw is " + balance );
        monitor();
      
    };

    var deposite= function(amount){
        balance= balance+amount;
        console.log("Amount after deposite is" + balance);
        monitor();

    };

    var monitor = function(){
        if(balance <5000){
            //funciton call to blockacc
            //functions.blockacc()---------instead add a event listner here
            emitter.emit("lowbalance");
        }
        else if(balance>500000){
            //fucntion call to incometax charge 
         // functions.paytax()-----------------event handler
              emitter.emit("highbalance");

        }
    }

    return{
        recieveBalance : getbalance,
        debit : withdraw,
        credit : deposite
    }


}

emitter.on ("lowbalance",functions.blockacc);
emitter.on ("highbalance",functions.paytax);

var acc123 = new Account(500000);
var data = acc123.recieveBalance();
console.log(data);

var amt=10000;
var abc = acc123.credit(amt);


var amt=2000;
var pqre= acc123.debit(amt);