const http = require('http')

// create server 

const server = http.createServer((req,res)=>{
    res.end('Hello world')
})

const port = 5000 
 
server.listen(port,()=>{
    console.log(`server running in ${port}`);
    
})