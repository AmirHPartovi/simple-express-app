const express = require('express');

const app = express();

const PORT = 3000;

const friends=[
    {
        id:0,
        name:'amir'
    },
    {
        id:1,
        name:'mohammad'
    },
    {
        id:2,
        name:'mahdi'
    },
    {
        id:3,
        name:'ali'
    },
]
app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now()-start;
    console.log(`method:${req.method} , url:${req.url} , time:${delta} ms`);
})
app.use(express.json())

const friendsRouter =express.Router();
app.use('/friends',friendsRouter);

friendsRouter.get('/',(req,res)=>{
    res.statusCode = 200 ;
    res.json(friends);
})

friendsRouter.get('/:friendId',(req,res)=>{
    const id = +req.params.friendId;
    const friend = friends[id];
    if(friend){
        res.statusCode =200;
        res.json(friend);
    }else{
        res.statusCode=404;
        res.json({error:'user not found...'})
    }
})
friendsRouter.post('/',(req,res)=>{
    
    if(!req.body?.name){
        res.status(400).json({error : 'missing name ...'});
        console.log(req)
    }else{
        const newFriend ={
            id:friends.length,
            name : req.body.name
        };
        friends.push(newFriend);
        res.json(friends);
    }
})
const messagesRouter = express.Router();
app.use('/messages',messagesRouter);
messagesRouter.get('/',(req,res)=>{
    res.send('<ul><li>hello every one ... </li></ul>')
})
messagesRouter.post('/',(req,res)=>{
    res.send('messages posted...')
})


app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}...`)
})