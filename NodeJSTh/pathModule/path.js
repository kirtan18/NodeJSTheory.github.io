const path = require("path");

// console.log(path.dirname("G:/NodeJS/pathModule/path.js"));

// console.log(path.extname("G:/NodeJS/pathModule/path.js"));

// console.log(path.basename("G:/NodeJS/pathModule/path.js"));

const mypath =  path.parse("G:/NodeJS/pathModule/path.js");
console.log(mypath.name);
console.log(mypath.root);