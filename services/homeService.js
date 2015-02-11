/**
 * Created by locnt9889 on 12/25/2014.
 */
var homeDao = require("../daos/homeDao");
var accessTokenDao = require("../daos/accessTokenDao");
var accountModel = require("../models/accountModel");
var md5 = require("MD5");

exports.register = function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var type = req.body.type;
    var group_id = req.body.group_id;
    var group_mode = req.body.group_mode;

    var newAccount = new accountModel.Account();

    newAccount.username = username ? username : "";
    newAccount.password = md5(password ? password : "");
    newAccount.email = email ? email : "";
    newAccount.type = type ? type : "";
    newAccount.group_id = group_id ? group_id : 0;
    newAccount.group_mode = group_mode ? group_mode : "";

    newAccount.isreview = 0;
    newAccount.isactive = 1;
    newAccount.isupdate = 0;

    homeDao.register(res, newAccount);
}

exports.login = function(req, res){
    var username = req.body.username;
    var password = md5(req.body.password);
    var device_token = req.body.device_token ? req.body.device_token : "";

    homeDao.login(res, username, password, device_token);
}

exports.logout = function(req, res){
    var access_token = req.body.access_token;
    accessTokenDao.checkAccessToken(access_token, res, accessTokenDao.removeAccessToken, access_token);
    //accessTokenDao.removeAccessToken(access_token);
    //res.end();
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
    delete(updateAccount.type);
    delete(updateAccount.group_id);
    delete(updateAccount.group_mode);

    updateAccount.isupdate = 1;
    updateAccount.modified_time = new Date();
    updateAccount.phone = updatePersonreq.phone ? updatePersonreq.phone : "";
    updateAccount.birthday = updatePersonreq.birthday ? updatePersonreq.birthday : new Date();
    updateAccount.idcard = updatePersonreq.idcard ? updatePersonreq.idcard : "";
    updateAccount.idcard_date = updatePersonreq.idcard_date ? updatePersonreq.idcard_date : new Date();
    updateAccount.idcard_address = updatePersonreq.idcard_address ? updatePersonreq.idcard_address : "";
    updateAccount.type = updatePersonreq.type ? updatePersonreq.type : "";
    updateAccount.address = updatePersonreq.address ? updatePersonreq.address : "";
    updateAccount.city_id = updatePersonreq.city_id ? updatePersonreq.city_id : "";

    updateAccount.firstname = updatePersonreq.firstname ? updatePersonreq.firstname : "";
    updateAccount.lastname = updatePersonreq.lastname ? updatePersonreq.lastname : "";
    updateAccount.title = updatePersonreq.title ? updatePersonreq.title : "";
    updateAccount.description = updatePersonreq.description ? updatePersonreq.description : "";
    updateAccount.is_map_default = updatePersonreq.is_map_default ? updatePersonreq.is_map_default : 0;
    updateAccount.latitude = updatePersonreq.latitude ? updatePersonreq.latitude : 0;
    updateAccount.longitude = updatePersonreq.longitude ? updatePersonreq.longitude : 0;
    updateAccount.avatar_url = updatePersonreq.avatar_url ? updatePersonreq.avatar_url : "";

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
    var old_password = md5(req.body.old_password ? req.body.old_password : "");
    var new_password = md5(req.body.new_password ? req.body.new_password : "");

    var callback_param = {
        "old_password":old_password,
        "new_password":new_password
    };

    accessTokenDao.checkAccessToken(accessToken, res, homeDao.changePassword, callback_param);
    //homeDao.findAccountById(res, paramId);
}