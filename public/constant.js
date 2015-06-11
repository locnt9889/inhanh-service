/**
 * Created by LocNT on 1/19/2015 11:16 PM.
 */

/*local db*/
/*exports.mysqlURL = "mysql://root:12345@localhost:3306/inhanh?reconnect=true&charset=UTF8_GENERAL_CI&timezone=+0700'";*/
/*exports.mysqlInfo = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inhanh'
}*/

/*server db*/

//exports.mysqlURL = "mysql://devinhanh:inhanh2014@localhost:3306/inhanh?reconnect=true&charset=UTF8_GENERAL_CI&timezone=+0700'";
//host: '104.236.31.239',
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
// 7 : file avatar empty
// 8 : file avatar error
exports.error_code = {
    success : 0,
    error_connection_db : 100,
    error_system_query : 1,

    error_check_register_email : 2,
    error_check_register_username : 3,
    error_check_login : 4,
    error_check_access_token : 5,
    error_check_oldpassword : 6,
    shipping_create_error_type : 10,
    shipping_shopper_accept_reject_error_permission : 11,
    error_contact_add_yourself : 12,
    error_contact_add_contact_exist : 13
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
    sql_search_account : "SELECT * FROM account WHERE isactive = 1 AND NOT (id = ? OR id IN (SELECT DISTINCT contact_id FROM user_contact WHERE user_id = ?))",
    sql_check_account_in_contact : "SELECT * FROM user_contact WHERE isactive = 1 AND contact_id = ? AND user_id = ?",
    sql_get_contact_by_id : "SELECT ac.* FROM account ac INNER JOIN user_contact uc ON ac.id = uc.contact_id WHERE ac.isactive = 1 AND uc.isactive = 1 AND uc.user_id = ?",
    sql_remove_contacts : "UPDATE user_contact SET isactive = 0 WHERE user_id = ? AND contact_id IN "
}

exports.sql_script_order = {
    sql_search_all_order_pre : "SELECT od.order_id, od.title, od.desc, od.status,od.type as order_type, od.transportation as order_transportation, od.from_city_code as from_city_code, od.to_city_code as to_city_code,od.created_time as order_created_time, ac1.id as author_id, ac1.has_avatar as author_has_avatar, od.shipper_id as shipper_id, ac2.has_avatar as shipper_has_avatar, CONCAT(ac2.firstname,' ', ac2.lastname) as shipper_name, ac2.desc as shipper_desc, ac2.phone as shipper_phone FROM account ac1 INNER JOIN order_detail od ON ac1.id = od.user_id LEFT JOIN account ac2 ON od.shipper_id = ac2.id WHERE ac1.isactive = 1 AND od.isactive = 1",
    sql_update_cost_ship_order : "UPDATE order_ship SET #update WHERE order_ship_id = ? AND isactive = 1",
    sql_update_shipper_for_order_detail : "UPDATE order_detail SET shipper_id = ?, status='BIDED' WHERE order_id = ? AND isactive = 1",
    sql_check_order_ship_and_shopping : "SELECT od.* FROM order_detail od INNER JOIN order_ship os ON od.order_id = os.order_id WHERE od.user_id = ? AND os.order_ship_id = ? AND od.isactive = 1",
    sql_get_order_detail : "SELECT od.*, ac.firstname as author_firstname, ac.lastname as author_lastname FROM order_detail od INNER JOIN account ac ON od.user_id = ac.id WHERE od.order_id = ? AND od.isactive = 1",
    sql_get_shipping_by_order : "SELECT * FROM order_ship WHERE order_id = ? AND isactive = 1",
    sql_get_shipping_info : "SELECT * FROM order_ship WHERE order_ship_id = ? AND isactive = 1",
    sql_get_detail_by_shipping : "SELECT * FROM order_ship_detail WHERE order_ship_id = ? AND isactive = 1",
    sql_get_shipping_id_by_shipper_and_order : "SELECT order_ship_id FROM order_ship WHERE order_id = ? AND shipper_id = ? AND isactive = 1"
}

exports.sql_script_city = {
    sql_get_city_by_country : "SELECT ci.city_id, ci.city_name, ci.city_code FROM city ci JOIN country co WHERE ci.country_id = co.country_id AND co.country_code = ? AND ci.isactive = 1"
};

exports.table_name = {
    person : "person",
    account : "account",
    order_detail : "order_detail",
    user_contact : "user_contact",
    order_ship : "order_ship",
    order_ship_detail : "order_ship_detail"
};

/*
 *   Status : SHIPPER_CREATE - shipper request shipping
 *            SHIPPER_ESTIMATE - shipper estimate cost
 *            SHOPPER_ESTIMATE - shopper estimate cost
 *            SHOPPER_REJECT - shopper reject
 *            SHIPPER_ACCEPT - shipper accept cost of shopper after shopper estimate cost
 *            SHOPPER_ACCEPT - shopper accept cost of shipper after shipper estimate cost or create cost
 */
exports.ship_status = {
        shipper_create : "SHIPPER_CREATE",
        shipper_estimate : "SHIPPER_ESTIMATE",
        shopper_estimate : "SHOPPER_ESTIMATE",
        shopper_reject : "SHOPPER_REJECT",
        shipper_accept : "SHIPPER_ACCEPT",
        shopper_accept : "SHOPPER_ACCEPT"
}