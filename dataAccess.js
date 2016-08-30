var Request = require('request-promise');

var dataAccess = {
 getPost: function(postId){
  Request(postId).then(function (response){
    console.log(response);
  })
 }
}

module.exports = dataAccess;