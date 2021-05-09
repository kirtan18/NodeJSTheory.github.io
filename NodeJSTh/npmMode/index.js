const chalk = require("chalk");
console.log(chalk.green.underline.inverse("success"));

var validator = require("validator");

const res = validator.isEmail("kirtan@.com");
// console.log(res);

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));