# [SOCKET] README

Socket is a socket for MAX/MSP. Any `socket` object can get or send data to or from any other socket object anywhere in the world. Pretty neat!

### Installation

Simply download or clone this repo to your Documents→Max 8→Library folder.

Then quit and restart Max and create a `socket` object.  You can send numbers, lists or symbols into it and that data will pop out on every other `socket` everywhere else on earth! Wowie!

`socket` also comes with a help file. Have fun!

### Best Practices

Given that all sockets on earth talk to each other, it is probably wise to prepend any messages with a "destination" and route for that destination on the other side. See the routing tab in the help file for examples.

Eventually it would be nice to implement a room feature to avoid this practice, but I ain't gettin paid for this yet. 🤷

Socket is very much in development and if you have any questions or problems please let me know!
