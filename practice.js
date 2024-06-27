//how to render(DISPLAY) html AND json
const express=require('express');
const app=express();

app.get('',(req,res)=>{
   res.send('<h1> welcome to my home page</h1>');
});

app.get('/about',(req,res)=>{
   res.send(`<input type="text" placeholder ="username"> <button> click me</button> `);

});

//json data render-json means key value pairs
app.get('/help',(req,res)=>{
   res.send({
      name:'amit',
      age:'10',
   });
});

app.listen(4100);

