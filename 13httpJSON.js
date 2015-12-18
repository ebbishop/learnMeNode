var http = require('http');
var querystring = require('querystring');
var url = require('url');

var server = http.createServer(function(request, response) {

		var urlparse = url.parse(request.url, true); // returns object
		
		var myTimeStr = urlparse.query.iso; // returns string
		var myTime = new Date(myTimeStr); // returns object
		var json = JSON.stringify(timeParsed(myTime));
		
		if(urlparse.pathname == '/api/parsetime'){
			response.writeHead(200, {'Content-Type': 'application/json'})
			response.end(JSON.stringify(timeParsed(myTime)));
		}
		if(urlparse.pathname == '/api/unixtime'){
			response.writeHead(200, {'Content-Type': 'application/json'})
			response.end(JSON.stringify(timeUnix(myTime)));
		}
	
})

server.listen(process.argv[2]);

function timeParsed(date){
	return {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()};
}
function timeUnix(date){
	return {unixtime: date.getTime()};
}