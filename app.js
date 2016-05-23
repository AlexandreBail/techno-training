// console.log("test d\'application");


// var fs = require('fs')
// fs.readFile('test1.txt', 'utf8', function (err,data) {
//   if (err) throw err;
//    console.log(data);




//    var i=data.split("\r");
//    	console.log(data);
//    	console.log("${i.lenght}");

  
	  
// });


// -------------------------------------------------------------------------------------------------


let fs = require ("fs");
let names = process.argv[2];

let filePath = "test1.txt"
fs.readFile(filePath, "utf8", function(err, data) {

	if (!names) {
		console.log("erreur valeur"); 

	} else {


		let inData = data+names.replace(/,/g, "\n")+"\n";
	fs.writeFile(filePath, inData, (err) => {
		if (err) throw err;
		console.log('It\'s saved!');
	});

	}

});


