var app=require("express")();
var http=require("http").Server(app);
var io=require("socket.io")(http);
var port= 3000;

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connectio',(socket)=>{
    socket.io('message',(msg)=>{
        io.emit('message',msg);
    });
});

http.listen(port,()=>{
    console.log("Server started on :"+ port);
});