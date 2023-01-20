const express = require('express');

require('./config');
const Product = require('./product')


const app = express();
app.use(express.json())

// app.post("/create", async(req,res)=>{
//     let data = new Product(req.body);
//     let result = await data.save();
//     console.log(req.body);
//     res.send(result);
// });

  app.get("/list", async(req,res)=>{
     //var query = {  name: /^N/  };
      let data = await Product.find({},
         { "Tax": 0 });
      res.send(data);
      console.log(data)

  });


//  app.get("/list", async(req,res)=>{
//     //var query = {  name: /^N/  };
//      let data = await Product.find().count();
//      //res.send(data);
//      console.log(data)

//  });






app.listen(3000, ()=>{
    console.log("Port Running");
});