var fs = require('fs');
var path = require('path');

//arguments
var myPath = process.argv[2];
var ext = process.argv[3];

// fs.readdir(myPath, function(err, list){
// 	for (var i = 0; i < list.length; i++) {
// 		if(list[i].search(/\./)>-1){
// 			var currExt = list[i].slice(list[i].search(/\./)+1);
// 			if (ext === currExt) {
// 				console.log(list[i]);
// 			};
// 		}
// 	};
// })

// OR

fs.readdir(myPath, function(err, list){
	for (var i = 0; i < list.length; i++) {
		if(path.extname(list[i])==='.'+ext){
			console.log(list[i])
		}
	};
})