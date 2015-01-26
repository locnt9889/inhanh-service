/**
 * Created by LocNT on 1/27/2015 12:00 AM.
 */

var mysql = require('mysql');
var mysqlDao = require("../daos/MysqlDao");
var mysqlHelper = require("../daos/MysqlHelper");
var message = require('../messages/en').contentMessage;
var constant = require('../public/constant');

var accessTokenModel = require('../models/accessTokenModel');
var TableName = "access_token";
var fieldNameId = "id";

exports.insertAccessToken = function(userId, device_token, access_token){
    console.log(" +++ " + "DAO insert access token ");
    var connection = mysql.createConnection(constant.mysqlInfo);

    var sql_remove_access = constant.sql_script_home.sql_remove_all_token_access_by_user_and_device;
    var sql_insert = constant.sql_script.sql_insert.replace('#table', TableName);

    var newAccessTokenModel = new accessTokenModel.AccessToken();
    newAccessTokenModel.user_id = userId;
    newAccessTokenModel.device_token = device_token;
    newAccessTokenModel.access_token = access_token;

    var sql_insert_param = newAccessTokenModel;
    var sql_remove_access_param = [userId, device_token];
    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ insertAccessToken connect error - " + err);
        }else{
            console.log(" +++ insertAccessToken connect success");
            connection.query(sql_remove_access, sql_remove_access_param, function(err, rows, fields) {
                if (err) {
                    console.log(" +++ remove all access error - " + err);
                }else {
                    console.log(" +++ remove all access success - " + JSON.stringify({results : rows}));
                    connection.query(sql_insert, sql_insert_param, function(err, rows, fields) {
                        if (err) {
                            console.log(" +++ insert new access error - " + err);
                        }else {
                            console.log(" +++ insert new access success - " + JSON.stringify({results : rows}));
                        }
                    });
                    connection.end();
                }
            });
        }
    });
}