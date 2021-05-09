var fs = require("fs");

fs.readFile('input1.txt', function (err, data) {
   if (err) {
      console.log("file name is wrong")
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");