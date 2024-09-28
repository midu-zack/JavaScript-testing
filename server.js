const express = require('express')

const app = express()
const port = 3000


app.get('/',(req,res)=>{
    res.send("hellooo world")
})



app.listen(port,()=>{
    console.log(`working on localhost:${port}`);
    
})