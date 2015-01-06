/**
 * Created by locnt9889 on 12/25/2014.
 */
var personDao = require("../daos/personDao");

exports.addNewPerson = function(res,newPersonModel){
    personDao.addNewPerson(res, newPersonModel);
}

exports.findAllPerson = function(res){
    personDao.findAllPerson(res);
}

exports.findPersonById = function(res, id){
    personDao.findPersonById(res, id);
}

exports.removePersonById = function(res, id){
    personDao.removePersonById(res, id);
}