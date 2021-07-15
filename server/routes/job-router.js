const express = require('express')

const JobCtrl = require('../controllers/job-ctrl')

const router = express.Router()

router.post('/postJob', JobCtrl.createJob)
router.get('/getJobs', JobCtrl.getJobs)

module.exports = router