
const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) =>{
    
    const data = fs.readFileSync(`${__dirname}/UserApi/UserApi.json`,"utf-8");
    const objData = JSON.parse(data);
   
    // console.log(req.url);
    if(req.url == "/"){
        res.end("Hello From the Home side kirtan");
    }
    else if(req.url == "/about"){
        res.end("You are move in about side kirtan");
    }
    else if(req.url == "/Contact"){
        res.end("You are move in Contact side kirtan");
    }
    else if(req.url == "/userapi"){
        // res.end("Hello from the userApi Sides");
        res.writeHead(200,{"content-type" : "application/json"}); 
        res.end(objData[0].name);
    }
    else{
        //if we try to other url then status set 404 not 200 using writeHead
        res.writeHead(404, { "Content-type": "text/html"});
        res.end("<h1>404 Error Page</h1>");
    }
});

server.listen(8000,"127.0.0.1", () =>{
    console.log("listening to the port 8000");
});

