/**
 * Created by LocNT on 1/27/2015 12:00 AM.
 */

var mysql = require('mysql');
var mysqlHelper = require("../daos/MysqlHelper");
var message = require('../messages/en').contentMessage;
var constant = require('../public/constant');
var mysqlResponseModel = require('../models/mysqlResponseModel');

exports.getCityByCountry = function(res, countryCode){
    console.log(" +++ " + "DAO get City By Country ");
    var connection = mysql.createConnection(constant.mysqlInfo);

    var sql_get_city = constant.sql_script_city.sql_get_city_by_country;
    var sql_get_city_param = [countryCode];

    var actionName = message.functionName.get_city_by_country;
    var responseModel = new mysqlResponseModel.MysqlResponse();
    connection.connect(function(err,connect){
        if(err){
            console.log(" +++ get City By Country connect error - " + err);
            mysqlHelper.errorConnection(res, err, connection);
        }else{
            console.log(" +++ get City By Country connect success");
            connection.query(sql_get_city, sql_get_city_param, function(err, rows, fields) {
                if (err) {
                    console.log(" +++ get City By Country error - " + err);
                    responseModel.errorsObject = {
                        code: err.code,
                        errno: err.errno,
                        message: err.message,
                        sqlState: err.sqlState
                    };
                    responseModel.errorsMessage = message.errorQuery.replace('#1', actionName);
                    responseModel.results = {};
                    responseModel.statusErrorCode = constant.error_code.error_system_query;
                    res.send(responseModel);
                }else {
                    console.log(" +++ get City By Country success - " + JSON.stringify({results : rows}));
                    responseModel.results = rows;
                    responseModel.statusErrorCode = constant.error_code.success;
                    res.send(responseModel);
                }
            });
            connection.end();
        }
    });
}

