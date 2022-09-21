const { WebSocketServer, OPEN } = require('ws')

const server = new WebSocketServer({ port: 8080 })

server.on('connection', (sock) => {
    sock.on('message', (data) => {
        console.log(data)
        server.clients.forEach(client => {
            if (client !== sock && client.readyState === OPEN) {
                client.send(data)
            }
        })
    })
})

process.on('SIGINT', () => {
    process.exit(0)
})
