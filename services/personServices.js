/**
 * Created by locnt9889 on 12/25/2014.
 */
var personDao = require("../daos/personDao");

exports.addNewPerson = function(res,newPersonModel){
    personDao.addNewPerson(res, newPersonModel);
}