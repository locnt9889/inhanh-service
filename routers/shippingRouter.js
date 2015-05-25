/**
 * Created by locnt9889 on 5/10/2015.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var constant = require('../public/constant');

var shippingService = require("../services/shippingService");

module.exports = router;

/*
 * @ name : shipping/createShipping
 * @ description : user request shopping
 * @ authen : locnt
 */
router.post('/createShipping', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : shipping/createShipping");
    shippingService.createShipping(req, res);
});

/*
 * @ name : shipping/updateCostShopping
 * @ description : update Cost Shopping
 * @ authen : locnt
 */
router.post('/updateCostShipping', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : shipping/updateCostShipping");
    shippingService.updateCostShipping(req, res);
});

/*
 * @ name : shipping/rejectShipping
 * @ description : reject shipping
 * @ authen : locnt
 */
router.post('/rejectShipping', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : shipping/rejectShipping");
    shippingService.rejectShipping(req, res);
});

/*
 * @ name : shipping/acceptShipping
 * @ description : accept shipping
 * @ authen : locnt
 */
router.post('/acceptShipping', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : shipping/acceptShipping");
    shippingService.acceptShipping(req, res);
});

/*
 * @ name : shipping/getShippingByOrderDetail
 * @ description : accept shipping
 * @ authen : locnt
 */
router.post('/getShippingByOrderDetail', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : shipping/getShippingByOrderDetail");
    shippingService.getShippingByOrderDetail(req, res);
});

/*
 * @ name : shipping/getOrderShipDetailList
 * @ description : getOrderShipDetailList
 * @ authen : locnt
 */
router.post('/getOrderShipDetailList', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : shipping/getOrderShipDetailList");
    shippingService.getDetailOrderShip(req, res);
});

/*
 * @ name : shipping/getShippingInfo
 * @ description : getShippingInfo
 * @ authen : locnt
 */
router.post('/getShippingInfo', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : shipping/getShippingInfo");
    shippingService.getShippingInfo(req, res);
});
