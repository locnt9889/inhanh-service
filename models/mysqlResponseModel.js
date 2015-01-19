/**
 * Created by locnt9889 on 1/19/2015.
 */

/*MysqlResponse dto ajax*/
function MysqlResponse(){
    this.errorsObject = {};
    this.errorsMessage = "";
    this.result = {};
    this.statusErrorCode = 0;
};

exports.MysqlResponse = MysqlResponse;