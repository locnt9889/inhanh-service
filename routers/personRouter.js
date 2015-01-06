/**
 * Created by locnt9889 on 12/25/2014.
 */

var express = require('express');
var personModel = require("../Models/personModel");
var personService = require("../Services/personServices");
var router = express.Router();

router.get('/add', function(req, res) {
    var newPersonjson = req.param("newPerson");
    var newPersonreq = JSON.parse(newPersonjson);
    var newPerson = personModel.newPerson(newPersonreq.fullname, newPersonreq.email, newPersonreq.active);
    personService.addNewPerson(res, newPerson);
});

router.get('/findall', function(req, res) {
    personService.findAllPerson(res);
});

router.get('/findbyid', function(req, res) {
    var id = req.param("id");
    personService.findPersonById(res,id);
});

router.get('/chat', function(req, res) {
    res.sendfile("routers/chat.html");
});

module.exports = router;