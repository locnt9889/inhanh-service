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

