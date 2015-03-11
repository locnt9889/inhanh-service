/**
 * Created by locnt9889 on 3/10/2015.
 */
var orderDetailDao = require("../daos/orderDetailDao");
var accessTokenDao = require("../daos/accessTokenDao");
var orderDetailModel = require("../models/orderDetailModel");

exports.findAllOrderDetail = function(req, res){
    var accessToken = req.body.access_token;

    var callback_param = [];
    accessTokenDao.checkAccessToken(accessToken, res, orderDetailDao.findAllOrderDetail, callback_param);
}

exports.getDetailOrder = function(req, res){
    var accessToken = req.body.access_token;
    var orderId = req.body.orderid;

    var callback_param = orderId;
    accessTokenDao.checkAccessToken(accessToken, res, orderDetailDao.getDetailOrder, callback_param);
}

exports.createNewOrder = function(req, res){
    var accessToken = req.body.access_token;
    var newOrderReq = req.body.neworder;
    var newOrderJson = JSON.parse(newOrderReq);

    var orderDetailObj = new orderDetailModel.OrderDetail();

    //orderDetailObj.order_id = newOrderJson.order_id ? newOrderJson.order_id : 0;
    orderDetailObj.user_id = newOrderJson.user_id ? newOrderJson.user_id : 0;
    orderDetailObj.title = newOrderJson.title ? newOrderJson.title : "";
    orderDetailObj.description = newOrderJson.description ? newOrderJson.description : "";
    orderDetailObj.author_phone = newOrderJson.author_phone ? newOrderJson.author_phone : "";
    orderDetailObj.author_address = newOrderJson.author_address ? newOrderJson.author_address : "";
    orderDetailObj.author_ismap = newOrderJson.author_ismap ? newOrderJson.author_ismap : false;
    orderDetailObj.author_map_latitude = newOrderJson.author_map_latitude ? newOrderJson.author_map_latitude : 0;
    orderDetailObj.author_map_longitude = newOrderJson.author_map_longitude ? newOrderJson.author_map_longitude : 0;
    orderDetailObj.city_code = newOrderJson.city_code ? newOrderJson.city_code : "";
    orderDetailObj.order_date = newOrderJson.order_date ? newOrderJson.order_date : new Date();
    orderDetailObj.order_date_expired = newOrderJson.order_date_expired ? newOrderJson.order_date_expired : new Date();
    orderDetailObj.order_time_expect = newOrderJson.order_time_expect ? newOrderJson.order_time_expect : "";
    orderDetailObj.type = newOrderJson.type ? newOrderJson.type : "";
    orderDetailObj.transportation = newOrderJson.transportation ? newOrderJson.transportation : "";
    orderDetailObj.weight = newOrderJson.weight ? newOrderJson.weight : "";
    orderDetailObj.price = newOrderJson.price ? newOrderJson.price : 0;
    orderDetailObj.receiver_name = newOrderJson.receiver_name ? newOrderJson.receiver_name : "";
    orderDetailObj.receiver_phone = newOrderJson.receiver_phone ? newOrderJson.receiver_phone : "";
    orderDetailObj.receiver_address = newOrderJson.receiver_address ? newOrderJson.receiver_address : "";
    orderDetailObj.receiver_ismap = newOrderJson.receiver_ismap ? newOrderJson.receiver_ismap : false;
    orderDetailObj.receiver_map_latitude = newOrderJson.receiver_map_latitude ? newOrderJson.receiver_map_latitude : 0;
    orderDetailObj.receiver_map_logitude = newOrderJson.receiver_map_logitude ? newOrderJson.receiver_map_logitude : 0;
    orderDetailObj.isactive = 1;
    orderDetailObj.isupdate = 0;
    orderDetailObj.created_time = new Date();
    orderDetailObj.modifed_time = new Date();

    var callback_param = orderDetailObj;
    accessTokenDao.checkAccessToken(accessToken, res, orderDetailDao.createNewOrder, callback_param);
}

exports.updateOrder = function(req, res){
    var accessToken = req.body.access_token;
    var orderId = req.body.orderid;
    var updateOrderReq = req.body.updateorder;
    var updateOrderJson = JSON.parse(updateOrderReq);

    var orderDetailObj = new orderDetailModel.OrderDetail();

    delete(orderDetailObj.order_id);
    delete(orderDetailObj.created_time);
    delete(orderDetailObj.isactive);
    delete(orderDetailObj.user_id);

    orderDetailObj.title = updateOrderJson.title ? updateOrderJson.title : "";
    orderDetailObj.description = updateOrderJson.description ? updateOrderJson.description : "";
    orderDetailObj.author_phone = updateOrderJson.author_phone ? updateOrderJson.author_phone : "";
    orderDetailObj.author_address = updateOrderJson.author_address ? updateOrderJson.author_address : "";
    orderDetailObj.author_ismap = updateOrderJson.author_ismap ? updateOrderJson.author_ismap : false;
    orderDetailObj.author_map_latitude = updateOrderJson.author_map_latitude ? updateOrderJson.author_map_latitude : 0;
    orderDetailObj.author_map_longitude = updateOrderJson.author_map_longitude ? updateOrderJson.author_map_longitude : 0;
    orderDetailObj.city_code = updateOrderJson.city_code ? updateOrderJson.city_code : "";
    orderDetailObj.order_date = updateOrderJson.order_date ? updateOrderJson.order_date : new Date();
    orderDetailObj.order_date_expired = updateOrderJson.order_date_expired ? updateOrderJson.order_date_expired : new Date();
    orderDetailObj.order_time_expect = updateOrderJson.order_time_expect ? updateOrderJson.order_time_expect : "";
    orderDetailObj.type = updateOrderJson.type ? updateOrderJson.type : "";
    orderDetailObj.transportation = updateOrderJson.transportation ? updateOrderJson.transportation : "";
    orderDetailObj.weight = updateOrderJson.weight ? updateOrderJson.weight : "";
    orderDetailObj.price = updateOrderJson.price ? updateOrderJson.price : 0;
    orderDetailObj.receiver_name = updateOrderJson.receiver_name ? updateOrderJson.receiver_name : "";
    orderDetailObj.receiver_phone = updateOrderJson.receiver_phone ? updateOrderJson.receiver_phone : "";
    orderDetailObj.receiver_address = updateOrderJson.receiver_address ? updateOrderJson.receiver_address : "";
    orderDetailObj.receiver_ismap = updateOrderJson.receiver_ismap ? updateOrderJson.receiver_ismap : false;
    orderDetailObj.receiver_map_latitude = updateOrderJson.receiver_map_latitude ? updateOrderJson.receiver_map_latitude : 0;
    orderDetailObj.receiver_map_logitude = updateOrderJson.receiver_map_logitude ? updateOrderJson.receiver_map_logitude : 0;
    orderDetailObj.isupdate = 1;
    orderDetailObj.modifed_time = new Date();

    var callback_param = [orderDetailObj,orderId];
    accessTokenDao.checkAccessToken(accessToken, res, orderDetailDao.updateOrder, callback_param);
}