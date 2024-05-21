const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { user: req.session.user });
});

module.exports = router;
