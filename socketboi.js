const path = require('path');
const Max = require('max-api');

// This will be printed directly to the Max console
Max.post(`Loaded the ${path.basename(__filename)} script`);

// Use the 'addHandler' function to register a function for a particular message

// Use the 'outlet' function to send messages out of node.script's outlet
Max.addHandler("echo", (msg) => {
	Max.outlet(msg);
  console.log(msg);
});





const io = require('socket.io-client');



var socket = io("https://socket-max-hole.glitch.me/");
// , {
// 	'force new connection': true,
// 	"reconnectionAttempts": "Infinity",
// 	"timeout": 10000,
// 	"transports" :["websocket"]
// 	});



//
socket.on('connect', () => {
  Max.post("thew socket connectedd"); // true
 socket.emit("maxask", "can i have stuff?");
});
//
socket.on('answer', (data)=>{

  Max.post(data)
})
//
socket.on('data', (index, data)=>{
	//Max.setDict('data', data);

	Max.outlet('data', data, index);

})
//
//
socket.on('numOkeys', (numOkeys)=>{
	//Max.setDict('data', data);

	Max.outlet('keys', numOkeys);

})
//
//
socket.on('error', (error) => {
  Max.post(error)
});
//
Max.addHandler("bang", () => {
  socket.emit('hey',"there");
});
