var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
	contents.pipe(response);
	// how would we call response.end() in this situation?
})

server.listen(process.argv[2]);

var contents = fs.createReadStream(process.argv[3],'utf8');