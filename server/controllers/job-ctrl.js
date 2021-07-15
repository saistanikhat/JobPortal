const Job = require('../../models/job-model')

createJob = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a job',
        })
    }

    const job = new Job(body)

    if (!job) {
        return res.status(400).json({ success: false, error: err })
    }

    job
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: job.id,
                message: 'Job created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Job not created!',
            })
        })
}

getJobs = async (req, res) => {
    await Job.find({}, (err, jobs) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!jobs.length) {
            return res
                .status(404)
                .json({ success: false, error: `Job not found` })
        }
        return res.status(200).json({ success: true, data: jobs })
    }).catch(err => console.log(err))
}

module.exports = {
    createJob,
    getJobs
}