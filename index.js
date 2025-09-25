import express from 'express'
let app=express()
import path from "path"
app.set('views','./views');
app.set('view engine','hbs');
app.listen(3030);
app.use((req,res,next)=>{
    console.log('Time: ',Date.now())
    req.set('data', "from use");
    next()
})
app.get("/about",(req,res)=>{
    console.log('about');
    if(req.body.data){

    }
    else{

    }
    res.render("aboutus")
})
app.get("/Calc",(req,res)=>{
    res.render("Calc")
})
import bodyParser from 'body-parser'
app.use(bodyParser.urlencoded({extended:true}));
app.post("/docalculation",(req,res)=>{
    let n1=req.body.num1
    let n2=req.body.nm2
    let sum=parseInt(n1)+parseInt(n2)
    res.render("cal",{result: sum})
})
app.get("/maths", (req, res) => {
    res.render("mathstable")
})
app.post("/generate-table",(req,res)=>{
    let n1=req.body.num1
    let arr=[]
    for(var i=0;i<=10;i++){
        arr[i]=`${n1}*${i}=${n1*i}`
    }
    res.render("mathstable",{rowdata: arr})
})