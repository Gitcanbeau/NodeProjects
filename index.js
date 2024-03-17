

const express = require('express');
const app = express();
const PORT = 8080;

// Define a route to handle incoming requests
app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to YouTube Music');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});














// ----------------不用express的话----------------------------------------------------//
// const http = require('http');


// // 创建 HTTP 服务器
// const server = http.createServer((req, res) => {
    

//     //res.setHeader('Content-Type', 'text/plain');
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     // use Express.js framework to set headers
//     //res.set('Content-Type', 'text/plain');
    
   


//     // 发送响应数据 and end the response process
//     res.end('Welcome to YouTube Music\n');
//     // use Express.js framework to send txt message
//     //res.send('Welcome to YouTube Music');
//     // use Express.js framework to send json message
//     //res.json({ message: 'Welcome to YouTube Music' });
//     // use Express.js framework to send file
//     //res.sendFile('/path/to/file.html');
// });

// // 监听端口 8080
// const PORT = 8080;
// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });
