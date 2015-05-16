/**
 * Created by locnt9889 on 5/10/2015.
 */
var shippingDao = require("../daos/shippingDao");
var accessTokenDao = require("../daos/accessTokenDao");
var orderShipDetailModel = require("../models/orderShipDetailModel");
var orderShipModel = require("../models/orderShipModel");

exports.createShipping = function(req, res){
    var accessToken = req.body.access_token;
    var orderId = req.body.order_id;
    var shipperCost = req.body.shipper_cost;
    var shopperCost = req.body.shopper_cost;
    var comment = req.body.comment;

    var newOrderShip = new orderShipModel.OrderShip();
    newOrderShip.order_id = orderId;
    newOrderShip.shopper_cost = shopperCost;
    newOrderShip.shipper_cost = shipperCost;

    var newOrderShipDetail = new orderShipDetailModel.OrderShipDetail();
    newOrderShipDetail.action_of="SHIPPER";
    newOrderShipDetail.comment = comment;
    newOrderShipDetail.cost = shipperCost;

    var params = [newOrderShip, newOrderShipDetail];
    accessTokenDao.checkAccessToken(accessToken, res, shippingDao.createShipping, params);
}

exports.updateCostShipping = function(req, res){
    var accessToken = req.body.access_token;
    var orderShipId = req.body.order_ship_id;
    var costUpdate = req.body.cost_update;
    var comment = req.body.comment;

    var params = [orderShipId, costUpdate, comment];
    accessTokenDao.checkAccessToken(accessToken, res, shippingDao.updateCostShipping, params);
}

exports.acceptOrRejectShipping = function(req, res, action){
    var accessToken = req.body.access_token;
    var orderShipId = req.body.order_ship_id;
    var comment = req.body.comment;

    var params = [orderShipId, comment, action];
    accessTokenDao.checkAccessToken(accessToken, res, shippingDao.acceptOrRejectShipping, params);
}

exports.getShippingByOrderDetail = function(req, res){
    var accessToken = req.body.access_token;
    var orderId = req.body.order_id;

    var params = orderId;
    accessTokenDao.checkAccessToken(accessToken, res, shippingDao.getShippingByOrderDetail, params);
}