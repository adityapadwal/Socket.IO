// Importing modules
const express = require("express");
const http = require("http");
const path = require("path");
const {Server} = require("socket.io");

// Creating an instance of the express application
const app = express();
// Creating http server
const server = http.createServer(app);

// Creating a new Web-socket server
const io = new Server(server);

// Socket.io
// Establishing a socket.io connection
io.on("connection", (socket) => {
    console.log("Server Web sockets connection established! ");
    // Receiving msgs from the client
    socket.on("client-message", (message) => {
        console.log("Server: Receicved following message from client ", message);
        // After receiving msg from the client, server sends this msgs to all the clients
        console.log("Server: Sending following message to all the clients ", message);
        io.emit('server-message', message);
    })
})

// Serving static files
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
    return res.sendFile("./public/index.html");
});

// Listening on port 9000
server.listen(9000, () => {
    console.log("Server started at port 9000");
});
