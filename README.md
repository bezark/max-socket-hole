# README

Socket is a socket for MAX/MSP. Any socket object can get or send data to or from any other socket object anywhere in the world. Pretty neat!

### Installation

Simply download or clone this repo to your Documents→Max 8→Library folder.

Then quit and restart Max and create a `socket` object.  You can send numbers, lists or symbols into it and that data will pop out on every other `socket` everywhere else on earth! Wowie!

`socket` also comes with a help file. Have fun!

### Best Practices

Given that all sockets on earth talk to each other, it is probably wise to prepend any messages with a "destination" and route for that destination on the other side. See the routing tb in the help file for examples. 

It is also now possible to join different rooms by specifying the `@room` attribute. This will cut down on all the unnceessary cross talk. If you are still unsatisfied, I would suggest [heading over to the glitch project](https://glitch.com/~socket-max-hole) and remixing it yourself. Then all you need to do is change the socket io url argument to whatever your app is called in the serverboi.js script:

```jsx
var socket = io("https://PUT-YOUR-PROJECT-NAME-HERE.glitch.me/");
```

Socket is very much in development and if you have any questions or problems please let me know!