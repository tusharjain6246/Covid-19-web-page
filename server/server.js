var path = require('path');
const http = require('http');
const request  = require("request");
const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var publicPath = path.join(__dirname,'../public');
console.log(publicPath);
var app = express();
var  server = http.createServer(app);
app.use(express.static(publicPath));
app.use(express.json({limit:'1mb'}));
// var iso;


// app.post('/',(req,res)=>{
//   const iso = req.body.iso;
//   console.log(iso);
//   request({
//     url:`https://covid19india.p.rapidapi.com/getStateData/${iso}`,
//     json: true,
//     headers: {
//       'x-rapidapi-host': 'covid19india.p.rapidapi.com',
//       'x-rapidapi-key': 'fa473f8f91mshb28634e2acf328ap17dbe4jsn4bd6c0230c4e'
//     }
//   },(error,response,body)=>{
//     console.log(body.response);
//   });
// });
app.post('/all',(req,res)=>{
  const iso = req.body.iso;
  console.log(iso);
  request({
    url:`https://api.covid19india.org/data.json`,
    json: true,

  },(error,response,body)=>{
    // var data = JSON.parse(body.statewise);
    var data = body.statewise;
    console.log(data);
    res.json(data);
  });

});


app.post('/date',(req,res)=>{
  request({
    url: 'https://api.covid19india.org/states_daily.json',
    json: true
  },(error,response,body)=>{
    var data = body.states_daily;
    // console.log(data);
    res.json(data);
  });
});


server.listen(port, ()=>{
  console.log(`server started at port ${port}`);
});
