/*
 This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.

 ─────────────────────────────────────────────────────────────────────────────

 ## HINTS

  Don't expect these three servers to play nicely! They are not going to
  give you complete responses in the order you hope, so you can't naively
  just print the output as you get it because they will be out of order.

  You will need to queue the results and keep track of how many of the URLs
  have returned their entire contents. Only once you have them all, you can
  print the data to the console.

  Counting callbacks is one of the fundamental ways of managing async in
  Node. Rather than doing it yourself, you may find it more convenient to
  rely on a third-party library such as [async](https://npmjs.com/async) or
  [after](https://npmjs.com/after). But for this exercise, try and do it
  without any external helper library.
*/

var http = require('http');
var bl = require('bl');

var response = [];
var count = 0;
for (var i = 2; i < 5; i++) {
	apiCall(i);
}

function apiCall(position) {
	http.get(process.argv[position], (res) => {
		res.setEncoding('utf8');
		res.pipe(bl((err, data) => {
			if (err) {
				return console.error('error found' + err);
			}
			response[position] = data.toString();
		}));
		res.on('end', (data) => {
			count++;
			if (count === 3) {
				for(resp in response) {
					console.log(response[resp]);
				}
			}
		})
		
	}).on('error', (error) => {
		console.error('Error found' + error);
	});
}
