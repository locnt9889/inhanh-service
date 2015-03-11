/**
 * Created by LocNT on 3/10/2015 12:00 AM.
 */

var mysql = require('mysql');
var mysqlHelper = require("../daos/MysqlHelper");
var mysqlDao = require("../daos/MysqlDao");
var message = require('../messages/en').contentMessage;
var constant = require('../public/constant');
var mysqlResponseModel = require('../models/mysqlResponseModel');

var TableNameOrderDetail = "order_detail";
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

