// Events module

const EventEmitter = require("events");

const event = new EventEmitter();

// event fire using emit so first create emit down the event function
// event.on("SayMyName", ()=>{
//     console.log("Your name is kirtan");
// });
// event.on("SayMyName", ()=>{
//     console.log("Your name is yukta");
// });
// event.on("SayMyName", ()=>{
//     console.log("Your name is taufik");
// });

// event.emit("SayMyName");


event.on("CheckPage" , (sc,msg)=>{
     console.log(`status Code is  ${sc} and The pade is ${msg}`);
});

event.emit("CheckPage" , 200 ,"ok");


