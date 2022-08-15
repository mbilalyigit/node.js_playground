const EventEmitter = require('events')
const http = require('http')

const server = http.createServer()

server.on('request', (req,rsp) => {
    if(req.url === '/favicon.ico'){
        rsp.end('404')
        return
    }
    console.log(`Christina!`)
    rsp.end('Christina is the love')
})

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`I Love ${name}`)
})
customEmitter.on('response', (name) => {
    console.log(`I Love ${name} More`)
})


customEmitter.emit('response', 'Christina')

server.listen(4000)