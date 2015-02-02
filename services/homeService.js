/**
 * Created by locnt9889 on 12/25/2014.
 */
var homeDao = require("../daos/homeDao");
var accessTokenDao = require("../daos/accessTokenDao");
var accountModel = require("../models/accountModel");

exports.register = function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var type = req.body.type;

    var newAccount = new accountModel.Account();

    newAccount.username = username ? username : "";
    newAccount.password = password ? password : "";
    newAccount.email = email ? email : "";
    newAccount.type = type ? type : "";

    /*newAccount.phone = newPersonreq.phone ? newPersonreq.phone : "";
    newAccount.birthday = newPersonreq.birthday ? newPersonreq.birthday : "";
    newAccount.idcard = newPersonreq.idcard ? newPersonreq.idcard : "";
    newAccount.idcard_date = newPersonreq.idcard_date ? newPersonreq.idcard_date : "";
    newAccount.idcard_address = newPersonreq.idcard_address ? newPersonreq.idcard_address : "";
    newAccount.address = newPersonreq.address ? newPersonreq.address : "";
    newAccount.city_code = newPersonreq.city_code ? newPersonreq.city_code : "";
    newAccount.group = newPersonreq.group ? newPersonreq.group : "";*/

    newAccount.isreview = 0;
    newAccount.isactive = 1;

    homeDao.register(res, newAccount);
}

exports.login = function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var device_token = req.body.device_token;

    homeDao.login(res, username, password, device_token);
}

exports.logout = function(req, res){
    var access_token = req.body.access_token;
    accessTokenDao.removeAccessToken(access_token);
    res.end();
}

exports.updateProfile = function(req, res){
    var accessToken = req.body.access_token;
    var updateAcountJson = req.body.updateaccount;
    var updatePersonreq = JSON.parse(updateAcountJson);

    var updateAccount = new accountModel.Account();

    delete(updateAccount.id);
    delete(updateAccount.username);
    delete(updateAccount.password);
    delete(updateAccount.isreview);
    delete(updateAccount.isactive);
    delete(updateAccount.email);
    delete(updateAccount.created_time);
    delete(updateAccount.modified_time);

    updateAccount.phone = updatePersonreq.phone ? updatePersonreq.phone : "";
    updateAccount.birthday = updatePersonreq.birthday ? updatePersonreq.birthday : "";
    updateAccount.idcard = updatePersonreq.idcard ? updatePersonreq.idcard : "";
    updateAccount.idcard_date = updatePersonreq.idcard_date ? updatePersonreq.idcard_date : "";
    updateAccount.idcard_address = updatePersonreq.idcard_address ? updatePersonreq.idcard_address : "";
    updateAccount.type = updatePersonreq.type ? updatePersonreq.type : "";
    updateAccount.address = updatePersonreq.address ? updatePersonreq.address : "";
    updateAccount.city_code = updatePersonreq.city_code ? updatePersonreq.city_code : "";
    updateAccount.group = updatePersonreq.group ? updatePersonreq.group : "";

    var callback_param = updateAccount;
    accessTokenDao.checkAccessToken(accessToken, res, homeDao.updateProfile, callback_param);
    //homeDao.updateProfile(res, updateAccount, id);
}

exports.findAccountById = function(req, res){
    var accessToken = req.body.access_token;
    var callback_param = [];
    accessTokenDao.checkAccessToken(accessToken, res, homeDao.findAccountById, callback_param);
    //homeDao.findAccountById(res, paramId);
}

exports.changePassword = function(req, res){
    var accessToken = req.body.access_token;
    var old_password = req.body.old_password ? req.body.old_password : "";
    var new_password = req.body.new_password ? req.body.new_password : "";

    var callback_param = {
        "old_password":old_password,
        "new_password":new_password
    };

    accessTokenDao.checkAccessToken(accessToken, res, homeDao.changePassword, callback_param);
    //homeDao.findAccountById(res, paramId);
}