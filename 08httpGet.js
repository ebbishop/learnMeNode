var http = require('http');

var url = process.argv[2];

http.get(url, function(response){
	dataString = '';
	response.on('data', function(data){
		dataString += data.toString();
	});
	response.on('end', function(){
		console.log(dataString.length);
		console.log(dataString);
	})
})