var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, 'utf8', function(err, data){
	if (err) {throw err};
	var lineBreaks = data.match(/\n/g).length;
	console.log(lineBreaks);
})

