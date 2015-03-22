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
 * @ name : order/findall
 * @ description : findall order
 * @ authen : locnt
 */
router.post('/findall', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : order/findall");
    orderDetailService.findAllOrderDetail(req, res);
});

/*
 * @ name : order/create
 * @ description : create new order
 * @ authen : locnt
 */
router.post('/create', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : order/create");
    orderDetailService.createNewOrder(req, res);
});

/*
 * @ name : order/update
 * @ description : update order
 * @ authen : locnt
 */
router.post('/update', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : order/update");
    orderDetailService.updateOrder(req, res);
});

/*
 * @ name : order/getdetail
 * @ description : update order
 * @ authen : locnt
 */
router.post('/getdetail', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : order/getdetail");
    orderDetailService.getDetailOrder(req, res);
});

/*
 * @ name : order/getdetail
 * @ description : update order
 * @ authen : locnt
 * @ param : status : string
 */
router.post('/getall', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : order/getall");
    orderDetailService.getAllOrder(req, res);
});

/*
 * @ name : order/searchbetweendate
 * @ description : search order between date
 * @ authen : locnt
 * @ param : date_from
 * @ param : date_to
 * @ param : order_type
 * @ param : order_transportation
 */
router.post('/searchBetweenDate', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : order/searchBetweenDate");
    orderDetailService.searchBetweenDate(req, res);
});