var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'database-1.cdbrt00yi2pz.ap-northeast-2.rds.amazonaws.com',
    user: 'admin',
    password: '11111111',
    database: 'mydb'
});
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
    connection.query('select * from topic', function (error, results, fields) {
      console.log('error=>', error);
      console.log('results=>', results);
      console.log('fields=>', fields);
    });
});
