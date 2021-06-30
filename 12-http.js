const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/error'){
        res.end('Here is out short history')
    }
    res.end(
        `<h1>azeem</h1>
        <p>ok I am good thinker and good rich man</p>
        <a href="/">back page</a>`

    )
})
server.listen(5000)