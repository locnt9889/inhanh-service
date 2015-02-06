/**
 * Created by locnt9889 on 2/6/2015.
 */
var express = require('express');
var router = express.Router();
var moment = require('moment');
var constant = require('../public/constant');

var cityService = require("../services/cityService");

/*
 * @ name : city/get_city_by_country
 * @ description : get all city by country code
 * @ authen : locnt
 * @ param : country_code
 */
router.post('/get_city_by_country', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : city/get_city_by_country");
    cityService.getCityByCountry(req, res);
});

module.exports = router;