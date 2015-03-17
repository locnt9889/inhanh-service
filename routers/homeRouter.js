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
router.post('/register', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/register");
    homeService.register(req, res);
});

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
 * @ name : home/logout
 * @ description : find user by id
 * @ authen : locnt
 * @ attr : username
 * @ attr : password
 * @ attr : device_token
 */
router.post('/logout', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/logout");
    homeService.logout(req, res);
});

/*
 * @ name : home/updateprofile
 * @ description : update profile id
 * @ authen : locnt
 * @ param : updateaccount = json string
 * @ param : id = 1
 */
router.post('/updateprofile', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/updateprofile");
    homeService.updateProfile(req, res);
});

/*
 * @ name : home/finduserbyid
 * @ description : find user by id
 * @ authen : locnt
 * @ param : id = 1
 */
router.post('/findaccountbyid', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/findaccountbyid");
    homeService.findAccountById(req, res);
});

/*
 * @ name : home/changepassword
 * @ description : change password
 * @ authen : locnt
 * @ param : id = 1
 */
router.post('/changepassword', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/changepassword");
    homeService.changePassword(req, res);
});

/*
 * @ name : home/searchaccount
 * @ description : search account
 * @ authen : locnt
 * @ param : type : account type
 * @ param : text_search : text for search
 * @ param : access_token : access_token
 */
router.post('/searchaccount', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/searchaccount");
    homeService.searchAccount(req, res);
});

/*
 * @ name : home/addcontact
 * @ description : add other account to list contact
 * @ authen : locnt
 * @ param : contact_id : id of contact
 * @ param : access_token : access_token
 */
router.post('/addcontact', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/addcontact");
    homeService.addContact(req, res);
});

/*
 * @ name : home/getcontact
 * @ description : get contact by id
 * @ authen : locnt
 * @ param : access_token : access_token
 */
router.post('/getcontact', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : home/getcontact");
    homeService.getContact(req, res);
});