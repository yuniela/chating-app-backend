class Sockets {

    constructor(io){
        this.io = io;
        this.socketEvents();
    }

    socketEvents(){
        // on connection
        this.io.on('connection', ( socket ) => { 
        
        // Escuchar evento: mensaje-to-server
        socket.on('client-message', ( data ) => {
            console.log(data)
            // enviar mensaje a todos los del namespace
            this.io.emit('server-message', data);
        });
    
});
    }
}

module.exports = Sockets;