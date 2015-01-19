/**
 * Created by locnt9889 on 12/25/2014.
 */

var moment = require('moment');
var constant = require('../public/constant');

function Person(fullname,email,active,datecreate){
    this.fullname = "";
    this.email = "";
    this.datecreate = moment().format(constant.formatTime);
    this.active = true;

    if(fullname != undefined){
        this.fullname = fullname;
    }

    if(email != undefined){
        this.email = email;
    }

    if(datecreate != undefined){
        this.datecreate = datecreate;
    }

    if(active != undefined){
        this.active = active;
    }
}

exports.newPerson = function(fullname,email,datecreate,active){
    return new Person(fullname,email,datecreate,active);
};

/*person dto ajax*/
function PersonAjaxResponse(){
    this.errorsRes = {};
    this.statusErrorRes = 0;
};

exports.newPersonAjaxResponse = function(){
    return new PersonAjaxResponse();
};
