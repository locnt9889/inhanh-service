/**
 * Created by locnt9889 on 1/20/2015.
 */

exports.contentMessage = {
    functionName: {
        register : "Register",
        addNew : "Add new",
        findAll : "Find all",
        findById : "Find by id",
        updateById : "Update by id",
        login : "Login",
        check_access_token : "Check access token",
        chang_password : "Change password",
        get_city_by_country : "Get list city by country",
        logout : "Logout",
        searchAccount : "search account",
        getContact : "get all contact",
        removeContacts : "remove list contact",
        getAllOrder : "get all order by status",
        sql_get_order_without_shipping_accept : "sql get order without shipping accept",
        searchAllOrderBetweenDate : "search all order between date",
        updateOrderShip : "update order ship",
        checkOrderShipAndShopping : "check Order Ship And Shopping",
        get_shipping_by_order_detail : "get shipping by order detail",
        get_shipping_info : "get shipping info",
        sql_update_shipper_for_order_detail : "sql update shipper for order detail",
        get_detail_order_ship : "get detail order ship",
        check_account_in_contact : "check account in contact list",
        check_permission_order : "check permission order"
    },
    errorConnectionDB : "Connection to Database is failure!",
    errorQuery : "Query with #1 is failure!",
    errorInsert : "Insert new #1 is failure!",
    registerUsernameExist : "Username was Existed, please input other username!",
    registerEmailExist : "Email was Existed, please input other email!",
    login_fail : "Username is not exist or password is incorrect.Please re-enter!",
    login_success : "Login is successfully!",
    error_access_token : "Access token error!",
    error_check_oldpassword : "Old password is incorrect!",
    shipping_create_error_type : "User don't have permission for create a bidding order.Please make sure you are a shipper!",
    shipping_shopper_accept_reject_error_permission : "You don't have permission for action",
    error_contact_add_yourself : "You can not add yourself to list contact, please retry with other account!",
    error_contact_add_contact_exist : "Account was existed in your list contact, please retry with other account!",
    check_permission_order : "You don't have permission for action"
}

