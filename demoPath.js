const p = require('path');
console.log("name"+__dirname);
let config = p.join(__dirname,'config',db.properties);
FileSystem.readFile(config)