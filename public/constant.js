/**
 * Created by LocNT on 1/19/2015 11:16 PM.
 */

/*local db*/
exports.mysqlURL = "mysql://root:12345@localhost:3306/inhanh?reconnect=true&charset=UTF8_GENERAL_CI&timezone=+0700'";
exports.mysqlInfo = {
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'inhanh'
}

/*server db*/
/*
exports.mysqlURL = "mysql://devinhanh:inhanh2014@localhost:3306/inhanh?reconnect=true&charset=UTF8_GENERAL_CI&timezone=+0700'";
exports.mysqlInfo = {
    host: 'localhost',
    user: 'devinhanh',
    password: 'inhanh2014',
    database: 'inhanh'
}*/

/*constant*/
exports.formatTime = "YYYY-MM-DD HH:mm:ss";
exports.formatDate = "YYYY-MM-DD";