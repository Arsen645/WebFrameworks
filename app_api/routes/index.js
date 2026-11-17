const express = require('express');
const router = express.Router();

const ctrlTeams = require('../controllers/teams');
const ctrlAuth = require('../controllers/auth');

router.get('/teams', ctrlTeams.teamsList);
router.post('/teams', ctrlTeams.teamsCreate);
router.get('/teams/:teamid', ctrlTeams.teamsReadOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;