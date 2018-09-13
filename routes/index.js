var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
    res.sendfile(path.join(__dirname, 'public','html','index.html', {title: 'The javascript web project'}));
});

module.exports = router;
