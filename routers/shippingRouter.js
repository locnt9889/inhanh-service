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
 * @ name : order/findall
 * @ description : findall order
 * @ authen : locnt
 */
router.post('/findall', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : order/findall");
    orderDetailService.findAllOrderDetail(req, res);
});

