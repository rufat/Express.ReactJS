/**
 * @name Socket
 * @description A Socket handler.
 */
class Socket {
    constructor(io) {
        this.io = io;
    }

    main() {
        this.io.on('connection', socket => {
            console.log('[Socket] User connected');
            socket.on('disconnect', () => {
                console.log('[Socket] User disconnected')
            });

            socket.on('color', (data) => {
                log('/color', 'Background color changed.');
                socket.emit('color', data)
            })
        })
    }
}

module.exports = Socket;