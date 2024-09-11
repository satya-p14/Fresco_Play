var Promise = require("bluebird");
var fs = Promise.promisifyAll(require("fs"));
fs.readFileAsync("users.json", "utf8").then(function (usersResp) {
  console.log(usersResp);
}).catch(function (error) {
  console.error(error.stack);
});


// help link 

https://github.com/satya-p14/Fresco_Play/tree/main/Nodejs-promises-handson
https://github.com/satya-p14/Fresco_Play/tree/main/Nodejs-promises-handson
