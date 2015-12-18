var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function(err, contents){
	console.log(contents.split('\n').length - 1);
});