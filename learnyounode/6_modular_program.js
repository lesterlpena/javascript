var filtering = require('./6_modular.js');

var directoryName = process.argv[2];
var extension = process.argv[3];

filtering(directoryName, extension, function(err, data) {
	if (err){
		console.log("We found errors:" , err);
	} else {
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	}
});
