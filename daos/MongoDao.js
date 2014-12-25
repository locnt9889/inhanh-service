/**
 * Created by locnt9889 on 12/25/2014.
 */
var Mongo = require('mongodb');
var mongoURL = "mongodb://adminservice:qwe123qwe@ds041190.mongolab.com:41190/IbmCloud_555lh56k_47mu49rp";
exports.addNew = function(res, tableName, modelObject){
    Mongo.connect(mongoURL, function(err, conn) {
        var collection = conn.collection(tableName);

        // create message record
        collection.insert(modelObject, {safe:true}, function(err,result){
            var mongoResponse = new MongoResponse();
            if(err) {
                console.log("log error : " + err);
                mongoResponse.errorsRes = err;
                mongoResponse.statusErrorRes = 1;
            }else{
                console.log("log connection");
                mongoResponse.result = result;
                mongoResponse.statusErrorRes = 0;
            }

            res.send(mongoResponse);
        });
    });
}

/*person dto ajax*/
function MongoResponse(){
    this.errorsRes = {};
    this.result = {};
    this.statusErrorRes = 0;
};

exports.newMongoResponse = function(){
    return new MongoResponse();
}
