const express = require("express");
const mysql= require("mysql2")

const app = express();


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Sahil@123",
    database:"school"
})

db.connect((err)=>{

    if(err){
        console.log("Db not connected", err.message)
        return;
    }

    console.log("Db Connected")
})




app.get('/',(req,res)=>{

    console.log(req)
    let tablename;

    let a = "select & from "+ tablename

    db.query(a,(err,result)=>{
        if(err){
            res.send("Data Not Found")
        }

        console.log(result);
        res.json(result)
    })

    // res.send("HEllo")
})


app.listen(8000,()=>{
    console.log("Server is running at 8000 port")
})