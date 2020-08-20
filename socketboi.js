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
  Max.post("the socket is connected"); // true
 	socket.emit("maxjoin", "hello");
});
//
socket.on('your_id_is', (data)=>{

  Max.post('your socket id is '+ data)
})
//
socket.on('from_maxhole', (index, data)=>{
	//Max.setDict('data', data);

	Max.outlet('data', data);

})
//
//





//
//
socket.on('error', (error) => {
  Max.post(error)
});
////////MAX STUFF

Max.addHandler('emit', () => {

	Max.getDict("sock")
				.then((dict) => {
					sock = dict;
					Max.post('emitting '+ sock.data);
					socket.emit('to_maxhole',sock.data); ///add broadcast specifics here?
				})
				.catch((err) => {
					Max.post(err);
				});

});


///Dict
  var sock = Max.getDict("sock");






Max.addHandler("bang", () => {
  Max.post(sock);
});
