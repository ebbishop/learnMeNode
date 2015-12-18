var fs = require('fs');
var path = require('path');


var  filteredList = function(pathName, extName, callback){
	var listFiles = [];

	fs.readdir(pathName, function(err, list){

		// don't use throw err here: pass it to the callback so it will 
		// get passed backto the 'run' module
		// why would we *return* the callback, instead of just calling 
		// it? it doesn't seem to matter on line 21.
		if(err){return callback(err);}
		
		for(var i = 0; i < list.length; i++){
			if(path.extname(list[i])==='.'+extName){
				listFiles.push(list[i]);
			}
		}
		return callback(null, listFiles);
	});
}

// could be (except for test specs:
// module.expors.filteredList = filteredList
module.exports = filteredList;