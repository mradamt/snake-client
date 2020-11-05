const hotkeys = require('./constants').hotkeys;
// const { , ,hotkeys, } = require('constants');
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
  if (hotkeys[data]) connection.write(hotkeys[data]);
};


module.exports = { setupInput };

