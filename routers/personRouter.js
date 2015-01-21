/**
 * Created by locnt9889 on 12/25/2014.
 */

var express = require('express');
var router = express.Router();

var personService = require("../services/personServices");
var moment = require('moment');
var constant = require('../public/constant');

router.get('/add', function(req, res) {
    console.log("@@@@@INHANH : ----- " + moment().format(constant.formatTime) + " -----API : person/add");
    personService.addNewPerson(req, res);
});

router.get('/findall', function(req, res) {
    console.log("@@@@@INHANH : ----- " + moment().format(constant.formatTime) + " -----API : person/findall");
    personService.findAllPerson(req, res);
});

router.get('/findbyid', function(req, res) {
    console.log("@@@@@INHANH : ----- " + moment().format(constant.formatTime) + " -----API : person/findbyid");
    personService.findPersonById(req, res);
});

router.get('/removebyid', function(req, res) {
    console.log("@@@@@INHANH : ----- " + moment().format(constant.formatTime) + " -----API : person/removebyid");
    personService.removePersonById(req,res);
});

module.exports = router;