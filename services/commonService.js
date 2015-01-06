/**
 * Created by locnt9889 on 1/6/2015.
 */

exports.isValidObjectID = function(str){

    // A valid Object Id must be 24 hex characters
    return (/^[0-9a-fA-F]{24}$/).test(str);

}