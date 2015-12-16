var fs = require('fs');
var path = require('path');


var  filteredList = function(pathName, extName, callback){
	var listFiles = [];
	fs.readdir(pathName, function(err, list){
		if(err){throw err;}
		for(var i = 0; i < list.length; i++){
			if(path.extname(list[i])==='.'+extName){
				listFiles.push(list[i]);
			}
		}
		callback(err, listFiles);
	});
}

module.exports.filteredList = filteredList;