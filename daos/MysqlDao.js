/**
 * Created by locnt9889 on 12/25/2014.
 */
var mysql = require('mysql');
var url = 'mysql://root:localhost:3306/euro_football?reconnect=true';
var commonService = require('../services/commonService');
var mysqlResponseModel = require('../models/mysqlResponseModel');

//add new
exports.addNew = function(res, tableName, modelObject){

}

//find all
exports.findAll = function(res, tableName){
    var s = new mysqlResponseModel.MysqlResponse();
    console.log("end");
    res.end("find all mysql");
}
