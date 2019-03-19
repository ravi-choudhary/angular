var mysql = require('mysql');
exports.list = function(req,res){
	var con = mysql.createConnection({host:'localhost',user:'root',password:'',database:'demo'});
	con.connect(function(err){
		if(err) throw err;
		console.log('Connected');
		var sql = "Select * from login";
		con.query(sql,function(err,rows){
			if(err) throw err;
			//console.log(result[0].rows);
			res.render('testtable',{page_title:'Test Table',data:rows});
		});
	});
}