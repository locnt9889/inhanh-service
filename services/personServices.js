/**
 * Created by locnt9889 on 12/25/2014.
 */
var personDao = require("../daos/personDao");
//var personModel = require("../models/personModel");
var personMysql = require("../models/personMysql");

exports.addNewPerson = function(req, res){
    var newPersonjson = req.param("newperson");
    var newPersonreq = JSON.parse(newPersonjson);
    //var newPerson = personModel.newPerson(newPersonreq.fullname, newPersonreq.email, newPersonreq.active);

    var newPerson = new personMysql.Person();
    newPerson.person_name = newPersonreq.person_name;
    newPerson.email = newPersonreq.email;
    newPerson.isactive = newPersonreq.isactive;

    personDao.addNewPerson(res, newPerson);
}

exports.findAllPerson = function(req, res){
    personDao.findAllPerson(res);
}

exports.findPersonById = function(req, res){
    var paramId = req.param("id") || 0;

    personDao.findPersonById(res, paramId);
}

exports.removePersonById = function(req, res){
    var paramId = req.param("id") || 0;

    personDao.removePersonById(res, paramId);
}

exports.updatePersonById = function(req, res){
    var updateId = req.param("id");
    var updatePersonjson = req.param("updateperson");
    var updatePersonreq = JSON.parse(updatePersonjson);

    personDao.updatePersonById(res, updatePersonreq, updateId);
}