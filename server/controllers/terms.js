var express = require('express');
var router = express.Router();
var termsService = require('../services/terms')
var mongojs =  require('mongojs');

//Get All terms
router.get('/', function(req, res, next){
    termsService.getTerms(function(err, term){
        if(err){
            res.send(err);
        }
        res.json(term);
    });
});

//Get Single term
router.get('/:id', function(req, res, next){
    termsService.getTerm(req.params.id, function(err, term){
        if(err){
            res.send(err);
        }
        res.json(term);
    });
});


//router.get('/', function(req, res, next){

    /*
    //primero ejecutar el query sin considerar que no existen teminos disponibles, para en un video posterior explicar la mejora
    db.terms.findAndModify({
        query: { isAvailable : true },
        update: { $set: { isAvailable : false } }
    },function(err, term){
        if(err){
            res.send(err);
        }
        else{
            res.json(term);
        }
    });
    */
  
//});

//Save term
router.post('/', function(req, res, next){
    var term = req.body;
    if(!term.text || !(term.isAvailable + '')){
        res.status(400);
        res.json({
            "error": "Bad data"
        })
    }else{
        termsService.addTerm(term, function(err, term){
            if(err){
                res.send(err);
            }
            res.json(term);
        });
    }

})

//Delete term
router.delete('/:id', function(req, res, next){
    termsService.removeTerm(req.params.id, function(err, term){
        if(err){
            res.send(err);
        }
        res.json(term);
    });
});

//Update term
router.put('/:id', function(req, res, next){
    var term = req.body;
    var updterm = {};

    if(term.isAvailable){
        updterm.isAvailable = term.isAvailable;
    }

    if(term.text){
        updterm.text = term.text;
    }

    if(!updterm){
        res.status(400);
        res.json({
            "error": "Bad data"
        });
    }else{
        termsService.updateTerm(req.params.id, updterm, function(err, term){
            if(err){
                res.send(err);
            }
            res.json(term);
        });
    }
});

module.exports = router;