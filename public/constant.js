/**
 * Created by LocNT on 1/19/2015 11:16 PM.
 */

/*local db*/
/*exports.mysqlURL = "mysql://root:12345@localhost:3306/inhanh?reconnect=true&charset=UTF8_GENERAL_CI&timezone=+0700'";*/
/*exports.mysqlInfo = {
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'inhanh'
}*/

/*server db*/

//exports.mysqlURL = "mysql://devinhanh:inhanh2014@localhost:3306/inhanh?reconnect=true&charset=UTF8_GENERAL_CI&timezone=+0700'";
exports.mysqlInfo = {
    host: 'localhost',
    user: 'devinhanh',
    password: 'inhanh2014',
    database: 'inhanh'
}

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
    error_connection_db : 100,
    error_system_query : 1,

    error_check_register_email : 2,
    error_check_register_username : 3,
    error_check_login : 4,
    error_check_access_token : 5,
    error_check_oldpassword : 6

}

exports.sql_script = {
    sql_findAll_isactive : "SELECT * FROM #table WHERE isactive = 1",
    sql_findById_isactive : "SELECT * FROM #table WHERE isactive = 1 AND #id = ?",
    sql_removeById : "UPDATE #table SET isactive = 0 WHERE #id = ?",
    sql_updateById : "UPDATE #table SET ? WHERE #id = ?",
    sql_insert : "INSERT INTO #table SET ?"
}

exports.sql_script_home = {
    sql_check_email_exist : "SELECT id FROM account WHERE email = ?",
    sql_check_username_exist : "SELECT id FROM account WHERE username = ?",
    sql_check_login : "SELECT id,type,group_id,group_mode,isupdate FROM account WHERE username = ? AND password = ? AND isactive = 1",
    sql_remove_all_token_access_by_user_and_device : "UPDATE access_token SET isactive = 0 WHERE user_id = ? AND device_token = ?",
    sql_remove_access_token_logout : "UPDATE access_token SET islogin = 0,logout_time = ? WHERE access_token = ?",
    sql_check_access_token : "SELECT * FROM access_token WHERE access_token = ? AND islogin = 1 AND isactive = 1",
    sql_check_oldpassword : "SELECT id FROM account WHERE isactive = 1 AND id = ? AND password = ?",
    sql_search_account : "SELECT * FROM account WHERE isactive = 1",
    sql_get_contact_by_id : "SELECT ac.* FROM account ac INNER JOIN user_contact uc ON ac.id = uc.contact_id WHERE ac.isactive = 1 AND uc.isactive = 1 AND uc.user_id = ?",
    sql_remove_contacts : "UPDATE user_contact SET isactive = 0 WHERE user_id = ? AND contact_id IN "
}

exports.sql_script_city = {
    sql_get_city_by_country : "SELECT ci.city_id, ci.city_name, ci.city_code FROM city ci JOIN country co WHERE ci.country_id = co.country_id AND co.country_code = ? AND ci.isactive = 1"
};

exports.table_name = {
    person : "person",
    account : "account",
    order_detail : "order_detail",
    user_contact : "user_contact"
};