const gateway = require('fast-gateway');

const auth = (req, res, next) => {
    if (req.headers.token && req.headers.token != "") {
        next()
    } else {
        res.statusCode = 401;
        res.send({ message: "Token required" })
    }
}

const server = gateway({
    middlewares: [auth],
    routes: [
        {
            prefix: '/students',
            target: 'http://127.0.0.1:3001'
        },
        {
            prefix: '/users',
            target: 'http://127.0.0.1:3002',
            methods: ['GET', 'POST']
        }
    ]
})

server.get('/', (req, res) => {
    res.statusCode = 200;
    res.send({ message: "Api gateway called successfully." });
})

server.start(3000).then(server => {
    console.log("Server starting at port 3000");
})