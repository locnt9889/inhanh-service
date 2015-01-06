/**
 * Created by locnt9889 on 12/25/2014.
 */

var mongoDao = require("../daos/MongoDao");
var TableNamePerson = "person";

exports.addNewPerson = function(res, newPersonModel){
    mongoDao.addNew(res, TableNamePerson, newPersonModel);
}

exports.findAllPerson = function(res){
    mongoDao.findAll(res, TableNamePerson);
}

exports.findPersonById = function(res, id){
    mongoDao.findById(res, TableNamePerson, id);
}

exports.removePersonById = function(res, id){
    mongoDao.removeById(res, TableNamePerson, id);
}