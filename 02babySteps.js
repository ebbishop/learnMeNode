
var userArgs = process.argv.slice(2);

var getSum = function (args) {
	var sum = 0;
	for(var i = 0;	 i < args.length; i++){
		sum += Number(args[i]);
	}
	return sum;
}

console.log(getSum(userArgs));