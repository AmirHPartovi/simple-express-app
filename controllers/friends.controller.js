const friends = require('../models/friends.model')

const getAllFriends=(req,res)=>{
    res.statusCode = 200 ;
    res.json(friends);
};

const getOneFriends = (req,res)=>{
    const id = +req.params.friendId;
    const friend = friends[id];
    if(friend){
        res.statusCode =200;
        res.json(friend);
    }else{
        res.statusCode=404;
        res.json({error:'user not found...'})
    }
};

const postNewFriends=(req,res)=>{
    
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
};

module.exports={
    getAllFriends,
    getOneFriends,
    postNewFriends
}