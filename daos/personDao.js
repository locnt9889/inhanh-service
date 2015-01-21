/**
 * Created by locnt9889 on 12/25/2014.
 */


var mongoDao = require("../daos/MongoDao");
var mysqlDao = require("../daos/MysqlDao");
var constant = require('../public/constant');
var TableNamePerson = constant.table_name.person;

exports.addNewPerson = function(res, newPersonModel){
    //mongoDao.addNew(res, TableNamePerson, newPersonModel);
    mysqlDao.addNew(res, TableNamePerson, newPersonModel);
}

exports.findAllPerson = function(res){
    //mongoDao.findAll(res, TableNamePerson);
    mysqlDao.findAll(res, TableNamePerson);
}

exports.findPersonById = function(res, id){
    //mongoDao.findById(res, TableNamePerson, id);
    mysqlDao.findById(res, TableNamePerson, id);
}

exports.removePersonById = function(res, id){
    //mongoDao.removeById(res, TableNamePerson, id);
    mysqlDao.removeById(res, TableNamePerson, id);
}

exports.updatePersonById = function(res, updatePerson, updateId){
    mysqlDao.updateById(res, TableNamePerson, updatePerson, updateId);
}