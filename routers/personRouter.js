/**
 * Created by locnt9889 on 12/25/2014.
 */

var express = require('express');
var router = express.Router();

var personService = require("../services/personServices");
var moment = require('moment');
var constant = require('../public/constant');

/*
 * @ name : person/add
 * @ description : all new person
 * @ authen : locnt
 * @ param : newperson = {
 *                          person_name = "";
 *                          email = "";
 *                          isactive = 1;
 *                      }
 */
router.get('/add', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : person/add");
    personService.addNewPerson(req, res);
});

/*
 * @ name : person/findall
 * @ description : find all person with isactive = 1
 * @ authen : locnt
 * @ param :
 */
router.get('/findall', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : person/findall");
    personService.findAllPerson(req, res);
});

/*
 * @ name : person/findbyid
 * @ description : find by id person
 * @ authen : locnt
 * @ param : id = 1
 */
router.get('/findbyid', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : person/findbyid");
    personService.findPersonById(req, res);
});

/*
 * @ name : person/removebyid
 * @ description : remove by id person
 * @ authen : locnt
 * @ param : id = 1
 */
router.get('/removebyid', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : person/removebyid");
    personService.removePersonById(req,res);
});

/*
 * @ name : person/updatebyid
 * @ description : update person by id
 * @ authen : locnt
 * @ param : newperson = {
 *                          person_name = "";
 *                          email = "";
 *                      }
 * @ param : id = 1
 */
router.get('/updatebyid', function(req, res) {
    console.log("@@@@@SERVICE : ----- " + moment().format(constant.formatTime) + " -----API : person/updatebyid");
    personService.updatePersonById(req,res);
});

module.exports = router;