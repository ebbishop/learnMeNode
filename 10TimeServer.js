var net = require ('net');

var server = net.createServer(function(connection){
		connection.write(dateFormatted());
		connection.end();
	});


function dateFormatted(){
	var date = new Date();
	var dateArr = fillZeros([date.getFullYear(),date.getMonth()+1,date.getDate()]);
	var timeArr = fillZeros([date.getHours(), date.getMinutes()]);

	return [dateArr.join('-'),timeArr.join(':')].join(' ') + '\n';
}

function fillZeros(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].toString().length<2){
			arr[i] = '0' + arr[i].toString;
		}
	}
	return arr;
}

server.listen(process.argv[2]);