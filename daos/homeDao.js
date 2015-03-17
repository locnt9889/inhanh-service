/**
 * Created by locnt9889 on 12/25/2014.
 */

var mysql = require('mysql');
var mysqlDao = require("../daos/MysqlDao");
var mysqlHelper = require("../daos/MysqlHelper");
var mysqlResponseModel = require('../models/mysqlResponseModel');
var message = require('../messages/en').contentMessage;
var constant = require('../public/constant');
var commonService = require('../services/commonService');
var accessTokenDao = require('./accessTokenDao');
var TableNameAccount = constant.table_name.account;
var fieldNameId = "id";

var TableNameUserContactDetail = constant.table_name.user_contact;

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

    var sql_check_email_exist = constant.sql_script_home.sql_check_email_exist;
    var sql_param_check_email_exist = [newAccount.email];

    var sql_check_username_exist = constant.sql_script_home.sql_check_username_exist;
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
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    connection.end();
                    res.send(responseModel);
                } else {
                    if(rows.length > 0){
                        console.log(" +++ register check username was exist - " + err);
                        responseModel.errorsObject = {};
                        responseModel.errorsMessage = message.registerUsernameExist;
                        responseModel.results = {};
                        responseModel.statusErrorCode = constant.error_code.error_check_register_username;
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
                                responseModel.statusErrorCode = constant.error_code.error_system_query;
                                connection.end();
                                res.send(responseModel);
                            } else {
                                if (rows.length > 0) {
                                    console.log(" +++ register check email was exist - " + err);
                                    responseModel.errorsObject = {};
                                    responseModel.errorsMessage = message.registerEmailExist;
                                    responseModel.results = {};
                                    responseModel.statusErrorCode = constant.error_code.error_check_register_email;
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
                                            responseModel.statusErrorCode = constant.error_code.error_system_query;
                                            res.send(responseModel);
                                        } else {
                                            console.log(" +++ register success - " + JSON.stringify({results: rows}));
                                            responseModel.results = rows;
                                            responseModel.statusErrorCode = constant.error_code.success;
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
 * @ name : login
 * @ description : login with isactive == 1
 * @ authen : locnt
 * @ param : res - response to client
 * @ param : tableName - table name
 * @ param : id - id of object
 */
exports.login = function(res, username, password, device_token){
    console.log(" +++ " + "DAO Login ");
    var connection = mysql.createConnection(constant.mysqlInfo);
    var sql_check_login = constant.sql_script_home.sql_check_login;
    var sql_param = [username, password];
    var actionName = message.functionName.findById;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ Login connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ Login connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();
            connection.query(sql_check_login, sql_param, function(err, rows, fields) {
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
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    connection.end();
                    res.send(responseModel);
                }else if(rows.length == 0){
                    console.log(" +++ login fail ");
                    responseModel.errorsMessage = message.login_fail;
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.error_check_login;
                    connection.end();
                    res.send(responseModel);
                }else {
                    console.log(" +++ query success - " + JSON.stringify({results : rows}));
                    var access_token = commonService.generateAccessToken();
                    var userId = rows[0].id;
                    responseModel.results = {
                        access_token : access_token,
                        id : rows[0].id,
                        type : rows[0].type,
                        group_id : rows[0].group_id,
                        group_mode : rows[0].group_mode,
                        isupdate : rows[0].isupdate
                    };
                    responseModel.statusErrorCode = constant.error_code.success;

                    //insert access token
                    accessTokenDao.insertAccessToken(userId, device_token, access_token);
                    connection.end();
                    res.send(responseModel);
                }
            });
        }
    });
}

/*
 * @ name : findAccountById
 * @ description : find object by id with isactive == 1
 * @ authen : locnt
 * @ param : res - response
 * @ param : accessTokenObj - object get from access token
 * @ param : param
 */
exports.findAccountById = function(res, accessTokenObj, param){
    var connection = mysql.createConnection(constant.mysqlInfo);
    console.log(" +++ " + "DAO find by id "+ accessTokenObj.user_id +" : " + TableNameAccount);
    var sql_findbyid = constant.sql_script.sql_findById_isactive.replace('#table', TableNameAccount).replace('#id', fieldNameId);
    var sql_param = [accessTokenObj.user_id];
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
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else {
                    if(rows.length > 0){
                        rows[0].password = "******";
                    }
                    console.log(" +++ query success - " + JSON.stringify({results : rows}));
                    responseModel.results = rows;
                    responseModel.statusErrorCode = constant.error_code.success;
                    res.send(responseModel);
                }
            });
            connection.end();
        }
    });
}

/*
 * @ name : update profile
 * @ description : update account, no update email, username,id,create_date,isreview,isactive
 * @ authen : locnt
 * @ param : res - response to client
 * @ param : id - id of object
 */
exports.updateProfile = function(res, accessTokenObj, updateAccount) {
    mysqlDao.updateById(res, TableNameAccount, fieldNameId, updateAccount, accessTokenObj.user_id);
}

/*
 * @ name : changePassword
 * @ description : changePassword
 * @ authen : locnt
 * @ param : res - response
 * @ param : accessTokenObj - object get from access token
 * @ param : param
 */
exports.changePassword = function(res, accessTokenObj, param){
    var connection = mysql.createConnection(constant.mysqlInfo);
    console.log(" +++ " + "DAO changePassword "+ accessTokenObj.user_id +" : ");
    var sql_check_oldpass = constant.sql_script_home.sql_check_oldpassword;
    var sql_param_check_oldpass = [accessTokenObj.user_id, param.old_password];
    var actionName = message.functionName.chang_password;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ find by id connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ find by id connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();
            connection.query(sql_check_oldpass, sql_param_check_oldpass, function(err, rows, fields) {
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
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else if(rows.length == 0){
                    console.log(" +++  old password is incorrect - ");
                    responseModel.errorsObject = {};
                    responseModel.errorsMessage = message.error_check_oldpassword;
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.error_check_oldpassword;
                    res.send(responseModel);
                }else {
                    mysqlDao.updateById(res, TableNameAccount, fieldNameId, {password : param.new_password}, accessTokenObj.user_id);
                }
            });
            connection.end();
        }
    });
}

/*
 * @ name : home/searchaccount
 * @ description : search account
 * @ authen : locnt
 * @ param : type : account type
 * @ param : text_search : text for search
 * @ param : access_token : access_token
 */
exports.searchAccount = function(res, accessTokenObj, param){
    var connection = mysql.createConnection(constant.mysqlInfo);
    console.log(" +++ " + "DAO searchAccount : ");
    var sql_search_account = constant.sql_script_home.sql_search_account;
    var sql_param_search_account = [];

    if(param.type !== "ALL" ){
        sql_search_account = sql_search_account + " AND type = '" + param.type + "'";
    }

    if(param.text_search !== ""){
        sql_search_account = sql_search_account + " AND (CONCAT(firstname,' ', lastname) LIKE ? OR username LIKE ?)";
        var textSearchLike = "%" + param.text_search + "%";
        sql_param_search_account = [textSearchLike,textSearchLike];
    }

    var actionName = message.functionName.searchAccount;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ search account connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ search account connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();
            connection.query(sql_search_account, sql_param_search_account, function(err, rows, fields) {
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
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else {
                    console.log(" +++ query is successfully - ");
                    for(i = 0; i < rows.length; i ++){
                        rows[i].password = "******";
                    }
                    responseModel.errorsObject = {};
                    responseModel.errorsMessage = "";
                    responseModel.results = rows;
                    responseModel.statusErrorCode = constant.error_code.success;
                    res.send(responseModel);
                }
            });
            connection.end();
        }
    });
}

/*
 * @ name : home/addContact
 * @ description : add account to contact
 * @ authen : locnt
 * @ param : account_id : ic of contact
 * @ param : access_token : access_token
 */
exports.addContact = function(res, accessTokenObj, newContactObj){
    newContactObj.user_id = accessTokenObj.user_id;
    mysqlDao.addNew(res, TableNameUserContactDetail, newContactObj);
}

/*
 * @ name : home/getcontact
 * @ description : get contact by id
 * @ authen : locnt
 * @ param : access_token : access_token
 */
exports.getContact = function(res, accessTokenObj, param){
    var connection = mysql.createConnection(constant.mysqlInfo);
    console.log(" +++ " + "DAO searchAccount : ");
    var sql_get_contact = constant.sql_script_home.sql_get_contact_by_id;
    var sql_param_get_contact = [accessTokenObj.user_id];

    var actionName = message.functionName.getContact;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ get contact connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ get connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();
            connection.query(sql_get_contact, sql_param_get_contact, function(err, rows, fields) {
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
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else {
                    console.log(" +++ query is successfully - ");
                    for(i = 0; i < rows.length; i ++){
                        rows[i].password = "******";
                    }
                    responseModel.errorsObject = {};
                    responseModel.errorsMessage = "";
                    responseModel.results = rows;
                    responseModel.statusErrorCode = constant.error_code.success;
                    res.send(responseModel);
                }
            });
            connection.end();
        }
    });
}