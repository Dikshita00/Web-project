const express=require('express');
const f=require('fs');
const p=require('path');
const users1=require('./MOCK_DATA.json');
const port = 3000;
const app=express();
app.get('/',(req,res)=>{
    res.send("HELLO FROM EXPRESS");
});
app.get('/user',(req,res)=>{
    res.json(users1);
});
app.get('/user/:id',(req,res)=>{
    const id=Number(req.params.id);
    const user=users1.find(
        user=>user.id===id
    )
    return res.json(user);
});
app.get('/user/:id/:email',(req,res)=>{
    const id=Number(req.params.id);
    const user=users1.find(
        user=>user.id===id
    )
    return res.json(user);
});app.delete('iser/:id',(req,res)=>{
    const id=Number(req.params.id);
    const userIndex=users1.findIndex(
        user=>user.id===id
    )
    if(userIndex=== -1)
        return res.status(404).send('Data not found');
    const deleteItem=users1.splice(userIndex,1)
    return res.json("Dae");
});
app.use(express.urlencoded({extended:false}))
app.post('/adduser', (req, res) => {
    const data = req.body;// 
    console.log("data " + data.email);
    users1.push(
        { data, id: users1.length + 1 });
    f.writeFile('./MOCK_DATA.json',
        JSON.stringify(users1), (err) => {
            console.log(err)
        });
    return res.json("data added");
})
app.get('/aboutus',(req,res)=>{
    const t=p.json(__dirname,aboutus.html);
    console.log(t);
    res.sendFile
});
app.listen(port)
console.log("From Start Script");