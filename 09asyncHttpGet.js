var http = require('http');

var allResponses = {};
var responseCount = 0;

function getEtc(url, id){
	http.get(url,function(response){
		var dataString = '';
		response.on('data',function(data){
			dataString += data.toString();
		});
		response.on('end', function(){
			responseCount ++;
			collectResponses(dataString,id);
		})
	});
}

function collectResponses(data, id){
	allResponses[id]=data;
	if(responseCount==3){
		printResponses(allResponses);
	}
}

function printResponses(obj){
	for(var i = 0; i<3; i++){
		console.log(obj[i]);
	}
}

for(var i = 0; i < 3; i++){
	getEtc(process.argv[i+2], i);
}