let connection;

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (data) => {
    handleUserInput(data);
  });
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') process.exit();
  if (data === 'i') connection.write("Move: up");
  if (data === 'j') connection.write("Move: left");
  if (data === 'k') connection.write("Move: down");
  if (data === 'l') connection.write("Move: right");
};


module.exports = { setupInput }

