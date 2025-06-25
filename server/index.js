// const http = require('http')
const fs = require('fs')
const express= require('express')
const path = require('path')

const app = express();

app.get('/',(req,res)=>{

    // res.sendFile('public\home.html')

    res.sendFile(path.join(__dirname,'public','home.html'))
})



app.get('/about',(req,res)=>res.sendFile(path.join(__dirname,'public','about.html')))

app.get('/contact',(req,res)=>res.sendFile(path.join(__dirname,'public','contact.html')))

// app.get('/contact',(req,res)=>res.send("My contact Details are...."))

app.post('/contact',(req,res)=>{

})





function myHandler(req,res){
    
    let log = `Reqest From ${req.headers.host} --${req.url} at ${Date.now()}\n`

    fs.appendFile("log.txt", log, (err, data) => {

        if (err) {
            console.log(err)
        } else {
           switch(req.url){
            case '/':
                res.end("Home Page")
                break;
            case '/about':
                
                res.end("About Page of my first website")
                break;
            case '/contact':
                if(req.method=='GET'){
                    res.end("My contact Details are....")
                break;
                }else{
                    const data= req.body
                    // save data in db
                    res.end("I contact u soon")
                }
                
            default:
                res.end("404 Page not found")
           }
        }
    })


}


app.listen(4000,()=>console.log("server started at 4000"))


// const myServer = http.createServer(app)

// myServer.listen(4000, () => {
//     console.log('server started at 4000')
// })


