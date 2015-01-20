/**
 * Created by locnt9889 on 1/20/2015.
 */
var mysqlResponseModel = require('../models/mysqlResponseModel');

//error connection
function errorConnection(res, err, connection){
    var responseModel = new mysqlResponseModel.MysqlResponse();
    responseModel.errorsObject = {
        code : err.code,
        errno : err.errno,
        message : err.message,
        sqlState : err.sqlState
    };
    responseModel.errorsMessage = message.errorConnectionDB;
    responseModel.results = {};
    responseModel.statusErrorCode = 100;

    connection.end();
    res.send(responseModel);
}

//query
function query(res, actionName, connection, sql_query, responseModel){
    var responseModel = new mysqlResponseModel.MysqlResponse();
    connection.query(sql_query, function(err, rows, fields) {
        if (err) {
            console.log(" +++ query error - " + err);
            responseModel.errorsObject = {
                code : err.code,
                errno : err.errno,
                message : err.message,
                sqlState : err.sqlState
            };
            responseModel.errorsMessage = message.errorQuery.replace('#1',actionName);
            responseModel.results = {};
            responseModel.statusErrorCode = 1;

            res.send(responseModel);
        }else {
            console.log(" +++ query success - " + JSON.stringify({results : rows}));
            responseModel.results = rows;
            responseModel.statusErrorCode = 0;
            res.send(responseModel);
        }
    });
    connection.end();
}


/*Exports method*/
exports.errorConnection = errorConnection;
exports.query = query;