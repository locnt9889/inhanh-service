/**
 * Created by locnt9889 on 12/25/2014.
 */
var mysql = require('mysql');
var moment = require('moment');

var constant = require('../public/constant');
var message = require('../messages/en').inhanhMessage;
var mysqlHelper = require('./MysqlHelper');

var mysqlResponseModel = require('../models/mysqlResponseModel');

//add new
exports.addNew = function(res, tableName, modelObject){
    console.log("-----" + moment().format(constant.formatTime) + " - API findAll : " + tableName);
    var responseModel = new mysqlResponseModel.MysqlResponse();
    var connection = mysql.createConnection(constant.mysqlInfo);

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ addNew connect error - " + err)
            responseModel = mysqlHelper.errorConnection(res, err,connection);
        }else{
            console.log(" +++ addNew connect success");
            //connection.insert(modelObject, )
            //todo
            connection.end();
        }
    });
}

//find all
exports.findAll = function(res, tableName){
    console.log("-----" + moment().format(constant.formatTime) + " - API findAll : " + tableName);
    var responseModel = new mysqlResponseModel.MysqlResponse();
    var connection = mysql.createConnection(constant.mysqlInfo);
    var sql_findall = constant.sql_script.sql_findAll_isactive.replace('#table', tableName);

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ findAll connect success");
            mysqlHelper.query(res, message.functionName.findAll, connection, sql_findall, responseModel);
        }
    });
}

