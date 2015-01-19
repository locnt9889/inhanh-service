/**
 * Created by locnt9889 on 12/25/2014.
 */

var moment = require('moment');

function Person(person_id,person_name,email,isactive,created_date){
    this.person_id = 0;
    this.person_name = "";
    this.email = "";
    this.created_date = moment().format('MMMM Do YYYY, h:mm:ss a');
    this.isactive = true;

    if(person_id != undefined){
        this.person_id = person_id;
    }

    if(person_name != undefined){
        this.person_name = person_name;
    }

    if(email != undefined){
        this.email = email;
    }

    if(created_date != undefined){
        this.created_date = created_date;
    }

    if(isactive != undefined){
        this.isactive = isactive;
    }
}

exports.newPerson = function(person_id,person_name,email,isactive){
    return new Person(person_id,person_name,email,isactive);
};
