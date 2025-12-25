var handler= require("./handler")

var Account = function(amount){

    var balance =amount;

    var monitor =function(){
        if (balance <5000){
            handler.blockaccount()
        }

        else if (balance >=250000){
            handler.applyincometax()
        }
    }

    var getBalance =function(amount){
        return balance;
    }
    var deposite = function(amount){
        balance+=amount
        console.log("Amount after deposite is ",balance);
        monitor()
    }

    var withdraw =function(amount){
        balance-=amount;
        console.log("amount after withdraw",balance);
        monitor()
    }

    return{
        receiveamount:getBalance,
        debit:withdraw,
        credit:deposite
    }

}

var acc1 =new Account(500);
var data = acc1.receiveamount();
console.log("display balance",data)

data = acc1.credit(200)
//console.log(data)
acc1.debit(100)