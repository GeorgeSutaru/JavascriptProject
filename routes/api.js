var express = require('express');
var router = express.Router();
var database = require('../public/javascripts/database.js');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.sendfile(path.join(__dirname, 'public','html','index.html', {title: 'The javascript web project'}));
});*/

router.get('/issues', function(req, res) {
    database.query("SELECT id, description, isDone, assignee FROM tasks", function (err, result, fields) {
        if (err) throw err;
        res.json({
            header: ['No', 'Task description', 'Assignee'],
            body: result});

    });
});

router.get('/navigationBar', function(req, res) {
    res.json({
        navigationBar : [
            {name: "Home", url: "index.html"},
            {name: "Cleo's page", url: "cleo.html"},
            {name: "Contact", url: "contact.html"},
            {name: "About", url: "about.html"}
        ]
     });
});

router.get('/users', function(req, res) {
    database.query("SELECT id, username FROM users", function (err, result, fields) {
        if (err) throw err;
        res.json(result);
    });
});

module.exports = router;
