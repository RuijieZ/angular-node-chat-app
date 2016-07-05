var express = require('express');
var router = express.Router();

router.get('/:usertitle?', function(req, res, next) {
    res.render('node', {title: req.params.usertitle ?  req.params.usertitle : ''});
});

router.post('/', function(req, res, next) {
	res.redirect('/' + req.body.title);
});

module.exports = router;
