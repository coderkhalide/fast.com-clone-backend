const express = require('express')
const router = express.Router()
const FastSpeedtest = require('fast-speedtest-api')

router.get('/', async (req, res) => {
    try{
        let speedTest = new FastSpeedtest({
            token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
            verbose: false, // default: false
            timeout: 10000, // default: 5000
            https: true, // default: true
            urlCount: 5, // default: 5
            bufferSize: 8, // default: 8
            unit: FastSpeedtest.UNITS.Kbps // default: Bps
        })

        speedTest.getSpeed().then(speed => {
            res.send({speed: Math.round(speed)})
        }).catch(e => {
            res.status(400).send({error: "Something went wrong here: " + ex})
        })

    }catch(ex){
        res.status(400).send({error: "Something went wrong here: " + ex})
    }
})

module.exports = router