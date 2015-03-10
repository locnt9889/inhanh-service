/**
 * Created by locnt9889 on 3/10/2015.
 */
var orderDetailDao = require("../daos/orderDetailDao");
var accessTokenDao = require("../daos/accessTokenDao");
var orderDetailModel = require("../models/orderDetailModel");

exports.createNewOrder = function(req, res){
    var accessToken = req.body.access_token;
    var newOrderReq = req.body.newOrder;
    var newOrderJson = JSON.parse(newOrderReq);

    var orderDetailObj = new orderDetailModel.OrderDetail();

    orderDetailObj.order_id = orderDetailObj.order_id ? orderDetailObj.order_id : 0;
    orderDetailObj.user_id = orderDetailObj.user_id ? orderDetailObj.user_id : 0;
    orderDetailObj.title = orderDetailObj.title ? orderDetailObj.title : "";
    orderDetailObj.description = orderDetailObj.description ? orderDetailObj.description : "";
    orderDetailObj.author_phone = orderDetailObj.author_phone ? orderDetailObj.author_phone : "";
    orderDetailObj.author_address = orderDetailObj.author_address ? orderDetailObj.author_address : "";
    orderDetailObj.author_ismap = orderDetailObj.author_ismap ? orderDetailObj.author_ismap : false;
    orderDetailObj.author_map_latitude = orderDetailObj.author_map_latitude ? orderDetailObj.author_map_latitude : 0;
    orderDetailObj.author_map_longitude = orderDetailObj.author_map_longitude ? orderDetailObj.author_map_longitude : 0;
    orderDetailObj.city_code = orderDetailObj.city_code ? orderDetailObj.city_code : "";
    orderDetailObj.order_date = orderDetailObj.order_date ? orderDetailObj.order_date : new Date();
    orderDetailObj.order_date_expired = orderDetailObj.order_date_expired ? orderDetailObj.order_date_expired : new Date();
    orderDetailObj.order_time_expect = orderDetailObj.order_time_expect ? orderDetailObj.order_time_expect : "";
    orderDetailObj.type = orderDetailObj.type ? orderDetailObj.type : "";
    orderDetailObj.transportation = orderDetailObj.transportation ? orderDetailObj.transportation : "";
    orderDetailObj.weight = orderDetailObj.weight ? orderDetailObj.weight : "";
    orderDetailObj.price = orderDetailObj.price ? orderDetailObj.price : 0;
    orderDetailObj.receiver_name = orderDetailObj.receiver_name ? orderDetailObj.receiver_name : "";
    orderDetailObj.receiver_phone = orderDetailObj.receiver_phone ? orderDetailObj.receiver_phone : "";
    orderDetailObj.receiver_address = orderDetailObj.receiver_address ? orderDetailObj.receiver_address : "";
    orderDetailObj.receiver_ismap = orderDetailObj.receiver_ismap ? orderDetailObj.receiver_ismap : false;
    orderDetailObj.receiver_map_latitude = orderDetailObj.receiver_map_latitude ? orderDetailObj.receiver_map_latitude : 0;
    orderDetailObj.receiver_map_logitude = orderDetailObj.receiver_map_logitude ? orderDetailObj.receiver_map_logitude : 0;
    orderDetailObj.isactive = 1;
    orderDetailObj.isupdate = 0;
    orderDetailObj.created_time = new Date();
    orderDetailObj.modifed_time = new Date();

    var callback_param = orderDetailObj;
    //accessTokenDao.checkAccessToken(accessToken, res, homeDao.updateProfile, callback_param);
}