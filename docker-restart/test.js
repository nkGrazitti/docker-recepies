// process.exit();
'use strict';

const express = require('express');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
process.on('SIGINT', async () => {
  console.log("killed")
  process.exit(9);
});
// process.on('SIGINT', async () => {
//   console.log("SIGINTkilled")
// });
process.on('SIGTERM', async () => {
  console.log("SIGTERMkilled")
});
process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
  app.close();
});
  
process.on('uncaughtException', (err) => {
  console.error(
    `whoops! Error from searchunify crawler service' ${new Error(err.stack)}`
  );
});

function handle(signal) {
  console.log(`*^!@4=> Received event: ${signal}`)
}
process.on('SIGHUP', handle)