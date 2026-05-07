const express = require("express")
const app = express()
const port = 3400;
const student =[
    {
        id:1,
        name:"Felix",
        age: 20,
        course: "cyber security", 
    },
    {
        id:2,
        name:"ite",
        age: 20,
        course: "EEE" ,
    },
    {
        id:3,
        name:"Alex",
        age: 20,
        course: "chemical engineering" ,
    },
    {
        id:4,
        name:"kemi",
        age: 20,
        course: "pure and applied mathematics" ,
    },
    {
        id:5,
        name:"david",
        age: 20,
        course: "pure and applied biology" ,
    },
    {
        id:6,
        name:"hydar",
        age: 20,
        course: "pure and applied physics" ,
    },
    {
        id:7,
        name:"Felix",
        age: 20,
        course: "pure and applied chemistry" ,
    },
    {
        id:8,
        name:"sam",
        age: 20,
        course: "pure and applied mathematics" ,
    },
    {
        id:9,
        name:"Festus",
        age: 20,
        course: "information security science" ,
    },
    {
        id:10,
        name:"seun",
        age: 20,
        course: "computer science" ,
    },
]

app.get("/", (reg,res)=>{
    res.send("welcome to my express server")
})

app.get('/about',(req, res)=> {
    res.sendFile(__dirname + '/index.html');
    console.log(__dirname);
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})