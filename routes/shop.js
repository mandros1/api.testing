const path = require('path');

const rootDirPath = require('../utils/path');

const express = require('express');

const router = express.Router();

router.get( '/', (req, res, next) =>{
    res.sendFile(path.join(rootDirPath, 'views', 'shop.html'));
});

module.exports = router;
