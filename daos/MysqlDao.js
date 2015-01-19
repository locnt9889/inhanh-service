/**
 * Created by locnt9889 on 12/25/2014.
 */
var mysql = require('mysql');
var moment = require('moment');
var constant = require('../public/constant');
var commonService = require('../services/commonService');
var mysqlResponseModel = require('../models/mysqlResponseModel');

//add new
exports.addNew = function(res, tableName, modelObject){

}

//find all
exports.findAll = function(res, tableName){
    console.log("-----" + moment().format(constant.formatTime) + " - API findAll : " + tableName);
    var responseModel = new mysqlResponseModel.MysqlResponse();
    var connection = mysql.createConnection(constant.mysqlInfo);
    var sql_findall = "SELECT * from " + tableName;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ findAll connect error - " + err);
            responseModel.errorsObject = {
                code : err.code,
                errno : err.errno,
                message : err.message,
                sqlState : err.sqlState
            };
            responseModel.errorsMessage = "Connection to Database is failure!";
            responseModel.results = {};
            responseModel.statusErrorCode = 100;

            connection.end();
            res.send(responseModel);
        }else{
            console.log(" +++ findAll connect success");
            connection.query(sql_findall, function(err, rows, fields) {
                if (err) {
                    console.log(" +++ findAll query error - " + err);
                    responseModel.errorsObject = {
                        code : err.code,
                        errno : err.errno,
                        message : err.message,
                        sqlState : err.sqlState
                    };
                    responseModel.errorsMessage = "FindAll query is failure!";
                    responseModel.results = {};
                    responseModel.statusErrorCode = 1;

                    res.send(responseModel);
                }else {
                    console.log(" +++ findAll query success - " + JSON.stringify({results : rows}));
                    responseModel.results = rows;
                    responseModel.statusErrorCode = 0;
                    res.send(responseModel);
                }
            });
            connection.end();
        }
    })
}
