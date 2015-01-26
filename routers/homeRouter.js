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
 * @ description : register by id
 * @ authen : locnt
 * @ param : newaccount = json string
 */
router.get('/register', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/register");
    homeService.register(req, res);
});
router.po
/*
 * @ name : home/login
 * @ description : find user by id
 * @ authen : locnt
 * @ attr : username
 * @ attr : password
 * @ attr : device_token
 */
router.post('/login', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/login");
    homeService.login(req, res);
});

/*
 * @ name : home/updateprofile
 * @ description : update profile id
 * @ authen : locnt
 * @ param : updateaccount = json string
 * @ param : id = 1
 */
router.get('/updateprofile', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/updateprofile");
    homeService.updateProfile(req, res);
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