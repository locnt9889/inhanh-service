/**
 * Created by locnt9889 on 12/25/2014.
 */
var homeDao = require("../daos/homeDao");
var accessTokenDao = require("../daos/accessTokenDao");
var accountModel = require("../models/accountModel");

exports.register = function(req, res){
    var newAcountJson = req.query.newaccount;
    var newPersonreq = JSON.parse(newAcountJson);

    var newAccount = new accountModel.Account();

    newAccount.username = newPersonreq.username ? newPersonreq.username : "";
    newAccount.password = newPersonreq.password ? newPersonreq.password : "";
    newAccount.email = newPersonreq.email ? newPersonreq.email : "";
    newAccount.type = newPersonreq.type ? newPersonreq.type : "";

    /*newAccount.phone = newPersonreq.phone ? newPersonreq.phone : "";
    newAccount.birthday = newPersonreq.birthday ? newPersonreq.birthday : "";
    newAccount.idcard = newPersonreq.idcard ? newPersonreq.idcard : "";
    newAccount.idcard_date = newPersonreq.idcard_date ? newPersonreq.idcard_date : "";
    newAccount.idcard_address = newPersonreq.idcard_address ? newPersonreq.idcard_address : "";
    newAccount.address = newPersonreq.address ? newPersonreq.address : "";
    newAccount.city_code = newPersonreq.city_code ? newPersonreq.city_code : "";
    newAccount.group = newPersonreq.group ? newPersonreq.group : "";*/

    newAccount.isreview = 0;
    newAccount.isactive = 1

    homeDao.register(res, newAccount);
}

exports.login = function(req, res){
    var username = req.query.username;
    var password = req.query.password;
    var device_token = req.query.device_token;

    homeDao.login(res, username, password, device_token);
}

exports.logout = function(req, res){
    var access_token = req.query.token;
    accessTokenDao.removeAccessToken(access_token);
    res.end();
}

exports.updateProfile = function(req, res){
    var id = req.param("id");
    var updateAcountJson = req.param("updateaccount");
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

    var accessToken = req.param("token");
    var callback_param = updateAccount;
    accessTokenDao.checkAccessToken(accessToken, res, homeDao.updateProfile, callback_param);
    //homeDao.updateProfile(res, updateAccount, id);
}

exports.findAccountById = function(req, res){
    var paramId = req.param("id") || 0;

    var accessToken = req.param("token");
    var callback_param = [];
    accessTokenDao.checkAccessToken(accessToken, res, homeDao.findAccountById, callback_param);
    //homeDao.findAccountById(res, paramId);
}

exports.changePassword = function(req, res){
    //var paramId = req.param("id") || 0;

    var accessToken = req.query.token;
    var info = req.query.info;
    var callback_param = {};
    try{
        callback_param = JSON.parse(info);
    }catch (e){
        console.log("---changePassword parse JSON error");
    }
    accessTokenDao.checkAccessToken(accessToken, res, homeDao.changePassword, callback_param);
    //homeDao.findAccountById(res, paramId);
}