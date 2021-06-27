const net = require('net');
const strftime = require('strftime');

const server = net.createServer(listener);

server.listen(process.argv[2]);

function listener(socket) {
    socket.end(strftime('%F %H:%M\n'));
}
