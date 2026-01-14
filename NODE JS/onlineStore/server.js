var express = require('express')
var path = require('path')
var fs = require('fs')
var app = express()
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

var flowers=[{"id":1,"name":"marigold","likes":48000},
             {"id":2,"name":"rose","likes":48000},
             {"id":3,"name":"jasmine","likes":48000},
]

var customers=[{"id":1,"name":"ram","likes":48000},
             {"id":2,"name":"rahul","likes":48000},
             {"id":3,"name":"rohan","likes":48000},
]

var credentias=[{"username":"shrutik","password":"shrutik"},
                {"username":"yash","password":"yash"},
                {"username":"sumit","password":"sumit"},
                {"username":"rahul","password":"rahul"},
                {"username":"kartik","password":"kartik"}
]



app.get("/",function(request,response){
    request.sendFile("index.html")
})

app.get("/api/flowers",(request,response)=>{
    response.send(flowers)

})
app.get("/api/flowers/:id",(request,response)=>{
    let id = request.params.id;
    let flower =flowers.find(x=>x.id==id);
    response.send(flower)
})


app.get("/api/customers",(request,response)=>{
    response.send(customers)
})

app.get("/api/customers/:id",(request,response)=>{
    let customerId = request.params.id;
    let theCustomer= customers.find(x=>x.id==customerId)
    response.send(theCustomer)
})

app.post("/api/login",(request,response)=>{
     var user = request.body;
    // if(user.username=="shrutik"&& user.password == "shrutik"){
    //     response.send("Valid User")
    // }
    // else{
    //     response.send("Invaild User")
    // }

    let theUser =credentias.find(credentail=>credentail.username==user.username&& credentail.password ==user.password)
    if(theUser !==undefined)
    {
        response.send("Vaild User")

    }
    else{
        response.send("Invaild User")
    }
    })
app.post("/api/register",(request,response)=>{
    var newCustomer= request.body;
    customers.push(newCustomer);
    response.send("customer Register Successfull")
})

app.post("/api/addFlowers",(request,response)=>{
    var newFlowers =request.body;
    flowers.push(newFlowers)
    response.send("flower added successfully")
})

app.delete("/api/flowers/:id",(request,response)=>{
    let id =request.params.id
    let remainingFlowers =flowers.filter(f=>f.id!=id)
    flowers =remainingFlowers;
    response.send("folwer delete successfully")

})

app.put("/api/update",(request,response)=>{

    var existingCustomerId= request.params.id;
    var customerTobeUpdate= request.body;
    console.log("data to be update at the customer @server")
    console.log(customerTobeUpdate)
    console.log("data to e update si the customer")
})




app.listen(7878)
console.log("app is listening on the port 7878")