var Moment = require('moment');

var timeStamp = {
  getTime: function (){
     console.log("TIMESTAMP", new Moment().format("h:mm:ss a"));
  }
}

module.exports = timeStamp;