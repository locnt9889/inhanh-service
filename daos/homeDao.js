/**
 * Created by locnt9889 on 12/25/2014.
 */

var mysql = require('mysql');
var mysqlDao = require("../daos/MysqlDao");
var mysqlHelper = require("../daos/MysqlHelper");
var mysqlResponseModel = require('../models/mysqlResponseModel');
var message = require('../messages/en').contentMessage;

var constant = require('../public/constant');
var TableNameAccount = constant.table_name.account;
var fieldNameId = "id";

/*
 * @ name : register account
 * @ description : register account, check exist email, username
 * @ authen : locnt
 * @ param : res - response to client
 * @ param : id - id of object
 */
exports.register = function(res, newAccount){
    console.log(" +++ " + "DAO register ");

    var connection = mysql.createConnection(constant.mysqlInfo);
    var sql_register = constant.sql_script.sql_insert.replace('#table', TableNameAccount);
    var sql_param_register = newAccount;

    var sql_check_email_exist = constant.sql_script.sql_check_email_exist;
    var sql_param_check_email_exist = [newAccount.email];

    var sql_check_username_exist = constant.sql_script.sql_check_username_exist;
    var sql_param_check_username_exist = [newAccount.username];

    var actionName = message.functionName.register;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ register connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ register connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();

            //check username exist
            connection.query(sql_check_username_exist, sql_param_check_username_exist, function(err, rows, fields) {
                if (err) {
                    console.log(" +++ register check username error - " + err);
                    responseModel.errorsObject = {
                        code: err.code,
                        errno: err.errno,
                        message: err.message,
                        sqlState: err.sqlState
                    };
                    responseModel.errorsMessage = message.errorQuery.replace('#1', actionName);
                    responseModel.results = {};
                    responseModel.statusErrorCode = 1;
                    connection.end();
                    res.send(responseModel);
                } else {
                    if(rows.length > 0){
                        console.log(" +++ register check username was exist - " + err);
                        responseModel.errorsObject = {};
                        responseModel.errorsMessage = message.registerUsernameExist;
                        responseModel.results = {};
                        responseModel.statusErrorCode = 2;
                        connection.end();
                        res.send(responseModel);
                    }else {

                        //check email exist
                        connection.query(sql_check_email_exist, sql_param_check_email_exist, function(err, rows, fields) {
                            if (err) {
                                console.log(" +++ register check email error - " + err);
                                responseModel.errorsObject = {
                                    code: err.code,
                                    errno: err.errno,
                                    message: err.message,
                                    sqlState: err.sqlState
                                };
                                responseModel.errorsMessage = message.errorQuery.replace('#1', actionName);
                                responseModel.results = {};
                                responseModel.statusErrorCode = 1;
                                connection.end();
                                res.send(responseModel);
                            } else {
                                if (rows.length > 0) {
                                    console.log(" +++ register check email was exist - " + err);
                                    responseModel.errorsObject = {};
                                    responseModel.errorsMessage = message.registerEmailExist;
                                    responseModel.results = {};
                                    responseModel.statusErrorCode = 2;
                                    connection.end();
                                    res.send(responseModel);
                                } else {

                                    //install
                                    connection.query(sql_register, sql_param_register, function (err, rows, fields) {
                                        if (err) {
                                            console.log(" +++ register error - " + err);
                                            responseModel.errorsObject = {
                                                code: err.code,
                                                errno: err.errno,
                                                message: err.message,
                                                sqlState: err.sqlState
                                            };
                                            responseModel.errorsMessage = message.errorQuery.replace('#1', actionName);
                                            responseModel.results = {};
                                            responseModel.statusErrorCode = 1;
                                            res.send(responseModel);
                                        } else {
                                            console.log(" +++ register success - " + JSON.stringify({results: rows}));
                                            responseModel.results = rows;
                                            responseModel.statusErrorCode = 0;
                                            res.send(responseModel);
                                        }
                                    });
                                    connection.end();
                                }
                            }
                        });
                    }
                }
            });
        }
    });
}

/*
 * @ name : findAccountById
 * @ description : find object by id with isactive == 1
 * @ authen : locnt
 * @ param : res - response to client
 * @ param : tableName - table name
 * @ param : id - id of object
 */
exports.findAccountById = function(res, id){
    console.log(" +++ " + "DAO find by id "+ id +" : " + TableNameAccount);
    var connection = mysql.createConnection(constant.mysqlInfo);
    var sql_findbyid = constant.sql_script.sql_findById_isactive.replace('#table', TableNameAccount).replace('#id', fieldNameId);
    var sql_param = [id];
    var actionName = message.functionName.findById;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ find by id connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ find by id connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();
            connection.query(sql_findbyid, sql_param, function(err, rows, fields) {
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
                    if(rows.length > 0){
                        rows[0].password = "******";
                    }
                    console.log(" +++ query success - " + JSON.stringify({results : rows}));
                    responseModel.results = rows;
                    responseModel.statusErrorCode = 0;
                    res.send(responseModel);
                }
            });
            connection.end();
        }
    });
}

