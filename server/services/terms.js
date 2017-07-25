var mongojs =  require('mongojs');
var db = mongojs('mongodb://player:pl9y3r@ds133388.mlab.com:33388/clickndraw',['terms']);

var _this = this;

exports.getTerms = function(cb){
    db.terms.find(cb);
};

exports.getTerm = function(id,cb){
    //Obtenemos un termino al azar
    if(id == 'random'){
        _this._getRandomTerm(cb);
    }
    else{
        _this._getOneTerm(id, cb);
    }
};

exports._getOneTerm = function(id,cb){
    db.terms.findOne({_id: mongojs.ObjectId(id)}, function(err, term){
        //llamamos la function definida en el callback
        cb(err, term);
    });
};

exports._getRandomTerm = function(cb){
    db.terms.findAndModify({
        query: { isAvailable : true },
        update: { $set: { isAvailable : false } }
    }, function(err, term){
        if(!term && !err){
            //actualizamos todos los terminos para dejarlos nuevamente disponibles
            _this._resetTerms(cb);
        }
        else{
            cb(err, term);
        }
    });
}

/**
 * Actualiza todos las columnas isAvailable con el valor false
 */
exports._resetTerms = function(cb){
    //actualizamos todos los terminos para dejarlos nuevamente disponibles
    db.terms.update({
        isAvailable: false 
    },{
        $set: { isAvailable: true }
    },{ 
        multi: true 
    }, function(err, terms){
        //obtenemos un nuevo termino aleatoriamente
        db.terms.findAndModify({
            query: { isAvailable : true },
            update: { $set: { isAvailable : false } }
        }, function(err, term){
            cb(err, term);
        });
    });
}

/**
 * CRUD functions
 */

exports.addTerm = function(term, cb){
    db.terms.save(term, function(err, term){
        cb(err, term);
    });
}

exports.updateTerm = function(id, term, cb){
    db.terms.update({_id: mongojs.ObjectId(id)}, term, {}, function(err, updterm){
        cb(err, updterm);
    });
}

exports.removeTerm = function(id, cb){
    db.terms.remove({_id: mongojs.ObjectId(id)}, function(err, term){
        cb(err, term);
    });
}