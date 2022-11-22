const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer((request, response) => {
    let filepath = path.join(__dirname,'public', request.url === '/home' ? 'index.html' : request.url)
    let contentType = getContentType(filepath) || 'text/html'
    fs.readFile(filepath, 'utf8', (err, data)=>{
        if(err) {
            console.log(err)
        }
        response.writeHead(200, {'Content-Type': contentType})
        response.end(data)
    })
     
})

const getContentType = (filepath) =>{
    let extname = path.extname(filepath)
    if(extname === '.js'){
        return 'text/javascript'
    }
    if(extname === '.css'){
        return 'text/css'
    }
}
const port = 5000
server.listen(port, ()=>{
    console.log('server is listning ')
})