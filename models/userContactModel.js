/**
 * Created by LocNT on 3/18/2015 1:13 AM.
 */

function UserContact(){
    this.id = 0;
    this.user_id = 0;
    this.contact_id = 0;
    this.created_time = new Date();
    this.isactive = 1;
}

exports.UserContact = UserContact;