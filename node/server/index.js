import express from 'express';
import { Server } from 'socket.io'
import { createServer } from 'http';
const app = express();
const server = createServer(app);
const io = new Server(server
    , {
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true
        }

    });
const port = 8080;


app.get('/', (req, res) => {
    res.send('Hello World');
});

let users = [];
io.on('connection', (socket) => {
    users.push(socket.id);

    console.log('a user connected', socket.id);
    console.log(users);
    socket.on('sent', data => {
        console.log(data);
        io.emit('message', data);
    });

    socket.on('disconnect', () => {
        users = users.filter(user => user !== socket.id);
        console.log('a user disconnected', socket.id);
        console.log(users);
    });
});


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});