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
    //mysqlDao.findById(res, TableNameOrderDetail, fieldNameId, params);
    console.log(" +++ " + "DAO find by id "+ params +" : " + TableNameOrderDetail);
    var connection = mysql.createConnection(constant.mysqlInfo);
    //var sql_findbyid = constant.sql_script.sql_findById_isactive.replace('#table', TableNameOrderDetail).replace("#id",fieldNameId);
    var sql_findbyid = constant.sql_script_order.sql_get_order_detail;
    var sql_param = [params];
    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ find by id connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ find by id connect success");
            //mysqlHelper.query(res, message.functionName.findById, connection, sql_findbyid, sql_param);
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
                    responseModel.errorsMessage = message.errorQuery.replace('#1',message.functionName.findById);
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else {
                    console.log(" +++ query success - " + JSON.stringify({results : rows}));
                    //responseModel.results = rows;
                    responseModel.statusErrorCode = constant.error_code.success;
                    if(rows.length == 0){
                        responseModel.results = rows;
                        responseModel.results.order_ship_id = 0;
                        res.send(responseModel);
                    }else {
                        responseModel.results = rows[0];
                        var sqlGetShippingIdByShipperAndOrder = constant.sql_script_order.sql_get_shipping_id_by_shipper_and_order;
                        var connection = mysql.createConnection(constant.mysqlInfo);
                        connection.query(sqlGetShippingIdByShipperAndOrder, [responseModel.results.order_id, accessTokenObj.user_id], function (err, rows1, fields) {
                            if (err) {
                                console.log(" +++ query error - " + err);
                                responseModel.errorsObject = {
                                    code: err.code,
                                    errno: err.errno,
                                    message: err.message,
                                    sqlState: err.sqlState
                                };
                                var actionGetShippingInfo = message.functionName.get_shipping_info;
                                responseModel.errorsMessage = message.errorQuery.replace('#1', actionGetShippingInfo);
                                responseModel.results = {};
                                responseModel.statusErrorCode = constant.error_code.error_system_query;
                                res.send(responseModel);
                            } else {
                                console.log(" +++ getShippingInfo query is successfully - ");
                                responseModel.errorsObject = {};
                                responseModel.errorsMessage = "";
                                responseModel.results.order_ship_id = rows1.length > 0 ? rows1[0].order_ship_id : 0;
                                responseModel.statusErrorCode = constant.error_code.success;

                                res.send(responseModel);
                            }
                        });
                        connection.end();
                    }
                }
            });
            connection.end();
        }
    });
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

    if(accessTokenObj.user_type == "SHOPPER"){
        sql_get_all_order += " AND od.user_id = " + accessTokenObj.user_id;
    }else{
        sql_get_all_order += " AND od.shipper_id = " + accessTokenObj.user_id;
    }

    var sql_param_get_all_order = [];
    if(status.toUpperCase() == "EXPIREDATE"){
        sql_get_all_order += " AND od.order_date_expired < ?";
        sql_param_get_all_order = [new Date()];
    }
    if(status.toUpperCase() !== "ALL" && status.toUpperCase() == "EXPIREDATE"){
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

/*
 * @ name : order/getOrderNoBidByCity
 * @ description : getOrderNoBidByCity
 * @ authen : locnt
 * @ param : access_token : access_token
 * @ param : fromCityCode : fromCityCode
 */
exports.getOrderNoBidByCity = function(res, accessTokenObj, fromCityCode){
    var connection = mysql.createConnection(constant.mysqlInfo);
    console.log(" +++ " + "DAO getOrderNoBidByCity : ");
    var sql_get_all_order = constant.sql_script_order.sql_search_all_order_pre + " AND od.from_city_code = '" + fromCityCode + "'";
    var sql_param_get_all_order = [];

    var actionName = message.functionName.sql_get_order_without_shipping_accept;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ get getOrderNoBidByCity error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ get getAllOrder connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();
            connection.query(sql_get_all_order, sql_param_get_all_order, function(err, rows, fields) {
                if (err) {
                    console.log(" +++ getOrderNoBidByCity query error - " + err);
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
                    console.log(" +++ getOrderNoBidByCity query is successfully - ");
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
 * @ name : order/updateShipping
 * @ description : updateShipping
 * @ authen : locnt
 * @ param : access_token : access_token
 * @ param : orderId : orderId
 */
exports.updateShipping = function(res, accessTokenObj, orderId){
    var connection = mysql.createConnection(constant.mysqlInfo);
    console.log(" +++ " + "DAO updateShipping : ");
    var sql_check_permission_order = "";
    var sql_update_shipping = constant.sql_script_order.sql_update_shipping;
    var sql_update_shipping_param = [];
    if(accessTokenObj.user_type == "SHIPPER"){
        sql_check_permission_order = constant.sql_script_order.sql_get_check_order_vs_shipper;
        sql_update_shipping_param = ["SHIPPING", orderId];
    }else{
        sql_check_permission_order = constant.sql_script_order.sql_get_check_order_vs_shopper;
        sql_update_shipping_param = ["FINISH", orderId];
    }
    var sql_check_permission_order_param = [orderId, accessTokenObj.user_id];

    var actionName = message.functionName.check_permission_order;

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ get updateShipping error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ get updateShipping connect success");
            var responseModel = new mysqlResponseModel.MysqlResponse();
            connection.query(sql_check_permission_order, sql_check_permission_order_param, function(err, rows, fields) {
                if (err) {
                    console.log(" +++ updateShipping query error - " + err);
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
                }else if(rows.length == 0){
                    console.log(" +++ updateShipping error permission - ");
                    responseModel.errorsObject = {};
                    responseModel.errorsMessage = message.check_permission_order;
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.error_check_permission_order;
                    res.send(responseModel);
                }else {
                    console.log(" +++ check permission query is successfully - ");
                    var connection = mysql.createConnection(constant.mysqlInfo);
                    connection.query(sql_update_shipping, sql_update_shipping_param, function (err, rows1, fields) {
                        if (err) {
                            console.log(" +++ query error - " + err);
                            responseModel.errorsObject = {
                                code: err.code,
                                errno: err.errno,
                                message: err.message,
                                sqlState: err.sqlState
                            };
                            var checkPermissionOrder = message.functionName.check_permission_order;
                            responseModel.errorsMessage = message.errorQuery.replace('#1', checkPermissionOrder);
                            responseModel.results = {};
                            responseModel.statusErrorCode = constant.error_code.error_system_query;
                            res.send(responseModel);
                        } else {
                            console.log(" +++ getShippingInfo query is successfully - ");
                            responseModel.errorsObject = {};
                            responseModel.errorsMessage = "";
                            responseModel.results = rows1;
                            responseModel.statusErrorCode = constant.error_code.success;

                            res.send(responseModel);
                        }
                    });
                    connection.end();
                }
            });
            connection.end();
        }
    });
}

