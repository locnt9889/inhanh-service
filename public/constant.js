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

exports.sql_script = {
    sql_findAll_isactive : "SELECT * FROM #table WHERE isactive = 1",
    sql_findById_isactive : "SELECT * FROM #table WHERE isactive = 1 AND person_id = ?",
    sql_removeById : "UPDATE #table SET isactive = 0 WHERE person_id = ?",
    sql_updateById : "UPDATE #table SET ? WHERE person_id = ?",
    sql_insert : "INSERT INTO #table SET ?"
}

exports.table_name = {
    person : "Person"
}