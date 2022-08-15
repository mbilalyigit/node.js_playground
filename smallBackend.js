const http = require('http')

const server = http.createServer((req, res) => {
    res.write("Welcome to Web Page!")
    res.end()
})

server.listen(4000)