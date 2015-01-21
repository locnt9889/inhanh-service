/**
 * Created by locnt9889 on 12/25/2014.
 */
var mysql = require('mysql');

var constant = require('../public/constant');
var message = require('../messages/en').inhanhMessage;
var mysqlHelper = require('./MysqlHelper');

var mysqlResponseModel = require('../models/mysqlResponseModel');

//add new generic
exports.addNew = function(res, tableName, modelObject){
    console.log(" +++ " + "DAO add new : " + tableName);
    var responseModel = new mysqlResponseModel.MysqlResponse();
    var connection = mysql.createConnection(constant.mysqlInfo);
    var sql_insert = constant.sql_script.sql_insert.replace('#table', tableName);
    var sql_param = modelObject;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ addNew connect error - " + err)
            responseModel = mysqlHelper.errorConnection(res, err,connection);
        }else{
            console.log(" +++ addNew connect success");
            mysqlHelper.query(res, message.functionName.addNew, connection, sql_insert, sql_param, responseModel);
        }
    });
}

//find all generic
exports.findAll = function(res, tableName){
    console.log(" +++ " + "DAO findAll : " + tableName);
    var responseModel = new mysqlResponseModel.MysqlResponse();
    var connection = mysql.createConnection(constant.mysqlInfo);
    var sql_findall = constant.sql_script.sql_findAll_isactive.replace('#table', tableName);
    var sql_param = [];
    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ findAll connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ findAll connect success");
            mysqlHelper.query(res, message.functionName.findAll, connection, sql_findall, sql_param, responseModel);
        }
    });
}

//find by id
exports.findById = function(res, tableName,id){
    console.log(" +++ " + "DAO find by id "+ id +" : " + tableName);
    var responseModel = new mysqlResponseModel.MysqlResponse();
    var connection = mysql.createConnection(constant.mysqlInfo);
    var sql_findall = constant.sql_script.sql_findById_isactive.replace('#table', tableName);
    var sql_param = [id];
    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ find by id connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ find by id connect success");
            mysqlHelper.query(res, message.functionName.findById, connection, sql_findall, sql_param, responseModel);
        }
    });
}

/*
 * remove by id
 * change isactive = 0
*/
exports.removeById = function(res, tableName,id){
    console.log(" +++ " + "DAO remove by id "+ id +" : " + tableName);
    var responseModel = new mysqlResponseModel.MysqlResponse();
    var connection = mysql.createConnection(constant.mysqlInfo);
    var sql_findall = constant.sql_script.sql_removeById.replace('#table', tableName);
    var sql_param = [id];
    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ remove by id connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ remove by id connect success");
            mysqlHelper.query(res, message.functionName.findById, connection, sql_findall, sql_param, responseModel);
        }
    });
}

