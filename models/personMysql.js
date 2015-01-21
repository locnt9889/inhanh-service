/**
 * Created by locnt9889 on 12/25/2014.
 */

var moment = require('moment');

function Person(){
    this.person_id = 0;

    this.person_name = "";
    this.email = "";
    this.isactive = true;

    this.created_date = new Date();
}

/*exports.newPerson = function(person_id,person_name,email,isactive,created_date){
    return new Person(person_id,person_name,email,isactive,created_date);
};*/

exports.Person = Person;
