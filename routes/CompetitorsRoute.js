const express = require('express')
const CompetitorsController = require('../controllers/CompetitorsController')

const router = express.Router();
router.post("/registerNew",CompetitorsController.registerCompetitor ) 

module.exports = router