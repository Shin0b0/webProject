var express=require("express")
var mysql=require("mysql")
var app=express()

app.use(express.json())

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'webproject'

})

con.connect((err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log("connected !!")
    }
})

app.post('/post',(req,res)=>{
    const name=req.body.name;
    const id=req.body.id;
    const email=req.body.email;
    const pass=req.body.pass;
    con.query('insert into user values(?,?,?,?)',[name,id,email,pass],(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
          res.send("Posted")
        }
    })
})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else
    {
      console.log("on port 3000")
    }
})