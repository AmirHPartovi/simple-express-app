const express = require('express');

const app = express();

const PORT = 3000;

const messagesRouter = require('./router/messages.router');
const friendsRouter = require('./router/friends.router');

app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now()-start;
    console.log(`method:${req.method} , url:${req.url} , time:${delta} ms`);
})
app.use(express.json())

app.use('/friends',friendsRouter);

app.use('/messages',messagesRouter);



app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}...`)
})