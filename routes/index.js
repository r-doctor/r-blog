const express = require('express'),
    router = express.Router(),
	date = require('../lib/date'),
    checkLogin = require('../middlewares/check').checkLogin;

router.get('/',(req, res) => {
    res.render('index');
});

module.exports = router;