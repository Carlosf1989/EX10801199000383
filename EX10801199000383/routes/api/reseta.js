var var express = require ('espress');
var router = express.router();

var resetaaCollection =[];

var resetaStruct ={
    id:0,
    reseta: '',
    precio: '',
    observacion:'',
    estado: ''

}

router.get('/',(req, res, next)=>{
    res.status(200).json(resetaCollection);
    });//get

router.get('/',(req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});

router.post('/',(req, res, next)=>{
    var newreseta = Object.assign(
        {},
        resetaStruct,
        {id:uuid()},
        req.body
        );
        resetaCollection.push(newreseta);
        res.status(200).json(newreseta);
    });//post


router.put('/',(req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});

router.delete('/',(req, res, next)=>{
    res.status(403).json({msg:"not implemented"});
});

module.exports = router;