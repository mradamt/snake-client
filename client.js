const net = require('net');

////
// Establishes connection with the game server
////
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', (data) => {
    console.log('Successfully connected to gamey server');
    conn.write("Name: ART")
    // conn.write("Move: left")
    
    // // setTimeout(x => conn.write("Move: left"), 1000)
    // // setTimeout(x => conn.write("Move: up"), 3000)
    // // setTimeout(x => conn.write("Move: right"), 5000)
    // setInterval(() => {
    //   conn.write("Move: up")
    // }, 50);
  });



  return conn;
}


module.exports = {
  connect
};