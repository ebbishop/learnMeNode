var mod = require('./06module.js')

//arguments
var myPath = process.argv[2];
var ext = process.argv[3];

mod(myPath, ext, function(err, arr){
	if(err){throw err;}
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
	}
});