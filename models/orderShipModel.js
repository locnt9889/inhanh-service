/**
 * Created by dell on 11-May-15.
 */

/*
*   Status : SHIPPER_CREATE - shipper request shipping
*            SHIPPER_ESTIMATE - shipper estimate cost
*            SHOPPER_ESTIMATE - shopper estimate cost
*            SHOPPER_REJECT - shopper reject
*            SHIPPER_ACCEPT - shipper accept cost of shopper after shopper estimate cost
*            SHOPPER_ACCEPT - shopper accept cost of shipper after shipper estimate cost or create cost
*/
function OrderShip() {
    this.order_ship_id = 0;
    this.order_id = 0;
    this.shipper_id = 0;
    this.shipper_cost = 0;
    this.shopper_cost = 0;
    this.ship_status = 'SHIPPER_CREATE';
    this.isactive = 1;
    this.created_date = new Date();
    this.modified_date = new Date();
}

exports.OrderShip = OrderShip;