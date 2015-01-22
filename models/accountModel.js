/**
 * Created by locnt9889 on 12/25/2014.
 */

var moment = require('moment');

function Account(){
    this.id = 0;
    this.username = "";
    this.password = "";
    this.email = "";
    this.phone = "";
    this.birthday = new Date();
    this.idcard = "";
    this.idcard_date = new Date();
    this.type = "SHIPPER";
    this.address = "";
    this.city_code = "";
    this.group = "";
    this.isreview = 0;
    this.created_time = new Date();
    this.modified_time = new Date();
    this.isactive = 1
}

exports.Account = Account;
