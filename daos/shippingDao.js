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
 * @ name : updateCostShopping
 * @ description : updateCostShopping
 * @ authen : locnt
 */
exports.updateCostShopping = function(res, accessTokenObj, params) {
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



