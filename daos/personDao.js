/**
 * Created by locnt9889 on 12/25/2014.
 */

var mongoDao = require("../daos/MongoDao");
var TableNamePerson = "person";

exports.addNewPerson = function(res, newPersonModel){
    mongoDao.addNew(res, TableNamePerson, newPersonModel);
}