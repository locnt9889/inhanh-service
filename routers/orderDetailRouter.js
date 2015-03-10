/**
 * Created by locnt9889 on 3/10/2015.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var constant = require('../public/constant');

var orderDetailService = require("../services/orderDetailService");

module.exports = router;

/*
 * @ name : order/create
 * @ description : create new order
 * @ authen : locnt
 */
router.post('/create', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : order/create");
    orderDetailService.createNewOrder(req, res);
});