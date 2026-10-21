const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlOthers = require('../controllers/others');

/* Home page */
router.get('/', ctrlMain.home);

/* Login and register pages */
router.get('/login', ctrlOthers.login);
router.post('/login', ctrlOthers.doLogin);
router.get('/register', ctrlOthers.register);
router.post('/register', ctrlOthers.doRegister);

module.exports = router;