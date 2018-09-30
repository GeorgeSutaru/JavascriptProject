var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.sendfile(path.join(__dirname, 'public','html','index.html', {title: 'The javascript web project'}));
});*/

router.get('/issues', function(req, res) {
    res.json({
        header: ['No', 'Task description', 'Assignee'],
        body: [
            [1 , 'Create page and configure git and heroku infrastructure!', 'GG', true ],
            [2 , 'Add table basic css', 'MH', true],
            [3, 'add button to mark issue as solved', 'MH', true],
            [4, 'add backend data support which loads table from backend api', 'GG', true],
            [5, 'add edit functionality to table', 'Cleo', true],
            [6, 'create endpoints to store and retrieve table data','TBD', false],
            [7, 'create database layer and link it to REST api middleware', 'GG', false]
        ]});
});

router.get('/users', function(req, res) {
    res.json({
        users: ['GG', 'MH', 'Cleo']});
});

module.exports = router;
