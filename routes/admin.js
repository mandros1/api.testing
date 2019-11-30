const path = require('path');

const express = require('express');

const rootDirPath = require('../utils/path');

const router = express.Router();

router.get( '/add-product', (req, res, next) =>{
    res.sendFile(path.join(rootDirPath, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    const { body } = req;
    res.redirect('/');
});

module.exports = router;
