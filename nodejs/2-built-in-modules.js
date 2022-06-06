/**
 * OS MODULE - Interaction with de OS module
 */
const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//methods returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

/**
 * PATH MODULE - Interaction with the path system
 */
const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

/**
 * FS MODULE - Interaction with the File System
 */
//FS Sync
const { readFileSync, writeFileSync } = require("fs");
//const fs = require('fs');

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(`${first}\n${second}`);

/*writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}\n${second}`,
  {flag: 'a'}
);*/

//FS Async
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result:\n${first}\n${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

/**
 * The difference between sync and async FS is the line 
 * by line execution, because like the name says in the
 * "synchronous" way is necessary executed according to 
 * order in the code and in the async form you can execute
 * other commands or fuctions 
 */

/**
 * HTTP MODULE - Interaction to transfer data over the HTTP
 */
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end('Welcome to our home page');
  }

  if(req.url === "/about") {
    res.end('Here is our short history');
  }

  res.end(`
    <h1>Oops!</h1>
    <a href="/">Return to Home</a>
  `);
});

server.listen(5000);