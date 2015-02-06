/**
 * Created by locnt9889 on 2/6/2015.
 */
var cityDao = require("../daos/cityDao");

exports.getCityByCountry = function(req, res){
    var countryCode = req.body.country_code;
    cityDao.getCityByCountry(res, countryCode);
};
