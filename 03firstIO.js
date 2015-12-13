var fs = require('fs');
var filePath = process.argv[2];

var data = fs.readFileSync(filePath).toString();

console.log(data.match(/\n/g).length);


