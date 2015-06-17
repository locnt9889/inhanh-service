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

exports.getAllOrder = function(req, res){
    var accessToken = req.body.access_token;
    var order_status = req.body.order_status  || "ALL";

    var callback_param = order_status.toUpperCase();
    accessTokenDao.checkAccessToken(accessToken, res, orderDetailDao.getAllOrder, callback_param);
}

exports.searchBetweenDate = function(req, res){
    var accessToken = req.body.access_token;
    var order_type = req.body.order_type  || "ALL";
    var order_transportation = req.body.order_transportation  || "ALL";
    var date_from = req.body.date_from  || "0000-00-00";
    var date_to = req.body.date_to  || "0000-00-00";

    var callback_param = [order_type.toUpperCase(), order_transportation.toUpperCase(), date_from, date_to];
    accessTokenDao.checkAccessToken(accessToken, res, orderDetailDao.searchBetweenDate, callback_param);
}

exports.createNewOrder = function(req, res){
    var accessToken = req.body.access_token;
    var newOrderReq = req.body.neworder;
    var newOrderJson = JSON.parse(newOrderReq);

    var orderDetailObj = new orderDetailModel.OrderDetail();

    //orderDetailObj.order_id = newOrderJson.order_id ? newOrderJson.order_id : 0;
    orderDetailObj.user_id = newOrderJson.user_id ? newOrderJson.user_id : 0;
    orderDetailObj.title = newOrderJson.title ? newOrderJson.title : "";
    orderDetailObj.desc = newOrderJson.desc ? newOrderJson.desc : "";
    orderDetailObj.author_phone = newOrderJson.author_phone ? newOrderJson.author_phone : "";
    orderDetailObj.author_address = newOrderJson.author_address ? newOrderJson.author_address : "";
    orderDetailObj.author_ismap = newOrderJson.author_ismap ? newOrderJson.author_ismap : false;
    orderDetailObj.author_map_latitude = newOrderJson.author_map_latitude ? newOrderJson.author_map_latitude : 0;
    orderDetailObj.author_map_longitude = newOrderJson.author_map_longitude ? newOrderJson.author_map_longitude : 0;
    orderDetailObj.from_city_code = newOrderJson.from_city_code ? newOrderJson.from_city_code : "";
    orderDetailObj.to_city_code = newOrderJson.to_city_code ? newOrderJson.to_city_code : "";
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
    orderDetailObj.currency = newOrderJson.currency ? newOrderJson.currency : "VND";
    orderDetailObj.shipper_id = 0;
    orderDetailObj.status = "NEW";
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
    delete(orderDetailObj.shipper_id);
    delete(orderDetailObj.currency);
    delete(orderDetailObj.status);

    orderDetailObj.title = updateOrderJson.title ? updateOrderJson.title : "";
    orderDetailObj.desc = updateOrderJson.desc ? updateOrderJson.desc : "";
    orderDetailObj.author_phone = updateOrderJson.author_phone ? updateOrderJson.author_phone : "";
    orderDetailObj.author_address = updateOrderJson.author_address ? updateOrderJson.author_address : "";
    orderDetailObj.author_ismap = updateOrderJson.author_ismap ? updateOrderJson.author_ismap : false;
    orderDetailObj.author_map_latitude = updateOrderJson.author_map_latitude ? updateOrderJson.author_map_latitude : 0;
    orderDetailObj.author_map_longitude = updateOrderJson.author_map_longitude ? updateOrderJson.author_map_longitude : 0;
    orderDetailObj.from_city_code = updateOrderJson.from_city_code ? updateOrderJson.from_city_code : "";
    orderDetailObj.to_city_code = updateOrderJson.to_city_code ? updateOrderJson.to_city_code : "";
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
    //orderDetailObj.currency = updateOrderJson.currency ? updateOrderJson.currency : "VND";
    orderDetailObj.isupdate = 1;
    orderDetailObj.modifed_time = new Date();

    var callback_param = [orderDetailObj,orderId];
    accessTokenDao.checkAccessToken(accessToken, res, orderDetailDao.updateOrder, callback_param);
}

exports.getOrderNoBidByCity = function(req, res){
    var accessToken = req.body.access_token;
    var fromCityCode = req.body.from_city_code || "NoCityCode";

    var callback_param = fromCityCode;
    accessTokenDao.checkAccessToken(accessToken, res, orderDetailDao.getOrderNoBidByCity, callback_param);
}

exports.updateShipping = function(req, res){
    var accessToken = req.body.access_token;
    var order_id = req.body.order_id;
    var orderIdNum = 0;
    try{
        orderIdNum = parseInt(order_id);
    }catch (e){
        console.log("Error parse number");
    }

    var callback_param = orderIdNum;
    accessTokenDao.checkAccessToken(accessToken, res, orderDetailDao.updateShipping, callback_param);
}