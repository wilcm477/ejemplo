var app = require('express')();
var http = require('http').Server(app);
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

server.listen(3000, function() {
  console.log("Servidor corriendo en http://localhost:8000");
});

/*
io.on('connection', function(socket) {
  console.log('Alguien se ha conectado con Sockets');
  socket.emit('messages', messages);
  
  socket.on('new-message', function(data) {
    messages.push(data);

    io.sockets.emit('messages', messages);
  });
});*/