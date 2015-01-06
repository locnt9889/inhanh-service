/**
 * Created by locnt9889 on 12/25/2014.
 */
var Mongo = require('mongodb');
var ObjectID = Mongo.ObjectID;
var mongoURL = "mongodb://adminservice:qwe123qwe@ds041190.mongolab.com:41190/IbmCloud_555lh56k_47mu49rp";

//add new
exports.addNew = function(res, tableName, modelObject){
    Mongo.connect(mongoURL, function(err, conn) {
        var mongoResponse = new MongoResponse();
        if(err) {
            console.log("log error : " + err);
            mongoResponse.errorsRes = err;
            mongoResponse.errorsMessage = "Connection is fail.";
            mongoResponse.statusErrorRes = 1;
            res.send(mongoResponse);
            return;
        }else {
            console.log("log addNew connection");
            var collection = conn.collection(tableName);

            // create message record
            collection.insert(modelObject, {safe: true}, function (err, result) {

                if (err) {
                    console.log("log addNew error : " + err);
                    mongoResponse.errorsRes = err;
                    mongoResponse.errorsMessage = "Add new is fail.";
                    mongoResponse.statusErrorRes = 1;
                } else {
                    console.log("log addNew success");
                    mongoResponse.result = result;
                    mongoResponse.statusErrorRes = 0;
                }

                res.send(mongoResponse);
            });
        }
    });
}

//find all
exports.findAll = function(res, tableName){
    Mongo.connect(mongoURL, function(err, conn) {
        var mongoResponse = new MongoResponse();
        if(err) {
            console.log("log error : " + err);
            mongoResponse.errorsRes = err;
            mongoResponse.errorsMessage = "Connection is fail.";
            mongoResponse.statusErrorRes = 1;
            res.send(mongoResponse);
            return;
        }else {
            console.log("log findAll connection");
            var collection = conn.collection(tableName);

            // list messages
            collection.find({}, {limit: 10, sort: [['_id', 'desc']]}, function (err, cursor) {
                if(err) {
                    console.log("log findAll conenction error : " + err);
                    mongoResponse.errorsRes = err;
                    mongoResponse.errorsMessage = "Find All is fail.";
                    mongoResponse.statusErrorRes = 1;
                    return;
                }else {
                    cursor.toArray(function (err, items) {
                        if (err) {
                            console.log("log findAll toArray error : " + err);
                            mongoResponse.errorsMessage = "Find All is fail.";
                            mongoResponse.errorsRes = err;
                            mongoResponse.statusErrorRes = 1;
                        }else if(!items){
                            console.log("log toArray error : " + err);
                            mongoResponse.errorsMessage = "Find All no has result.";
                            mongoResponse.statusErrorRes = 2;
                        } else {
                            console.log("log toArray success");
                            mongoResponse.result = items;
                            mongoResponse.statusErrorRes = 0;
                        }
                        res.send(mongoResponse);
                    });
                }
            });
        }
    });
}

//find by id
exports.findById = function(res, tableName,id){
    Mongo.connect(mongoURL, function(err, conn) {
        var mongoResponse = new MongoResponse();
        if(err) {
            console.log("log findById connection error : " + err);
            mongoResponse.errorsRes = err;
            mongoResponse.errorsMessage = "Connection is fail.";
            mongoResponse.statusErrorRes = 1;
            res.send(mongoResponse);
            return;
        }else {
            console.log("log findById connection");
            var collection = conn.collection(tableName);
            var objectId = new ObjectID(id);

            // list messages
            collection.findOne({"_id" : objectId}, function (err, result) {
                if(err) {
                    console.log("log findById error : " + err);
                    mongoResponse.errorsRes = err;
                    mongoResponse.errorsMessage = "Find One is fail.";
                    mongoResponse.statusErrorRes = 1;
                }else if(!result){
                    console.log("log findById no result");
                    mongoResponse.errorsMessage = "No has result!";
                    mongoResponse.statusErrorRes = 2;
                }else {
                    console.log("log findById success");
                    mongoResponse.result = result;
                    mongoResponse.statusErrorRes = 0;
                }
                res.send(mongoResponse);
            });
        }
    });
}

/*person dto ajax*/
function MongoResponse(){
    this.errorsRes = {};
    this.errorsMessage = "";
    this.result = {};
    this.statusErrorRes = 0;
};

exports.newMongoResponse = function(){
    return new MongoResponse();
}
