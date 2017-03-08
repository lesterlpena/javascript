const http = require('http');
const bl = require('bl');//third party package (npm install -G bl) 

http.get(process.argv[2], (res) => {
	res.setEncoding('utf8');
	let response = '';
	res.pipe(bl((err, data) => {
		if (err) {
			return console.log('Error in the streaming response' + err);
		}
		response += data.toString();
	}));
	res.on('end', (data) => {
		console.log(response.length);
		console.log(response);
	});
}).on('error', (e) => {
	console.log('Error found' + e);
});

// oficial answer
// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })
