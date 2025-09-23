const fs = require('fs');

const syncFile = 'sync_example.txt';
const asyncFile = 'async_example.txt';
const syncData = 'Hello from synchronous write/read!';
const asyncData = 'Hello from asynchronous write/read!';

// ----------- Synchronous Write and Read -----------
try {
  
  fs.writeFileSync(syncFile, syncData);
  console.log('Synchronous: Data written successfully.');

 
  const readSyncData = fs.readFileSync(syncFile, 'utf-8');
  console.log('Synchronous: Data read:', readSyncData);
} catch (err) {
  console.error('Synchronous error:', err);
}

// ----------- Asynchronous Write and Read -----------
fs.writeFile(asyncFile, asyncData, (writeErr) => {
  if (writeErr) {
    return console.error('Asynchronous write error:', writeErr);
  }
  console.log('Asynchronous: Data written successfully.');

  fs.readFile(asyncFile, 'utf-8', (readErr, readAsyncData) => {
    if (readErr) {
      return console.error('Asynchronous read error:', readErr);
    }
    console.log('Asynchronous: Data read:', readAsyncData);
  });
});
