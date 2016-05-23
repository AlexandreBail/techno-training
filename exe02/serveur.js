const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
	let url = req.url;
	console.log(url)

	if (url.indexOf('.jpg' || '.gif' || 'png') !== -1) {
		res.statusCode = 200;
		let readStream = fs.createReadStream('public${url}');
		readStream.on('open',function() {
			readStream.pipe(res);
		});
		readStream.on('error',function(err) {
			res.end(err);
		});
	} else {

		if (url !== '/' && url !== '/favicon') {
		res.statusCode = 404;
		res.setHeader('content-Type', 'text/html');
		res.end('this is a 404 error');

	}
	else{
			
  		res.statusCode = 200;
  		res.setHeader('Content-Type', 'text/html');
  		fs.readFile('public/index.html','utf8',(err,data) => {
  			res.end(data);
  		});

		}
	}		

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



