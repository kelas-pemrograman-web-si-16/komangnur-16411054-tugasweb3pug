var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', {nama: 'KomangNur'})
})

router.get('/regist/', function(req, res, next) {
    res.render('regist', {nama: 'KomangNur'})
})

module.exports = router;