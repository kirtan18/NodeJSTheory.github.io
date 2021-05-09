const fs = require("fs");

const bioData  = {
    name : "kirtan",
    age : 20,
    channel : "Technical",
}

//  const jsonData = JSON.stringify(bioData);
// //  console.log(jsonData);

//  const objData = JSON.parse(jsonData);

//  console.log(objData);

/************  *  *************/
// 1 : convert into JSON
// 2 : enter in second File
// 3 : readfile
// 4 : again convert back to js object ori
// 5 console.log

const jsonData = JSON.stringify(bioData);

// fs.writeFile("json1.json",jsonData ,(err) =>{
//     console.log("done");
// });

fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
     const orgData = JSON.parse(data);
     console.log(orgData);
});



