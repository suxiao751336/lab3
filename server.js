var express = require('express');
var mysql = require('mysql');
var app = express();


var pool  = mysql.createPool({
    connectionLimit : 10,
    host: 'us-cdbr-iron-east-05.cleardb.net',
	user: 'ba7c7911ddf522',
	password: '4847e5c8',
	database: 'heroku_9d1a16551a2b098'
  });
  app.get('/', function(request,response){
  pool.query('select * from suxiaodb', function (err, rows, fields) {
    if(err){
		console.log('error',err);
		throw err;
	}
		response.send(['hello Mr xiao!!!',rows]);
  });
});
// var connection =mysql.createConnection({
	
// 	host: 'us-cdbr-iron-east-05.cleardb.net',
// 	user: 'ba7c7911ddf522',
// 	password: '4847e5c8',
// 	database: 'heroku_9d1a16551a2b098'
// });

// connection.connect();





// app.get('/', function(request,response){
// 	 connection.query('select * from suxiaodb',function(err,rows,fields){
// 	    if(err){
// 		console.log('error',err);
// 		throw err;
// 	}
// 		response.send(['hello Mr xiao!!!',rows]);
		
	
// });
// });
var port =process.env.PORT || 5000;

app.listen(port,function(){
	console.log("listen on" + port);
});