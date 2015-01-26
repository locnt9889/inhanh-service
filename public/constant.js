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

exports.account_type = {
    admin : "ADMIN",
    shipper : "SHIPPER",
    shopper : "SHOPPER"
}

exports.profileAction = {
    register : "REGISTER",
    update : "UPDATE"
}

exports.error_code = {
    success : 0,
    error_system_query : 1,
    error_check_register_email : 2,
    error_check_register_username : 3,
    error_connection_db : 100

}

exports.sql_script = {
    sql_findAll_isactive : "SELECT * FROM #table WHERE isactive = 1",
    sql_findById_isactive : "SELECT * FROM #table WHERE isactive = 1 AND #id = ?",
    sql_removeById : "UPDATE #table SET isactive = 0 WHERE #id = ?",
    sql_updateById : "UPDATE #table SET ? WHERE #id = ?",
    sql_insert : "INSERT INTO #table SET ?",
    sql_check_email_exist : "SELECT id FROM Account WHERE email = ?",
    sql_check_username_exist : "SELECT id FROM Account WHERE username = ?"
}

exports.table_name = {
    person : "Person",
    account : "Account"
}