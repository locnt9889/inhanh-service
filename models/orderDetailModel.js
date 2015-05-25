/**
 * Created by LocNT on 3/10/2015 10:06 PM.
 */

function OrderDetail(){
    this.order_id = 0;
    this.user_id = 0;
    this.title = "";
    this.desc = "";
    this.author_phone = "";
    this.author_address = "";
    this.author_ismap = false;
    this.author_map_latitude = 0;
    this.author_map_longitude = 0;
    this.from_city_code = "";
    this.to_city_code = "";
    this.order_date = new Date();
    this.order_date_expired = new Date();
    this.order_time_expect = "";
    this.type = "";
    this.transportation = "";
    this.weight = "";
    this.price = 0;
    this.receiver_name = "";
    this.receiver_phone = "";
    this.receiver_address = "";
    this.receiver_ismap = false;
    this.receiver_map_latitude = 0;
    this.receiver_map_logitude = 0;
    this.currency = "VND";
    this.shipper_id = 0;
    this.status = "NEW";
    this.isactive = 1;
    this.isupdate = 0;
    this.created_time = new Date();
    this.modifed_time = new Date();
}

exports.OrderDetail = OrderDetail;