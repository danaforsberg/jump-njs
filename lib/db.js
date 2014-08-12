var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = "dbdana";
var password = "testmongo";
var address = '@ds037907.mongolab.com:37907/wwdmongo';
connect();

// Connect to mongo
function connect() {
  var url = 'mongodb://' + username + ':' + password + address;
  mongoose.connect(url);
}

function disconnect() {mongoose.disconnect()}
