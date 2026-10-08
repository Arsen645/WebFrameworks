const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlMain = require('../controllers/main');
const ctrlTeams = require('../controllers/teams');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

router.get('/', ctrlMain.home);
router.get('/teams', ctrlTeams.teamList);
router.get('/about', ctrlMain.about);

module.exports = router;