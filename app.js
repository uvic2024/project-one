const express=require('express');
const app=express();
const port=3000;

app.use(express.static('frontend/dist'))
app.use(express.static('frontend/public'))
app.use('/*',(req,res)=>{
    res.sendFile('index.html',{root:'./frontend/dist'})
})

app.listen(port,()=>{
    console.log(`just hit port ${port}`)
})