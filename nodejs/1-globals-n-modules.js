/**
 * GLOBALS - NO WINDOW OBJECT
 * 
 * __dirname - path to current directory
 * __filename - file name
 * require - function to use modules (Common JS)
 * module - info about current module (file)
 * process - infor about env where the program is being executed
 * 
 */

console.log(__dirname);
/*setInterval(() => {
  console.log(__filename);
}, 1000);*/

/**
 * MODULES
 * CommonJS, every file is module (by default)
 * Encapsulated code (only share minimum)
 */

const names = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-exports');

console.log(data);
console.log(names);
sayHi(names.john);
sayHi(names.john);
sayHi('Susy Su');

require ('./mind-grenade');


