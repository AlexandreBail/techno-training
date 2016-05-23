const fs = require('fs');
const validUrls = {

	'/page2' : 'public/page2.html',
	'/page3' : 'public/page3.html',
	'/' : 'public/index.html',
};

module.export = function(req, res) {
	console.log(validUrls[req.url]);
	if (validUrls[req.url]) {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		fs.readFile(validUrls[req.url], 'utf8', (err,data) => {
			res.end(data);
		});
	} else {
		res.statusCode = 404;
		res.setHeader('content-Type', 'text/plain');
		res.end('this is a 404 error')
	}
}