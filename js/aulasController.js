const ObjectID = require('mongodb').ObjectID;
exports.assistir =  (req, res) =>{
    req.db.collection('aulas').find().toArray((err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });

};


exports.enviar =  (req,res) =>{
    req.db.collection('aulas').insert(req.body, (err, result) => {
        if(err){
            res.send(err);
        }
        else{
            res.sendStatus(201);
        }
});
    
};