var mysql = require('mysql');

var con = mysql.createConnection({
    host: "b8rg15mwxwynuk9q.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
    user: "cc6csscad23lguts",
    password: "fjj61ovbfy42f309",
    database : 'xflgt0e47noofm0b'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;