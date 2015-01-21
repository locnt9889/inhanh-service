/**
 * Created by locnt9889 on 1/20/2015.
 */
var mysqlResponseModel = require('../models/mysqlResponseModel');
var message = require('../messages/en').inhanhMessage;

/*
 * @ name : errorConnection
 * @ description : do action when error with connection db
 * @ authen : locnt
 * @ param : res - response to client
 * @ param : err - error object
 * @ param : connection - connection object
 */
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

/*
 * @ name : query
 * @ description : execute query
 * @ authen : locnt
 * @ param : res - response to client
 * @ param : actionName - action Name is used for log
 * @ sql_query : sql query
 * @ sql_param : sql param
 * @ param : connection - connection object
 */
function query(res, actionName, connection, sql_query, sql_param){
    var responseModel = new mysqlResponseModel.MysqlResponse();
    connection.query(sql_query, sql_param, function(err, rows, fields) {
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