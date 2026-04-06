const express= require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "Sb bdia h",
        message: "This is the homepage json"
    })
})

app.get("/about",(req,res)=>{
    res.json({
        name:"shreyash",
        msg:"full stack developer"
    })
})

app.get("/contact",(req,res)=>{
    res.json({
        companyNo:"123123123",
        msg:"contact no"
    })
})

app.get("/home/contact",(req,res)=>{
    res.json({
        HomePage:"this is home page",
        details: "home page"
    })
})


app.get('/user/:id',(req,res)=>{
    res.send(`user Id is ${req.params.id}`)
})

app.listen(3000,()=>{
    console.log("server running at 3000")
})