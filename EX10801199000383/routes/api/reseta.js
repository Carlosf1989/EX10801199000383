var var express = require ('espress');
var router = express.router();
var uuid =require('uuid/v4');
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


    router.put('/:id',(req, res, next)=>{
        var id = req.params.id;
        var modifiedreseta = {};
        var originalreseta = {};
        resetaCollection = resetaCollection.map((e, i)=>{
            if(e.id === id){
                originalreseta =Object.assign({}, e);
                return modifiedreseta = Object.assign({}, e, req.body);
            }
            return e;
        });//map
        res.status(200).json({o: originalreseta, m: modifiedreseta});
    });//put

    router.delete('/:id',(req, res, next)=>{
        var id = req.params.id;
        var deletedreseta = {};
        resetaCollection =resetaCollection.filter((e,i)=>{
            if (e,id === id){
                deletedreseta = Object.assign({},e);
                return false;
            }
            return true;
        });
        res.status(200).json({d:deletedreseta, c:resetaCollection});
    });//delete

module.exports = router;