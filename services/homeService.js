/**
 * Created by locnt9889 on 12/25/2014.
 */
var homeDao = require("../daos/homeDao");
var accountModel = require("../models/accountModel");

exports.register = function(req, res){
    var newAcountJson = req.param("newaccount");
    var newPersonreq = JSON.parse(newAcountJson);

    var newAccount = new accountModel.Account();

    newAccount.username = newPersonreq.username;
    newAccount.password = newPersonreq.password;
    newAccount.email = newPersonreq.email;
    newAccount.phone = newPersonreq.phone;
    newAccount.birthday = newPersonreq.birthday;
    newAccount.idcard = newPersonreq.idcard;
    newAccount.idcard_date = newPersonreq.idcard_date;
    newAccount.idcard_address = newPersonreq.idcard_address;
    newAccount.type = newPersonreq.type;
    newAccount.address = newPersonreq.address;
    newAccount.city_code = newPersonreq.city_code;
    newAccount.group = newPersonreq.group;
    newAccount.isreview = newPersonreq.isreview;
    newAccount.isactive = 1

    homeDao.register(res, newAccount);
}

exports.findAccountById = function(req, res){
    var paramId = req.param("id") || 0;

    homeDao.findAccountById(res, paramId);
}