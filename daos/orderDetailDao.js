/**
 * Created by LocNT on 3/10/2015 12:00 AM.
 */

var mysql = require('mysql');
var mysqlHelper = require("../daos/MysqlHelper");
var mysqlDao = require("../daos/MysqlDao");
var message = require('../messages/en').contentMessage;
var constant = require('../public/constant');
var mysqlResponseModel = require('../models/mysqlResponseModel');

var TableNameOrderDetail = constant.table_name.order_detail;
var fieldNameId = "order_id";

/*
 * @ name : find all
 * @ description : find all order detail
 * @ authen : locnt
 */
exports.findAllOrderDetail = function(res, accessTokenObj, param) {
    mysqlDao.findAll(res, TableNameOrderDetail);
}

/*
 * @ name : create New Order
 * @ description : create new order detail
 * @ authen : locnt
 */
exports.createNewOrder = function(res, accessTokenObj, newOrderObj) {
    newOrderObj.user_id = accessTokenObj.user_id;
    mysqlDao.addNew(res, TableNameOrderDetail, newOrderObj);
}

/*
 * @ name : update Order
 * @ description : create new order detail
 * @ authen : locnt
 */
exports.updateOrder = function(res, accessTokenObj, params) {
    //newOrderObj.user_id = accessTokenObj.user_id;
    mysqlDao.updateById(res, TableNameOrderDetail, fieldNameId, params[0], params[1]);
}

/*
 * @ name : detail Order
 * @ description : get order detail
 * @ authen : locnt
 */
exports.getDetailOrder = function(res, accessTokenObj, params) {
    //newOrderObj.user_id = accessTokenObj.user_id;
    mysqlDao.findById(res, TableNameOrderDetail, fieldNameId, params);
}

/*
 * @ name : order/getAllOrder
 * @ description : get all order by status
 * @ authen : locnt
 * @ param : access_token : access_token
 * @ param : status : order status
 */
exports.getAllOrder = function(res, accessTokenObj, status){
    var connection = mysql.createConnection(constant.mysqlInfo);
    console.log(" +++ " + "DAO getAllOrder : ");
    var sql_get_all_order = constant.sql_script_order.sql_search_all_order_pre;
    var sql_param_get_all_order = [];
    if(status.toUpperCase() !== "ALL"){
        sql_get_all_order += " AND od.status = ?";
        sql_param_get_all_order = [status];
    }

    var actionName = message.functionName.getAllOrder;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ get getAllOrder error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ get getAllOrder connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();
            connection.query(sql_get_all_order, sql_param_get_all_order, function(err, rows, fields) {
                if (err) {
                    console.log(" +++ getAllOrder query error - " + err);
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
                    console.log(" +++ getAllOrder query is successfully - ");
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
 * @ name : order/searchbetweendate
 * @ description : search order between date
 * @ authen : locnt
 * @ param : access_token : access_token
 * @ param : status : order status
 */
exports.searchBetweenDate = function(res, accessTokenObj, param_array){
    var connection = mysql.createConnection(constant.mysqlInfo);
    console.log(" +++ " + "DAO searchAllOrderBetweenDate : ");
    var sql_search_all_order = constant.sql_script_order.sql_search_all_order_pre;
    var sql_param_search_all_order = [];
    if(param_array[0] !== "ALL"){
        sql_search_all_order += " AND od.type = '" + param_array[0] +"'";
    }

    if(param_array[1] !== "ALL"){
        sql_search_all_order += " AND od.transportation = '" + param_array[1] +"'";
    }

    if(param_array[2] !== "0000-00-00"){
        sql_search_all_order += " AND date(od.created_time) >= '" + param_array[2] +"'";
    }

    if(param_array[3] !== "0000-00-00"){
        sql_search_all_order += " AND date(od.created_time) <= '" + param_array[3] +"'";
    }

    var actionName = message.functionName.searchAllOrderBetweenDate;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ get searchAllOrderBetweenDate error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ get searchAllOrderBetweenDate connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();
            connection.query(sql_search_all_order, sql_param_search_all_order, function(err, rows, fields) {
                if (err) {
                    console.log(" +++ getAllOrder query error - " + err);
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
                    console.log(" +++ searchAllOrderBetweenDate query is successfully - ");
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

