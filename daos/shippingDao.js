/**
 * Created by LocNT on 5/10/2015 12:00 AM.
 */

var mysql = require('mysql');
var mysqlHelper = require("../daos/MysqlHelper");
var mysqlDao = require("../daos/MysqlDao");
var message = require('../messages/en').contentMessage;
var constant = require('../public/constant');
var mysqlResponseModel = require('../models/mysqlResponseModel');
var orderShipDetailModel = require("../models/orderShipDetailModel");

/*
 * @ name : create new shopping
 * @ description : create new order detail
 * @ authen : locnt
 */
exports.createShipping = function(res, accessTokenObj, params) {
    var responseModel = new mysqlResponseModel.MysqlResponse();
    if(accessTokenObj.user_type != "SHIPPER"){
        responseModel.errorsObject = {};
        responseModel.errorsMessage = message.shipping_create_error_type;
        responseModel.results = {};
        responseModel.statusErrorCode = constant.error_code.shipping_create_error_type;
        res.send(responseModel);
    }else{
        var newOrderShip = params[0];
        newOrderShip.shipper_id = accessTokenObj.user_id;
        var newOrderShipDetail = params[1];

        //save data
        var tableNameOrderShip = constant.table_name.order_ship;
        var tableNameOrderShipDetail = constant.table_name.order_ship_detail;
        var actionName = message.functionName.addNew;

        var connection = mysql.createConnection(constant.mysqlInfo);
        var sql_insert_order_ship = constant.sql_script.sql_insert.replace('#table', tableNameOrderShip);

        connection.connect(function(err,connect){
            if(err){
                console.log(" +++ addNew connect error - " + err)
                mysqlHelper.errorConnection(res, err,connection);
            }else{
                console.log(" +++ addNew connect success");
                connection.query(sql_insert_order_ship, newOrderShip, function(err, rows, fields) {
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
                        console.log(" +++ query success - " + JSON.stringify({results : rows}));
                        newOrderShipDetail.order_ship_id = rows.insertId;
                        mysqlDao.addNew(res, tableNameOrderShipDetail, newOrderShipDetail);
                    }
                });
                connection.end();
            }
        });
    }
}

/*
 * @ name : updateCostShipping
 * @ description : updateCostShipping
 * @ authen : locnt
 */
exports.updateCostShipping = function(res, accessTokenObj, params) {
    var responseModel = new mysqlResponseModel.MysqlResponse();
    var orderShipId =  params[0];
    var orderShipIdNum =  0;
    try{
        orderShipIdNum = parseFloat(orderShipId);
    }catch (e){
        console.log("Order ship id is not a number!");
    }
    var costUpdate =  params[1];
    var costUpdateNum =  0;
    try{
        costUpdateNum = parseFloat(costUpdate);
    }catch (e){
        console.log("Cost is not a number!");
    }
    var comment =  params[2];

    var actionOf = accessTokenObj.user_type.toUpperCase();
    var statusOrderShip = "";
    var newOrderShipDetail = new orderShipDetailModel.OrderShipDetail();
    newOrderShipDetail.comment = comment;
    newOrderShipDetail.cost = costUpdateNum;
    newOrderShipDetail.action_of = actionOf;
    newOrderShipDetail.order_ship_id = orderShipIdNum;

    //save data
    var tableNameOrderShipDetail = constant.table_name.order_ship_detail;
    var sqlUpdateCostShipOrder = constant.sql_script_order.sql_update_cost_ship_order;
    var updateDataSql = "";
    if(actionOf == 'SHIPPER'){
        statusOrderShip = constant.ship_status.shipper_estimate;
        newOrderShipDetail.ship_status = statusOrderShip;
        updateDataSql = "shipper_cost = " + costUpdateNum + ",ship_status = '" + statusOrderShip + "'";
    }else if(actionOf == 'SHOPPER'){
        statusOrderShip = constant.ship_status.shopper_estimate;
        newOrderShipDetail.ship_status = statusOrderShip;
        updateDataSql = "shopper_cost = " + costUpdateNum + ",ship_status = '" + statusOrderShip + "'";
    }

    var sqlUpdateCostShipOrderBuilder = sqlUpdateCostShipOrder.replace("#update", updateDataSql);
    var connection = mysql.createConnection(constant.mysqlInfo);

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ addNew connect error - " + err)
            mysqlHelper.errorConnection(res, err,connection);
        }else{
            console.log(" +++ addNew connect success");
            connection.query(sqlUpdateCostShipOrderBuilder, [orderShipIdNum], function(err, rows, fields) {
                if (err) {
                    console.log(" +++ query error - " + err);
                    responseModel.errorsObject = {
                        code : err.code,
                        errno : err.errno,
                        message : err.message,
                        sqlState : err.sqlState
                    };
                    var actionUpdateOrderShip = message.functionName.updateOrderShip;
                    responseModel.errorsMessage = message.errorQuery.replace('#1',actionUpdateOrderShip);
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else {
                    console.log(" +++ query success - " + JSON.stringify({results : rows}));
                    mysqlDao.addNew(res, tableNameOrderShipDetail, newOrderShipDetail);
                }
            });
            connection.end();
        }
    });
}

/*
 * @ name : rejectShipping
 * @ description : rejectShipping
 * @ authen : locnt
 */
exports.acceptOrRejectShipping = function(res, accessTokenObj, params) {
    var responseModel = new mysqlResponseModel.MysqlResponse();
    var orderShipId =  params[0];
    var orderShipIdNum =  0;
    try{
        orderShipIdNum = parseFloat(orderShipId);
    }catch (e){
        console.log("Order ship id is not a number!");
    }
    var comment =  params[1];
    var action =  params[2];
    var statusAction = "";
    if(action == "REJECT"){
        statusAction = constant.ship_status.shopper_reject;
    }else if(action == "ACCEPT"){
        statusAction = constant.ship_status.shopper_accept;
    }

    var sqlCheckOrderShipAndShopping = constant.sql_script_order.sql_check_order_ship_and_shopping;
    var connection = mysql.createConnection(constant.mysqlInfo);

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ CheckOrderShipAndShopping connect error - " + err)
            mysqlHelper.errorConnection(res, err,connection);
        }else{
            console.log(" +++ CheckOrderShipAndShopping connect success");
            connection.query(sqlCheckOrderShipAndShopping, [accessTokenObj.user_id, orderShipIdNum], function(err, rows, fields) {
                if (err) {
                    console.log(" +++ query error - " + err);
                    responseModel.errorsObject = {
                        code : err.code,
                        errno : err.errno,
                        message : err.message,
                        sqlState : err.sqlState
                    };
                    var actionCheckOrderShipAndShopping = message.functionName.checkOrderShipAndShopping;
                    responseModel.errorsMessage = message.errorQuery.replace('#1',actionCheckOrderShipAndShopping);
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else if(rows.length == 0){
                    responseModel.errorsObject = {};
                    var actionCheckOrderShipAndShopping = message.functionName.checkOrderShipAndShopping;
                    responseModel.errorsMessage = message.shipping_shopper_accept_reject_error_permission;
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.shipping_shopper_accept_reject_error_permission;
                    res.send(responseModel);
                }else {
                    var newOrderShipDetail = new orderShipDetailModel.OrderShipDetail();
                    newOrderShipDetail.comment = comment;
                    newOrderShipDetail.action_of = "SHOPPER";
                    newOrderShipDetail.ship_status = statusAction;
                    newOrderShipDetail.order_ship_id = orderShipIdNum;

                    //save data
                    var tableNameOrderShipDetail = constant.table_name.order_ship_detail;
                    var sqlUpdateCostShipOrder = constant.sql_script_order.sql_update_cost_ship_order;
                    var updateDataSql = "";

                    var updateDataSql = "ship_status = '" + statusAction + "'";

                    var sqlUpdateCostShipOrderBuilder = sqlUpdateCostShipOrder.replace("#update", updateDataSql);
                    var connection = mysql.createConnection(constant.mysqlInfo);

                    connection.connect(function(err,connect){
                        if(err){
                            console.log(" +++ reject shipping connect error - " + err)
                            mysqlHelper.errorConnection(res, err,connection);
                        }else{
                            console.log(" +++ reject shipping connect success");
                            connection.query(sqlUpdateCostShipOrderBuilder, [orderShipIdNum], function(err, rows, fields) {
                                if (err) {
                                    console.log(" +++ query error - " + err);
                                    responseModel.errorsObject = {
                                        code : err.code,
                                        errno : err.errno,
                                        message : err.message,
                                        sqlState : err.sqlState
                                    };
                                    var actionUpdateOrderShip = message.functionName.updateOrderShip;
                                    responseModel.errorsMessage = message.errorQuery.replace('#1',actionUpdateOrderShip);
                                    responseModel.results = {};
                                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                                    res.send(responseModel);
                                }else {
                                    console.log(" +++ query success - " + JSON.stringify({results : rows}));
                                    mysqlDao.addNew(res, tableNameOrderShipDetail, newOrderShipDetail);
                                }
                            });
                            connection.end();
                        }
                    });
                }
            });
            connection.end();
        }
    });
}

/*
 * @ name : getShippingByOrderDetail
 * @ description : getShippingByOrderDetail
 * @ authen : locnt
 */
exports.getShippingByOrderDetail = function(res, accessTokenObj, orderDetailId) {
    var responseModel = new mysqlResponseModel.MysqlResponse();

    var sqlGetShippingByOrderDetail = constant.sql_script_order.sql_get_shipping_by_order;
    var connection = mysql.createConnection(constant.mysqlInfo);

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ getShippingByOrderDetail connect error - " + err);
            mysqlHelper.errorConnection(res, err,connection);
        }else{
            console.log(" +++ getShippingByOrderDetail connect success");
            connection.query(sqlGetShippingByOrderDetail, [orderDetailId], function(err, rows, fields) {
                if (err) {
                    console.log(" +++ query error - " + err);
                    responseModel.errorsObject = {
                        code : err.code,
                        errno : err.errno,
                        message : err.message,
                        sqlState : err.sqlState
                    };
                    var actionGetShippingByOrderDetail = message.functionName.get_shipping_by_order_detail;
                    responseModel.errorsMessage = message.errorQuery.replace('#1',actionGetShippingByOrderDetail);
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else {
                    console.log(" +++ getShippingByOrderDetail query is successfully - ");
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
 * @ name : getDetailOrderShip
 * @ description : getDetailOrderShip
 * @ authen : locnt
 */
exports.getDetailOrderShip = function(res, accessTokenObj, orderShipId) {
    var responseModel = new mysqlResponseModel.MysqlResponse();

    var sqlGetDetailOrderShip = constant.sql_script_order.sql_get_detail_by_shipping;
    var connection = mysql.createConnection(constant.mysqlInfo);

    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ getDetailOrderShip connect error - " + err);
            mysqlHelper.errorConnection(res, err,connection);
        }else{
            console.log(" +++ getDetailOrderShip connect success");
            connection.query(sqlGetDetailOrderShip, [orderShipId], function(err, rows, fields) {
                if (err) {
                    console.log(" +++ query error - " + err);
                    responseModel.errorsObject = {
                        code : err.code,
                        errno : err.errno,
                        message : err.message,
                        sqlState : err.sqlState
                    };
                    var actionGetDetailOrderShip = message.functionName.get_detail_order_ship;
                    responseModel.errorsMessage = message.errorQuery.replace('#1',actionGetDetailOrderShip);
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else {
                    console.log(" +++ getDetailOrderShip query is successfully - ");
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



