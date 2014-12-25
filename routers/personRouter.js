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

module.exports = router;