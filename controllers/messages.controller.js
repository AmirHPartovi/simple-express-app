const getMessages=(req,res)=>{
    res.send('<ul><li>hello every one ... </li></ul>')
};
const postMessages=(req,res)=>{
    res.send('messages posted...')
}

module.exports ={
    getMessages,
    postMessages
}