/**
 * Created by LocNT on 1/22/2015 9:30 PM.
 * Home router for account: login,register,...
 */

var express = require('express');
var router = express.Router();

var homeService = require("../services/homeService");
var moment = require('moment');
var constant = require('../public/constant');

module.exports = router;

/*
 * @ name : home/register
 * @ description : find user by id
 * @ authen : locnt
 * @ param : newaccount = json string
 */
router.get('/register', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/register");
    homeService.register(req, res);
});

/*
 * @ name : home/finduserbyid
 * @ description : find user by id
 * @ authen : locnt
 * @ param : id = 1
 */
router.get('/findaccountbyid', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/findaccountbyid");
    homeService.findAccountById(req, res);
});