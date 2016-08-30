var dAccess = require('./dataAccess');
var tStamp = require('./timeStamp');
var URL = "http://jsonplaceholder.typicode.com/posts/1";


setInterval(function (){
  dAccess.getPost(URL);
  tStamp.getTime();
}, 3000);